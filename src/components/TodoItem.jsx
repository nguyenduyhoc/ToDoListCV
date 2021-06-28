import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/actions";
import OpenItems from "./OpenItems";
import { useSelector } from 'react-redux'


function TodoItem({ todo }) {
  const [editList, setEditList] = useState(false);
  const [itemTextBox, setItemTextBox] = useState(false);
  const [name, setName] = useState(todo.name);
  const [item, setItems] = useState();
  let items = useSelector(state => state);
  let dispatch = useDispatch();


  return (
    <div>
      <div className="modal-dialog">
        <div className="modal-content ">
          <div className="modal-header bg-primary">
            <div className="col">
              {editList ? (
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              ) : (
                <h4 className="text-white">{todo.name}</h4>
              )}
            </div>
            <button
              className="btn btn-success m-2"
              onClick={() => {
                dispatch(
                  updateTodo({
                    ...todo,
                    name: name,
                  })
                );
                if (editList) {
                  setName(todo.name);
                }
                setEditList(!editList);
              }}
            >
              {editList ? "Update" : "Edit"}
            </button>
            <button className="m-2" onClick={() => setItemTextBox(true)}>
              <i class="fas fa-plus"></i>
            </button>
            <button className="m-2" onClick={() => dispatch(deleteTodo(todo.id))}>
              <i class="far fa-trash-alt"></i>
            </button>
          </div>
          <div className="modal-body">          
            {itemTextBox ? (
              <div>
                <input
                  placeholder="New items"
                  value={item}
                  onChange={(e) => {
                    setItems(e.target.value);
                  }}
                  type="text"
                ></input>
                <button className="btn btn-success ml-2" onClick={()=>{
                    setItems('');      
                }}>Add items</button>
                <OpenItems items={items} />
              </div>             
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
