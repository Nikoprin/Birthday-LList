import React, { useState } from "react";
import BirthdayIcon from "../Images/birthday.png";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
function BirthdayForm({ addNewUser, setModal }) {
  const [user, setUser] = useState({ name: "", age: "" });
  const addNewBirthday = () => {
    const newUser = {
      ...user,
      id: Date.now(),
    };
    addNewUser(newUser);
    setModal(false);
  };
  return (
    <div>
      <img
        src={BirthdayIcon}
        alt="Icon"
        style={{ width: "80px", margin: "15px 0" }}
      />
      <h3>Add new Event</h3>
      <Input
        placeholder="Type name here"
        value={user.name}
        onChange={(event) => setUser({ ...user, name: event.target.value })}
      />
      <Input
        type="number"
        placeholder="Type age here"
        value={user.age}
        onChange={(event) => setUser({ ...user, age: event.target.value })}
      />
      <Button style={{ width: "100%" }} onClick={addNewBirthday}>
        Add
      </Button>
    </div>
  );
}

export default BirthdayForm;
