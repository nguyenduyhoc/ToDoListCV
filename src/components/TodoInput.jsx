import React, { useState } from 'react';
import { addTodo } from '../redux/actions';
import {v1 as uuid} from 'uuid';
import { useDispatch } from 'react-redux';

export default function TodoInput() {
    let [name, setName] = useState();
    let dispatch = useDispatch();
    return (
        <div className="justify-content-between d-flex">
            <h1>DASHBOARD</h1>
            <div>
                <input
                value={name}
                onChange={(e)=>setName(e.target.value)}
                type="text"
                placeholder="New Todo List"/>
                <button          
                onClick={()=>{
                       dispatch(addTodo({
                        id: uuid(),
                        name: name
                    }));
                        setName('');
                    }}
                className="btn btn-primary mx-2">Add</button>
            </div>
        </div>
    )
}


