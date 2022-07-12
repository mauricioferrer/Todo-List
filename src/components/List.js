import React from 'react'
import ListItem from './Listitem';


function List(props) { //Para passar um estado de um pai para um filho usa props
    return (<ul >
        {props.items.map(item => <ListItem key={item.id} item={item} onDone={props.onDone} onItemDeleted={props.onItemDeleted}></ListItem>)} //estamos repassando para que o item tenha acesso no Todo
    </ul>) //tem que ser item.text pq item agora é objeto, e não texto
}

export default List;