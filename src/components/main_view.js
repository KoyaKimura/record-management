import React from 'react';
import { Link } from 'react-router-dom';

function mainView() {
  return (
    <div className="App">
      <ul>
        <li><Link to={'/2020'}>2020</Link></li>
        <li><Link to={'/2019'}>2019</Link></li>
        <li><Link to={'/2018'}>2018</Link></li>
        <li><Link to={'/2017'}>2017</Link></li>

      </ul>

    </div>
  );
}

export default mainView;
