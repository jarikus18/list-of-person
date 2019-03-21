import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './users.css';

class Users extends Component {
  state = {
    data: [],
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then(res => res.json())
      .then(data => {
        this.setState({
          data
        })
      })
  }

  render() {
    const { data } = this.state;

    return (
      <div>
        <h1>Person:</h1>
        <ul className="posts">
          {data.map(({ id, name }) =>
            <li key={id}><Link to={`/person/${id}`}>{name}</Link></li>
          )}
        </ul>
      </div>
    );
  }
};

export default Users;
