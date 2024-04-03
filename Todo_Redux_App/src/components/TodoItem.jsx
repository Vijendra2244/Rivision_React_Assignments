import React from "react";
import "../index.css";

function TodoItem({ id, title, status }) {
  return (
    <div className="items">
      <p>
        {title} - {status ? "completed" : "pending"}
      </p>
    </div>
  );
}

export default TodoItem;
