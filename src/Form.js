import React, { useState } from 'react';
import uniqid from 'uniqid';
import Input from './Input';

const Form = ({ onAdd }) => {
  const formInit = { recordName: '', writerName: '', description: '' };
  const [form, setForm] = useState(formInit);
  const onChangeHandler = (e) => {
    setForm(() => ({ ...form, [e.target.name]: e.target.value }));
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    onAdd({ id: uniqid(), ...form });
    setForm(formInit);
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <label htmlFor="recordName">Record Name</label>
      {/* <input
        type="text"
        id="recordName"
        name="recordName"
        onChange={onChangeHandler}
        value={form.recordName}
      /> */}
      <Input
        type="text"
        name="recordName"
        onChange={onChangeHandler}
        value={form.recordName}
      />
      <label htmlFor="writerName">Writer Name</label>
      <input
        type="text"
        id="writerName"
        name="writerName"
        onChange={onChangeHandler}
        value={form.writerName}
      />
      <label htmlFor="description">Description</label>
      <textarea
        row="10"
        id="description"
        name="description"
        onChange={onChangeHandler}
        value={form.description}
      ></textarea>
      <button type="submit">Add</button>
    </form>
  );
};
export default Form;
