import React from 'react';
import Header from './Header';
import Section from './Section';
import List from './List';
import Form from './Form';
import Footer from './Footer';

const Container = () => {
  return (
    <div>
      <Header />
      <main>
        <Section headingText="Add Record Details">
          <Form />
        </Section>
        <Section headingText="All Records">
          <List />
        </Section>
      </main>
      <Footer />
    </div>
  );
};
export default Container;
