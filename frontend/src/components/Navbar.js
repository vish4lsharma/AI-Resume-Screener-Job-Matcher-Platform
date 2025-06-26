import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-white font-bold">Resume Matcher</Link>
        <div>
          <Link to="/login" className="text-white mr-4">Login</Link>
          <Link to="/register" className="text-white mr-4">Register</Link>
          <Link to="/upload" className="text-white">Upload Resume</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;