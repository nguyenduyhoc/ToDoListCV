import React,{useState} from "react";


export default function OpenItems(props) {
  const { items } = props;

  return (
    <div>
      <div className="my-4">
        {items.map((item) => {
          return (
            <div className="d-flex" key={items.id}>
              <p>{item.items}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
