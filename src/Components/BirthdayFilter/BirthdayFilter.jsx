import React from "react";
import Select from '../UI/Select/Select';
import Input from '../UI/Input/Input';
function BirthdayFilter({filter, setFilter}) {
  return (
    <div>
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
        value={filter.sort}
        onChange={event => setFilter({...filter, sort: event})}
      />
      <Input
        placeholder="Search..."
        value={filter.query}
        onChange={(event) => setFilter({...filter, query: event.target.value})}
      />
    </div>
  );
}

export default BirthdayFilter;
