import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  addTodo,
  deleteTodo,
  updateTodoStatus,
} from "../redux/todo_redux/actionItem";
import { useToast } from "@chakra-ui/react";

import "../index.css";

function Todo() {
  const [input, setInput] = useState("");
  const todo = useSelector((state) => state.todo.todo);
  const current_user_state = useSelector((s) => s.auth.auth_user);
  const [todos, setTodos] = useState(todo);
  const dispatch = useDispatch();
  const toast = useToast();

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    setTodos(todo);
  }, [todo]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/todo");
      setTodos(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleTodoStatus = async (id, status) => {
    try {
      if (!current_user_state) {
        toast({
          title: "Login",
          description: "You need to login first !",
          status: "warning",
          duration: 4000,
          isClosable: true,
        });
        return;
      }
      await dispatch(updateTodoStatus(id, status));
      getData();
    } catch (error) {
      console.log(error);
    }
  };

  const handleTodoDelete = async (id) => {
    try {
      if (!current_user_state) {
        toast({
          title: "Login",
          description: "You need to login first !",
          status: "warning",
          duration: 4000,
          isClosable: true,
        });
        return;
      }

      await dispatch(deleteTodo(id));
      getData();
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddTodo = async () => {
    try {
      if (!current_user_state) {
        toast({
          title: "Login",
          description: "You need to login first !",
          status: "warning",
          duration: 4000,
          isClosable: true,
        });
        return;
      }
      const newTodo = {
        title: input,
        status: false,
      };

      await dispatch(addTodo(newTodo));
      setInput("");
      getData();
      toast({
        title: "Add todo",
        description: "Todo added successfully",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="todo">
        <input
          type="text"
          placeholder="Enter todo..."
          value={input}
          onChange={handleChange}
        />
        <button onClick={handleAddTodo}>ADD</button>
      </div>
      {todos.map((item) => (
        <p className="items" key={item.id}>
          {item.title} - {item.status ? "Completed" : "Pending"}{" "}
          <button onClick={() => handleTodoStatus(item.id, item.status)}>
            Toggle
          </button>{" "}
          <button onClick={() => handleTodoDelete(item.id)}>Delete</button>{" "}
        </p>
      ))}
    </>
  );
}

export default Todo;
