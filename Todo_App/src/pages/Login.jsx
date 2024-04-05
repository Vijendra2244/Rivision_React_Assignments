import React, { useState } from "react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { Navigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const loginViaReqres = async () => {
    try {
      const response = await axios.post("https://reqres.in/api/login", {
        email: formData.email,
        password: formData.password,
      });
      if (response.data.token) {
        console.log(response.data.token);
        setFormData({
          email: "",
          password: "",
        });
        toast({
          title: "Account created.",
          description: "Login successfully",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginViaReqres();
  };

  return (
    <div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "20%",
          margin: "auto",
          border: "1px solid black",
          borderRadius: "6px",
          padding: "10px",
          gap: "0.5rem",
          marginTop: "1rem",
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="email">Enter your email...</label>
        <input
          style={{ border: "1px solid black" }}
          onChange={handleChange}
          type="text"
          name="email"
          id="email"
          value={formData.email}
        />
        <label htmlFor="password">Enter your password...</label>
        <input
          style={{ border: "1px solid black" }}
          onChange={handleChange}
          type="password"
          name="password"
          id="password"
          value={formData.password}
        />
        <input
          style={{
            backgroundColor: "green",
            color: "white",
            padding: "3px",
            borderRadius: "6px",
            cursor: "pointer",
          }}
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
}

export default Login;
