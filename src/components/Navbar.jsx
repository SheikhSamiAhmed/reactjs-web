import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '1em', background: '#f0f0f0' }}>
      <Link to="/" style={{ marginRight: '1em' }}>Home</Link>
      <Link to="/contact" style={{ marginRight: '1em' }}>Contact</Link>
      <Link to="/careers">Careers</Link>
    </nav>
  );
}

export default Navbar;
