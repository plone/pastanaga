import React, { Component } from 'react';

const API_URL = 'http://localhost:8080/Plone';
const API_HEADERS = {
  'Accept': 'application/json',
  'Authorization': 'Basic Zm9vYmFyOmZvb2Jhcgo='
};


class Content extends Component {

  constructor(){
    super();
    console.log('constructor');
    this.state={
      page: {}
    };
  }

  componentDidMount(){
    fetch(API_URL + '/front-page', {headers: API_HEADERS})
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({page: responseData});
    })
    .catch((error) => {
      console.log('Error fetching and parsing data', error);
    });
  }

  render() {
    return (
      <div>
      <h2>{this.state.page.title}</h2>
        {
          this.state.page.description &&
          <h3>{this.state.page.description}</h3>
        }
        {
          this.state.page.text &&
          <p dangerouslySetInnerHTML={{ __html: this.state.page.text.data }} />
        }
      </div>
    );
  }
}

export default Content;
