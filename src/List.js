import React from 'react';
const List = ({ records }) => {
  return (
    <ul>
      {records.map(({ recordName, writerName, description }) => (
        <li>
          <h4>{recordName}</h4>
          <div>{writerName}</div>
          <div>{description}</div>
        </li>
      ))}
    </ul>
  );
};
export default List;
