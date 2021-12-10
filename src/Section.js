import React from 'react';
const Section = ({ children, headingText, headinglevel = 2 }) => {
  const H = `h${headinglevel}`;
  return (
    <section>
      <H>{headingText}</H>
      {children}
    </section>
  );
};
export default Section;
