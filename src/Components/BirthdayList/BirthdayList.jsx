import React, { useState, useMemo } from "react";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import Modal from "../UI/Modal/Modal";
import classes from "./BirthdayList.module.css";
import BirthdayUser from "./BirthdayUser/BirthdayUser";
import Select from "../UI/Select/Select";
import BirthdayForm from "../BirthdayForm/BirthdayForm";
export default function BirthdayList({
  users,
  active,
  setActive,
  addNewUser,
  remove,
}) {
  ///// Тип сортировки
  const [sortType, setSortType] = useState("");
  ////// Поиск
  const [searchQuery, setSearchQuery] = useState("");
  /////// Открываем модальное окно с формой для ввода
  const [modal, setModal] = useState(false);
  const addClassActive = [classes.birthdayList];
  if (active) {
    addClassActive.push(classes.active);
  }
  ///// Сортируем массив
  const sortedUsers = useMemo(() => {
    if (sortType) {
      return [...users].sort((a, b) => a[sortType].localeCompare(b[sortType]));
    }
    return users;
  }, [sortType, users]);
  const getSortedAndSearchedUsers = useMemo(() => {
    return sortedUsers.filter((user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, sortedUsers]);
  const sortUsers = (type) => {
    setSortType(type);
  };
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
      <Select
        defaultValue="Sort by"
        options={[
          {
            value: "name",
            body: "Sort by name",
          },
          {
            value: "age",
            body: "Sort by age",
          },
        ]}
        value={sortType}
        onChange={sortUsers}
      />
      <Input
        placeholder="Search..."
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
      />
      {getSortedAndSearchedUsers.map((user) => {
        return <BirthdayUser user={user} remove={remove} key={user.id} />;
      })}
      <Button onClick={() => setModal(true)}>Add New Birthday</Button>
      <Modal active={modal} setActive={setModal}>
        <BirthdayForm addNewUser={addNewUser} setModal={setModal} />
      </Modal>
    </div>
  );
}
