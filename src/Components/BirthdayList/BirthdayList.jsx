import React, { useState } from "react";
import Button from "../UI/Button/Button";
import Modal from "../UI/Modal/Modal";
import classes from "./BirthdayList.module.css";
import BirthdayUser from "./BirthdayUser/BirthdayUser";
import BirthdayForm from "../BirthdayForm/BirthdayForm";
import BirthdayFilter from "../BirthdayFilter/BirthdayFilter";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useUsers } from "../../Hooks/useUsers";
export default function BirthdayList({
  users,
  active,
  setActive,
  addNewUser,
  remove,
}) {
  //// Фильтры поиска и сортировки
  const [filter, setFilter] = useState({ sort: "", query: "" });
  //// Открываем модальное окно
  const [modal, setModal] = useState(false);
  const addClassActive = [classes.birthdayList];
  const getSortedAndSearchedUsers = useUsers(users, filter.sort, filter.query);
  if (active) {
    addClassActive.push(classes.active);
  }
  ///// Сортируем массив
  return (
    <div className={addClassActive.join(" ")}>
      <p className={classes.closeBtn} onClick={() => setActive(false)}>
        &times;
      </p>
      {getSortedAndSearchedUsers.length === 0 ? (
        <h1>Ничего не найдено</h1>
      ) : (
        <h1 style={{ textAlign: "center" }}>Список имениников</h1>
      )}
      <BirthdayFilter filter={filter} setFilter={setFilter} />
      <TransitionGroup>
        {getSortedAndSearchedUsers.map((user) => {
          return (
            <CSSTransition key={user.id} timeout={500} classNames="event">
              <BirthdayUser user={user} remove={remove} key={user.id} />
            </CSSTransition>
          );
        })}
      </TransitionGroup>
      <Button onClick={() => setModal(true)}>Add New Birthday</Button>
      <Modal active={modal} setActive={setModal}>
        <BirthdayForm addNewUser={addNewUser} setModal={setModal} />
      </Modal>
    </div>
  );
}
