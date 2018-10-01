import './error.less';

import React from 'react';
import { Link } from 'react-router';

class Error extends React.Component {
  render() {
    return (
      <div className="error-component">
        <div className="container">
          <h2>Error 404. Oops you've have encountered an error</h2>
          <p>
            I can&rsquo;t find the page you are looking for, I am sorry, but these things happen.<br/>
            Fortunately, my website has lot of other pages that are really awesome, you should check them out:
          </p>
          <p>
            <Link to="/">Home</Link>&nbsp;&nbsp;&bull;&nbsp;&nbsp;
            <Link to="/aboutme">About</Link>&nbsp;&nbsp;&bull;&nbsp;&nbsp;
            {/*<Link to="/work/projects">Work</Link>&nbsp;&nbsp;&bull;&nbsp;&nbsp; */}
            <Link to="/hobby/photography">Hobbies</Link>
          </p>
          <p>
            I thank you for visiting my website, Have a great day.
          </p>
        </div>
      </div>
    );
  }
}

export default Error;
