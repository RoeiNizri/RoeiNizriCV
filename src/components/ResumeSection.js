import React from 'react';

const listStyle = {
  listStyleType: 'disc',
  paddingLeft: '20px',
};

const itemStyle = {
  marginBottom: '10px',
  color: 'black', // Add white color to each list item
};

const ResumeSection = () => (
  <section>
    <h2>E d u c a t i o n</h2>
    <ul style={listStyle}>
      <li style={itemStyle}>Braude College of Engineering (2020 - present)</li>
      <li style={itemStyle}>High School: Ort Kiryat Bialik (2012-2014)</li>
    </ul>

    <h2>L a n g u a g e s</h2>
    <ul style={listStyle}>
      <li style={itemStyle}>Hebrew - Native</li>
      <li style={itemStyle}>English - Fluent</li>
    </ul>

    <h2>E x p e r i e n c e</h2>
    <ul style={listStyle}>
      <li style={itemStyle}>Manager at “Cofix” (2018-2020)</li>
      <li style={itemStyle}>Shift Manager at “Superpharm” (2022-present)</li>
    </ul>
  </section>
);

export default ResumeSection;
