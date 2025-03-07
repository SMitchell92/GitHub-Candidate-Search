import React from 'react';
import { Link, useLocation } from 'react-router-dom';


const Nav: React.FC = () => {
  const currentPage = useLocation().pathname;
  return (
      <nav className="nav">
          <div className="nav-item">
              <h1>Candidate Search</h1>
          </div>  
          <div className="nav-item">
              <ul className="nav-item">
              <Link
                  to="/"

                  className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
              >
                  Home
              </Link>
              </ul>
          <ul className="nav-item">
              <Link
                  to="/SavedCandidates"
              >
                  Potential Candidates
              </Link>
          </ul>
      </div>
      </nav>
  );
};

export default Nav;
