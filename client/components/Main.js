import React from 'react';
import { Link } from 'react-router';
import Single from './Single';

const Main = React.createClass({
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Reduxstagram</Link>
        </h1>
        <h2>
          <Single />
        </h2>
      </div>

    )
  }
})

export default Main;
