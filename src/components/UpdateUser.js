import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const UpdateUser = () => {
  const storedUser = useLoaderData();

  const [user, setUser] = useState(storedUser);

  const handleUpdateUser = (event) => {
    const form = event.target;
    event.preventDefault();
    // console.log(user);
    fetch(`http://localhost:5000/users/${storedUser._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user), //mind it (user is ultimate value )
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          alert("updated user");
        }
      });
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    const field = event.target.name;
    const newUser = { ...user };
    newUser[field] = value;
    setUser(newUser);
  };

  return (
    <div>
      <h2>Please update your information: {storedUser.name}</h2>
      <form onSubmit={handleUpdateUser}>
        <input
          onChange={handleInputChange}
          type="text"
          name="name"
          placeholder="name"
          defaultValue={storedUser.name}
          required
        />
        <br />
        <input
          onChange={handleInputChange}
          type="text"
          name="address"
          placeholder="address"
          defaultValue={storedUser.address}
          required
        />
        <br />
        <input
          onChange={handleInputChange}
          type="email"
          name="email"
          defaultValue={storedUser.email}
          placeholder="email"
          required
        />
        <br />
        <button type="submit">Update User</button>
      </form>
    </div>
  );
};

export default UpdateUser;
