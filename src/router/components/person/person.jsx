import React, { Component, Fragment } from 'react';
import './person.css';

class Person extends Component {
  state = {
    post: {},
  }

  componentDidMount() {
    const id = this.props.match.params.id || '';

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          post: data
        })
      })
  }

  render() {
    const { post } = this.state;
    const { name, username } = post;

    return (
      <Fragment>
        <h1>Person</h1>
        <div>
          <h2>{name}</h2>
          <p>{username}</p>
        </div>
      </Fragment>
    );
  }
};

export default Person;
