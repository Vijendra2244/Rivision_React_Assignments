import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { ADD_TODO } from "../redux/todo_redux/action";
import { useToast } from "@chakra-ui/react";
import TodoItem from "../components/TodoItem";

function Todo() {
  const [input, setInput] = useState("");
  const todos = useSelector((state) => state.todo.todo);
  const dispatch = useDispatch();
  const toast = useToast();

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const getData = async () => {
    try {
      const res = await axios("http://localhost:3000/todo");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleAddTodo = async () => {
    try {
      const newTodo = {
        id: Date.now(),
        title: input,
        status: false,
      };
      const res = await axios.post("http://localhost:3000/todo", newTodo);
      dispatch({ type: ADD_TODO, payload: newTodo });
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
        <TodoItem key={item.id} {...item} />
      ))}
    </>
  );
}

export default Todo;
