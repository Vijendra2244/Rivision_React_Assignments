import React from "react";
import { useDispatch } from "react-redux";
import { DELETE_TODO, UPDATE_TODO_STATUS } from "../redux/todo_redux/action";
import axios from "axios";

function TodoItem({ id, status, title }) {
  const dispatch = useDispatch();

  const handleTodoStatus = async () => {
    try {
      const newStatus = !status;

      await axios.patch(`http://localhost:3000/todo/${id}`, {
        status: newStatus,
      });

      dispatch({
        type: UPDATE_TODO_STATUS,
        payload: { id, status: newStatus },
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleTodoDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/todo/${id}`);

      dispatch({
        type: DELETE_TODO,
        payload: id,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <p>
        {title} - {status ? "Completed" : "Pending"}{" "}
        <button onClick={handleTodoStatus}>Toggle</button>{" "}
        <button onClick={() => handleTodoDelete(id)}>Delete</button>{" "}
        {/* Removed unnecessary parameters */}
      </p>
    </div>
  );
}

export default TodoItem;
