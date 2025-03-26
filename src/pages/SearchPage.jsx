import { Link } from "react-router-dom";
import SearchForm from "../components/SearchForm";

export default function SearchPage() {
  return (
    <>
      {/* Navigation Bar */}
      <nav className="navbar navbar-light bg-white p-3 shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold">jobstealers</a>
          <div className="d-flex flex-wrap gap-2">
            <Link to="/login" className="btn btn-outline-dark">Log In</Link>
            <Link to="/login" className="btn btn-dark">Sign Up</Link>
            <Link to="/" className="btn btn-primary">Home</Link>
          </div>
        </div>
      </nav>

      {/* Search Form */}
      <div className="container mt-4">
        <SearchForm />
      </div>
    </>
  );
}
