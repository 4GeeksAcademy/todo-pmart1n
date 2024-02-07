import { element, string } from "prop-types";
import React, { useState} from "react";
export const TodoList = () => {
    const [task, setTask] = useState('')
    const [list, setList] = useState([])
    const  addTask = (Event) => {
        Event.preventDefault();
        if (task.trim() !== '') { // Verifica que el valor no esté vacío
            setList([...list, task.trim()]);
            setTask('');
        }
    }
    const deleteTask = (item) => {
        setList(list.filter((element) => element != item))
    }
    return (
    <div>
        <h1 className="text-success">Todo List </h1>
        <div className="container col-5">
        <form onSubmit={addTask}>
            <input type="text" className="form-control my-5" placeholder={list.length ? "Anadir tareas" : "No hay tareas pendientes, añada una.."}
            value={task}
            onChange={(Event) => setTask(Event.target.value)}
            />
        </form>
            <h2 className="my-5 text-danger">Tareas pendientes</h2>
            <div>
                <ul className="list-group">
                    {list.map((item, id) => <li key={id} className="list-group-item d-flex justify-content-between hidden-icon" >
                        {item}
                        <span onClick={() => deleteTask(item)}>
                        <i className="fas fa-trash text-danger"></i>
                        </span>
                    </li>)
                    }
                </ul>
            </div>
            <h5 className="my-3">{list.length} tareas pendientes</h5>
        </div>
    </div>
    )
}