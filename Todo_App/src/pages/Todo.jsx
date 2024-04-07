import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO_STATUS,
} from "../redux/todo_redux/action";
import { useToast } from "@chakra-ui/react";
import TodoItem from "../components/TodoItem";

function Todo() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]); 
  const dispatch = useDispatch();
  const toast = useToast();

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const getData = async () => {
    try {
      const res = await axios("http://localhost:3000/todo");
      setTodos(res.data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []); 
  const handleTodoStatus = async (id, status) => {
    try {
      const newStatus = !status;

      await axios.patch(`http://localhost:3000/todo/${id}`, {
        status: newStatus,
      });

  
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id ? { ...todo, status: newStatus } : todo
        )
      );
      dispatch(updat)
    } catch (error) {
      console.log(error);
    }
  };

  const handleTodoDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/todo/${id}`);

     
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddTodo = async () => {
    try {
      const newTodo = {
        id: Date.now(),
        title: input,
        status: false,
      };
      const res = await axios.post("http://localhost:3000/todo", newTodo);

      setTodos((prevTodos) => [...prevTodos, newTodo]);

      toast({
        title: "Add todo",
        description: "Todo added successfully",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      setInput("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Enter todo..."
          value={input}
          onChange={handleChange}
        />
        <button onClick={handleAddTodo}>ADD</button>
      </div>
      {todos.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          status={item.status}
          title={item.title}
          handleTodoStatus={handleTodoStatus}
          handleTodoDelete={handleTodoDelete}
        />
      ))}
    </>
  );
}

export default Todo;
