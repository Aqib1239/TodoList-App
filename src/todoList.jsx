import React, { useState } from 'react'

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [editMode, setEditMode] = useState(false);
    const [editId, setEditId] = useState(null);
    const [editValue, setEditValue] = useState('');

    const addTodo = () => {
        if (inputValue.trim() !== '') {
            const newTodo = {
                id: new Date().getTime(),
                text: inputValue,
            }
            setTodos([...todos, newTodo]);
            setInputValue('');
        }

    }
    const deleteTodo = (id) => {
        const updateTodos = todos.filter
            ((todo) => todo.id !== id);
        setTodos(updateTodos);
    }
    const editModes = (id, text) => {
        setEditMode(true);
        setEditId(id);
        setEditValue(text);

    }
    const updateTodo = () => {
        const updatedTodos = todos.map((todo) => {
            if (todo.id === editId) {
                return { ...todo, text: editValue };
            }
            return todo;
        });
        setTodos(updatedTodos);
        setEditMode(false);
        setEditId(null);
        setEditValue('');
    }

    return (
        <div className='section d-flex align-items-center'>
            <div className="container border border-warning border-opacity-50 border-3 rounded-5 w-75">
                <h1 className='d-flex justify-content-center display-2'>Task <span className='text-warning ms-1 '>Buddy</span></h1>

                <div className="d-flex justify-content-center input-group pt-4 pb-4">
                    <input type='text' className='form-control-sm w-50 border border-primary  rounded me-1' placeholder='What is the task today...' aria-label='What is the task today...' aria-describedby='button-addon2' value={inputValue} onChange={(e) =>
                        setInputValue(e.target.value)} />
                    {
                        editMode ? (
                            <div className='d-flex p-2'>
                                <div>
                                    <input type="text" className='form-control-sm border border-warning rounded'
                                        value={editValue}
                                        onChange={(e) => setEditValue
                                            (e.target.value)} /></div>
                                <div>
                                    <button className='btn btn-outline-warning btn-sm rounded ms-1' type='button' id='button-addon2' onClick={updateTodo}>Update</button>
                                </div>
                            </div>
                        ) : (
                            <div className=''>
                                <button className='btn btn-outline-primary' type='button' id='button-addon2' onClick={addTodo}>Add</button>
                            </div>
                        )
                    }
                </div>
                <ul>
                    {todos.map((todo) => (
                        <li className='d-flex justify-content-center w-auto'>
                            <div className='textBox text-info col-sm-8 m-3  border-secondary border-bottom  fs-6 overflow-x-auto' key={todo.id}>
                                {todo.text}
                            </div>
                            <div className="btn-group m-3  h-25">
                                <button className='btn btn-outline-danger' type='button' id='button-addon2' onClick={() =>
                                    deleteTodo(todo.id)}>Delete</button>
                                <button className='btn btn-outline-info' type='button' id='button-addon2' onClick={() =>
                                    editModes(todo.id, todo.text)}>Edit</button>
                            </div>
                        </li>))}
                </ul>
            </div>
        </div>
    )
};


export default Todo