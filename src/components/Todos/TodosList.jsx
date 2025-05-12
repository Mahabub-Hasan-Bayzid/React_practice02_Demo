import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import React from "react";
import { useState, useEffect } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then(setTodos)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then(setUsers)
      .catch(console.error)
      .finally(() => setLoading(false));
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
                return <p key={todo.id}>{todo.title} ✅</p>;
              } else {
                return <p key={todo.id}>{todo.title} ❌</p>;
              }
            })}
        </div>
      ))}
    </div>
  );
};

export default Todos;
