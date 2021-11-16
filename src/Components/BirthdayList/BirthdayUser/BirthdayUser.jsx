import React from "react";
import Button from "../../UI/Button/Button";
import classes from "./BirthdayUser.module.css";
import UserPhoto from "../../Images/Profile.png";
export default function BirthdayUser({ user, remove }) {
  return (
    <div className={classes.users}>
      <div className={classes.profile}>
        <div>
          <img src={!user.image ? UserPhoto : user.image} alt="Profile" />
        </div>
        <div>
          {!user.name ? <h3>Имя не выбрано</h3> : <h3>{user.name}</h3>}
          {!user.age ? <p>Возраст не выбран</p> : <p>{user.age} years old</p>}
        </div>
      </div>
      <div>
        <Button onClick={() => remove(user)}>Delete</Button>
      </div>
    </div>
  );
}
