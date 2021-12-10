import React from 'react';
const Form = () => {
  return (
    <form>
      <label htmlFor="recordName">Record Name</label>
      <input type="text" id="recordName" name="recordName" />
      <label htmlFor="writerName">Writer Name</label>
      <input type="text" id="writerName" name="writerName" />
      <label htmlFor="description">Description</label>
      <textarea row="10" id="description" name="description"></textarea>
      <button type="submit">Add</button>
    </form>
  );
};
export default Form;
