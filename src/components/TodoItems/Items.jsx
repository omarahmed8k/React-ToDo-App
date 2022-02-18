import React from "react";
import { toast } from "react-toastify";
import "./Items.css";

const Items = (props) => {
  const { items, deleteItem } = props;
  const lengthItems = props.items.length;
  const listItems = lengthItems ? (
    items.map((item) => {
      return (
        <li key={item.id}>
          <p className="item">{item.text}</p>
          <button
            className="delete"
            onClick={() => {
              deleteItem(item.id);
              toast.warn("Deleted!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            }}
          >
            delete
          </button>
        </li>
      );
    })
  ) : (
    <li className="empty" key={Math.random()}>
      <p>No items</p>
    </li>
  );
  return <ul>{listItems}</ul>;
};

export default Items;
