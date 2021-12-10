import React from 'react';
import Header from './Header';
import Section from './Section';
import Footer from './Footer';

const Container = () => {
  return (
    <div>
      <Header />
      <main>
        <Section headingText="Add Record Details"></Section>
        <Section headingText="All Records"></Section>
      </main>
      <Footer />
    </div>
  );
};
export default Container;
