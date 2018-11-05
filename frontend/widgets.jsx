import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Tab from './tab';



function Root() {
  return (
    <div>
      Hello!
      <Clock/>
      <Tab tabData={tabProps()}/>
    </div>
  );
}

function tabProps() {
  const tab1 = {title: "tab1", content:"this is tab1"};
  const tab2 = {title: "tab2", content:"this is tab2"};
  const tab3 = {title: "tab3", content:"this is tab3"};
  return [tab1, tab2, tab3];
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root/>, document.getElementById('root'));
});
