import React, { useState } from "react";
import "./App.css";
import BirthdayList from "./Components/BirthdayList/BirthdayList";
import Button from "./Components/UI/Button/Button";
export default function App() {
  const [showUsers, setShowUsers] = useState(false);
  const [users, setUsers] = useState([
    {
      name: "Anne Shirley",
      age: "22",
      image:
        "https://static.ngs.ru/news/99/preview/4f722eb86f83e791bc7970754eb1ffea030345a3_599_399_c.jpg",
      id: 1,
    },
    {
      name: "Anastasia Miller",
      age: "30",
      image:
        "https://i.pinimg.com/736x/b4/72/a1/b472a1234f0fad2a6bd45750c14e7bec.jpg",
      id: 2,
    },
    {
      name: "John Smith",
      age: "18",
      image: "https://vjoy.cc/wp-content/uploads/2020/10/1132239.jpg",
      id: 3,
    },
    {
      name: "John Carroll",
      age: "15",
      image:
        "https://icdn.lenta.ru/images/2020/09/23/11/20200923115707206/square_1280_webp_8557a23b121ef7f8926cb6916a5a55c4.webp",
      id: 4,
    },
  ]);
  const newUser = (user) => {
    setUsers([...users, user]);
  };
  const removeUser = (user) => {
    setUsers(users.filter((u) => u.id !== user.id));
  };
  return (
    <div className="App">
      <Button
        style={{ position: "absolute", top: "30px" }}
        onClick={() => setShowUsers(true)}
      >
        Show Users
      </Button>
      <BirthdayList
        active={showUsers}
        setActive={setShowUsers}
        users={users}
        addNewUser={newUser}
        remove={removeUser}
        setUsers={setUsers}
      />
    </div>
  );
}
