import React, { Component } from 'react';
import { Link } from 'react-router-dom'

const API_URL = 'http://localhost:8080/Plone';
const API_HEADERS = {
  'Accept': 'application/json',
  'Authorization': 'Basic Zm9vYmFyOmZvb2Jhcgo='
};


class Navigation extends Component {

  constructor(path) {
    super();
    this.state={
      navigationItems: Object()
    };
  }

  componentDidMount(){
    fetch(API_URL + '/@components/navigation', {headers: API_HEADERS})
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({navigationItems: responseData[0]});
    })
    .catch((error) => {
      console.log('Error fetching and parsing data', error);
    });
  }

  render() {
    return (
      <ul>
        {
          this.state.navigationItems.items &&
          this.state.navigationItems.items.map(
            (item, key) => (
              <li key={key}>
                <Link to={`/${item['url'].replace(/^.*\//, '').replace('Plone', '')}`}>{item.title}</Link>
              </li>
            )
          )
        }
      </ul>
    );
  }
}

export default Navigation;
