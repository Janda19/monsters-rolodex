
import React from 'react'
import  './card-list.style.css';
import {Card} from '../card/card.component'
export const CardList  =  props =>
{
    return <div className="card-list">
        {props.monters.map(el => <Card key={el.id} monster={el}/>)}

    </div>
}
