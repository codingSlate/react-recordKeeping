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
    if (
      form.recordName === '' ||
      form.writerName === '' ||
      form.description === ''
    ) {
      return;
    }
    onAdd({ id: uniqid(), ...form });
    setForm(formInit);
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <Input
        labelText="Record Name"
        type="text"
        name="recordName"
        onChange={onChangeHandler}
        value={form.recordName}
      />
      <Input
        labelText="Writer Name"
        type="text"
        id="writerName"
        name="writerName"
        onChange={onChangeHandler}
        value={form.writerName}
      />
      <Input
        labelText="Description"
        row="10"
        type="textarea"
        id="description"
        name="description"
        onChange={onChangeHandler}
        value={form.description}
      />

      <button type="submit">Add</button>
    </form>
  );
};
export default Form;
