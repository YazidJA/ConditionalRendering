import React, { useState } from "react";
import Button from "./Button";
import Form from "./Form";

function App() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const login = () => {
    setIsRegistered(true);
    setIsClicked(true);
  };

  const register = () => {
    setIsRegistered(false);
    setIsClicked(true);
  };

  return (
    <div className="container">
      {!isClicked && (
        <div>
          <Button onClick={login} text="Login" />
          <Button onClick={register} text="Register" />
        </div>
      )}
      {isClicked && <Form isRegistered={isRegistered} />}
    </div>
  );
}

export default App;
