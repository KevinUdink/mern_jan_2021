import React from 'react';
import { Link } from '@reach/router';

const Header = () => {
  return (
    <div>
      <h2>Pokemon</h2>
      <Link className="btn btn-primary m-5" to="/">Pokemon</Link>
      <Link className="btn btn-success m-5" to="/ability">Abilities</Link>
      <Link className="btn btn-success m-5" to="/contests">Contests</Link>
      <Link className="btn btn-danger m-5" to="/evolution">Evolutions</Link>
    </div>
  )
}

export default Header;
