import React, { useState } from 'react'

function TodoForm(props) {
    const [text, setText] = useState("");

    function handleChange(event) {
        let t = event.target.value;
        setText(t);
    }

    function addItem(event) {
        event.preventDefault();//evita que o dado seja enviado para o backend
        if (text) {
            props.onAddItem(text);
        }
    }

    return (<form>
                <input onChange={handleChange} type="text" value={text}></input>
                <button onClick={addItem}>Add</button>
            </form>)
}

export default TodoForm;