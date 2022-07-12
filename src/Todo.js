import React, { useState, useEffect } from 'react'
import List from './components/List' //O ideal é que o componente tenha o mesmo nome do arquivo
import Item from './components/Item'
import TodoForm from './components/TodoForm'
import Modal from './components/Modal'
import './Todo.css'

const SAVED_ITEMS = "savedItems"

function Todo() { 
    const [showModal, setShowModal] = useState(false)
    const [items, setItems] = useState([]);

    //useEffect(() => {

    //}) desse jeito, irá fazer o que está dentro de chaves sempre q qlq estado for alterado
    //},[])  desse jeito, irá fazer o que está dentro de chaves apenas uma vez

    useEffect(() => {
        let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS)) //JSON.parse transforma de uma string para um objeto JSON, ou seja, um array
        if (savedItems) {
            setItems(savedItems);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(SAVED_ITEMS, JSON.stringify(items)) //salva no localStorage, e para isso, o items deve ser uma string
    }, [items]) //se houver alteração nos items, faz o que está entre chaves, antes da vírgula
    
    function onAddItem(text) {
        let item = new Item(text); //passa o text para o constructor
        setItems([...items, item])
        onHideModal(); //o botão de incluir vai sumir quando adicionado um item
    }

    function onItemDeleted(item) {
        let filteredItems = items.filter(it => it.id !== item.id) //filtra todos os itens, menos o que foi passado, o "item"

        setItems(filteredItems)
    }

    function onDone(item) {
        let updatedItems = items.map(it => {
            if (it.id === item.id) {
                it.done = !it.done;
            }
            return it;
        })
        setItems(updatedItems);
    }

    function onHideModal() {
        setShowModal(false)
    }

    return (<div className="container">
            <header className='header'><h1>Todo</h1> <button onClick={() => {setShowModal(true) }} className='addButton'>+</button></header>
            {/*<TodoForm onAddItem = {onAddItem}></TodoForm> */}
            <List onDone={onDone} onItemDeleted={onItemDeleted} items={items}></List>
            <Modal show={showModal} onHideModal={onHideModal}><TodoForm onAddItem={onAddItem}></TodoForm></Modal>
    </div>)
}



export default Todo