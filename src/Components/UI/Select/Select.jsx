import React from "react";
import classes from "./Select.module.css";
export default function Select({ defaultValue, options, value, onChange }) {
  return (
    <div className={classes.select}>
      <select value={value} onChange={event => onChange(event.target.value)}>
        <option value="" disabled>
          {defaultValue}
        </option>
        {options.map((option) => {
          return <option key={option.value} value={option.value}>{option.body}</option>;
        })}
      </select>
    </div>
  );
}
