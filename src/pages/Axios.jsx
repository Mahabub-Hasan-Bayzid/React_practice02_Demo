import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";

const Axios = () => {
  const [todos, setPosts] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos")
    .then((res)=>setPosts(res.data))
    .catch((error)=> console.log(error))
    .finally(()=> se)
  }, []);

  console.log("todos: ", todos);
  console.log("users: ", users);

  return loading ? (
    <div>Loading...</div>
  ) : (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <h3>Todos:</h3>
          {todos
            .filter((todo) => todo.userId === user.id)
            .sort((a, b) => a.completed - b.completed)
            .map((todo) => {
              if (todo.completed) {
                return (
                  <p key={todo.id}>
                    {todo.title} ✅
                  </p>
                );
              } else {
                return (
                  <p key={todo.id}>
                    {todo.title} ❌
                  </p>
                );
              }
            })}
        </div>
      ))}
    </div>
  );
};

export default Axios;
