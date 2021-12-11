import React, { useState } from 'react';
import uniqid from 'uniqid';
const Form = ({ onAdd }) => {
  const [form, setForm] = useState('');
  const onChangeHandler = (e) => {
    setForm(() => ({ ...form, [e.target.name]: e.target.value }));
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    onAdd({ id: uniqid(), ...form });
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <label htmlFor="recordName">Record Name</label>
      <input
        type="text"
        id="recordName"
        name="recordName"
        onChange={onChangeHandler}
      />
      <label htmlFor="writerName">Writer Name</label>
      <input
        type="text"
        id="writerName"
        name="writerName"
        onChange={onChangeHandler}
      />
      <label htmlFor="description">Description</label>
      <textarea
        row="10"
        id="description"
        name="description"
        onChange={onChangeHandler}
      ></textarea>
      <button type="submit">Add</button>
    </form>
  );
};
export default Form;
