import React, { useState } from "react";
import { Link } from "react-router-dom";

//

const AddUser = () => {
  const [user, setUser] = useState({});

  const handleAddUser = (event) => {
    const form = event.target;
    event.preventDefault();
    console.log(user);

    fetch(`http://localhost:5000/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("user added successfully");
          form.reset();
        }
      });
  };

  const handleInputBlur = (event) => {
    const value = event.target.value;
    const field = event.target.name;
    const newUser = { ...user };
    newUser[field] = value;
    setUser(newUser);
  };
  return (
    <div>
      <Link to="/">home</Link>
      <br />
      <Link to="/users/add">Users</Link>
      <h2>Please add a new user</h2>
      <form onSubmit={handleAddUser}>
        <input
          onChange={handleInputBlur}
          type="text"
          name="name"
          placeholder="name"
          required
        />
        <br />
        <input
          onChange={handleInputBlur}
          type="text"
          name="address"
          placeholder="address"
          required
        />
        <br />
        <input
          onChange={handleInputBlur}
          type="email"
          name="email"
          id=""
          placeholder="email"
          required
        />
        <br />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
