import React from 'react';

export default class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedTab: 0};
    this.tabData = props.tabData;
    this.tabClick = this.tabClick.bind(this);
  }

  tabClick(newTab) {
    this.setState({selectedTab: newTab});
  }

  render() {
    const tabList = this.tabData.map( (tab, i) => {
      return (
        <li key={i}
          className={i === this.state.selectedTab ? "selected" : "" }
          onClick={ () => { this.tabClick(i); } }>
          {this.tabData[i].title}
        </li>
      );
    });

    let content = <span>{this.tabData[this.state.selectedTab].content}</span>;

    return (
      <div>
        <h1>Tabs</h1>
        <ul>
          {tabList}
        </ul>
        <span>
          Content: {content}
        </span>
      </div>
    );
  }
}
