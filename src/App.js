import './App.css';
import {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

class App extends Component {
    constructor() {
        super();
        this.state = {
            monsters: [],
            searchField: ''
        }


        this.changeHandler = this.changeHandler.bind(this)
    }


    changeHandler(e) {
        this.setState({searchField: e.target.value})
    }

    render() {
        const {monsters, searchField} = this.state;

        const filteredMonster = monsters.filter(monster =>
            monster.name.toLowerCase().includes(searchField.toLowerCase())
        );

        return (

            <div className='App'>
                <h1>Monsters Rolodex</h1>
                <SearchBox placeholder='search monsters' changeHandler={this.changeHandler}/>

                <CardList monters={filteredMonster}/>

            </div>
        )

    }

    componentDidMount() {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                this.setState({monsters: users})
            })
            .catch(err => console.log('there\'s an error'))

    }


}

export default App;
