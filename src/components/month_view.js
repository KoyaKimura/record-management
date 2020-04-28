import React from 'react';
import { Link } from 'react-router-dom';


const monthView = () => {
  return (
    <div>
      <ul>
        <li><Link to="/4">4月</Link></li>
        <li><Link to="/5">5月</Link></li>
        <li><Link to="/6">6月</Link></li>
        <li><Link to="/7">7月</Link></li>
        <li><Link to="/8">8月</Link></li>
        <li><Link to="/9">9月</Link></li>
        <li><Link to="/10">10月</Link></li>
        <li><Link to="/11">11月</Link></li>
        <li><Link to="/12">12月</Link></li>
        <li><Link to="/1">1月</Link></li>
        <li><Link to="/2">2月</Link></li>
        <li><Link to="/3">3月</Link></li>
      </ul>
    </div>
  )
}

export default monthView;