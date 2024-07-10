import React from 'react';

const listStyle = {
  listStyleType: 'disc',
  paddingLeft: '20px',
};

const itemStyle = {
  marginBottom: '10px',
  color: 'black',
};

const sectionTitleStyle = {
  ...itemStyle, // Inherit properties from itemStyle
  fontSize: '1.9em', // Increase font size for section titles
  fontWeight: 'bold', // Make section titles bold
  color: 'blue',
};

const jobTitleStyle = {
  fontSize: '1.2em',
  color: '#333',
  marginBottom: '8px',
};

const ResumeSection = () => (
  <section>
    <h2 style={sectionTitleStyle}>E d u c a t i o n</h2>
    <ul style={listStyle}>
      <li style={itemStyle}>Braude College of Engineering (2020 - present)</li>
      <li style={itemStyle}>High School: Ort Kiryat Bialik (2012-2014)</li>
    </ul>

    <h2 style={sectionTitleStyle}>L a n g u a g e s</h2>
    <ul style={listStyle}>
      <li style={itemStyle}>Hebrew - Native</li>
      <li style={itemStyle}>English - Fluent</li>
    </ul>

    <h2 style={sectionTitleStyle}>E x p e r i e n c e</h2>
    <ul style={listStyle}>
      <li style={itemStyle}>
        <span style={jobTitleStyle}>Manager at “Cofix” (2018-2020)</span>
        <ul style={listStyle}>
          <li style={itemStyle}>Responsible for day-to-day operational tasks</li>
          <li style={itemStyle}>Managed staff scheduling and performance</li>
          <li style={itemStyle}>Handled communication with various suppliers</li>
        </ul>
      </li>
      <li style={itemStyle}>
        <span style={jobTitleStyle}>Shift Manager at “Superpharm” (2022-present)</span>
        <ul style={listStyle}>
          <li style={itemStyle}>Supervised daily store operations</li>
          <li style={itemStyle}>Trained and mentored new team members</li>
        </ul>
      </li>
    </ul>
  </section>
);

export default ResumeSection;
