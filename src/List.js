import React from 'react';
const List = () => {
  const records = [
    {
      recordName: 'Math Book',
      writerName: 'Rohin',
      description: 'Best Math books for kids',
    },
    {
      recordName: 'Biology Book',
      writerName: 'Moria',
      description: 'Introductory to Biology',
    },
  ];
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
