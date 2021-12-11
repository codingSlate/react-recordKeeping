import React, { useState } from 'react';
import Header from './Header';
import Section from './Section';
import List from './List';
import Form from './Form';
import Footer from './Footer';

// const recordsData = [
//   {
//     id:1,
//     recordName: 'Math Book',
//     writerName: 'Rohin',
//     description: 'Best Math books for kids',
//   },
//   {
//     id:2,
//     recordName: 'Biology Book',
//     writerName: 'Moria',
//     description: 'Introductory to Biology',
//   },
// ];

const Container = () => {
  const [records, setRecord] = useState([]);

  const onAddHandler = (data) => {
    setRecord([...records, data]);
  };
  return (
    <div>
      <Header />
      <main>
        <Section headingText="Add Record Details">
          <Form onAdd={onAddHandler} />
        </Section>
        <Section headingText="All Records">
          <List records={records} />
        </Section>
      </main>
      <Footer />
    </div>
  );
};
export default Container;
