"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const page = ({ params }) => {
  const { id } = params;
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users/" + id
    );
    setUsers(data);
    console.log(data);
  };
  useEffect(() => {
    getUsers();
  }, []);
  return <h1>{JSON.stringify(users)}{id}</h1>;
};
export default page;
