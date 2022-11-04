import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

const Form = (props) => {
  const [data, setData] = useState({ username: "", password: "" });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <form className="form">
      <h1>Hello {data.username}</h1>
      <Input
        type="text"
        placeholder="Username"
        name="username"
        onChange={changeHandler}
        value={data.username}
      />
      <Input
        type="password"
        name="password"
        placeholder="Password"
        onChange={changeHandler}
        value={data.password}
      />
      {!props.isRegistered && (
        <Input
          type="password"
          name="password"
          placeholder="Confirm Password"
          onChange={changeHandler}
          value={data.password}
        />
      )}
      <Button
        type="submit"
        text={props.isRegistered ? "Login" : "Register"}
        onClick={submitHandler}
      />
    </form>
  );
};

export default Form;
