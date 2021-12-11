import React from 'react';
const List = ({ records }) => {
  return (
    <ul>
      {records.map(({ id, recordName, writerName, description }) => (
        <li key={id}>
          <h4>{recordName}</h4>
          <div>{writerName}</div>
          <div>{description}</div>
        </li>
      ))}
    </ul>
  );
};
export default List;
