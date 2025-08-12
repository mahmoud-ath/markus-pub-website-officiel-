// components/Navbar.jsx
import Link from 'next/link';
import '../styles/css/Navbar.css';
import '../styles/css/aos.css';

export default function Navbar() {
  return (
<nav className="navbar navbar-expand-lg transparent">
      <div className="container-fluid">
        <Link href="/" className="navbar-brand">Markus Pub</Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample05"
          aria-controls="navbarsExample05"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample05">
          <ul className="navbar-nav pl-md-5 ml-auto">
            <li className="nav-item">
              <Link href="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                href="/our_services"
                className="nav-link dropdown-toggle"
                id="dropdown04"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                 Our Services
              </Link>
              <div className="dropdown-menu" aria-labelledby="dropdown04">
                <a className="dropdown-item" href="/our_services">Website Design & Development</a>
                <a className="dropdown-item" href="/our_services">SaaS Product Development</a>
                <a className="dropdown-item" href="/our_services">Creative Design & Branding</a>
              </div>
            </li>
            <li className="nav-item">
              <Link href="/portfolio" className="nav-link">Projects</Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-link">Contact</Link>
            </li>
          </ul>

          {/* <div className="navbar-nav ml-auto">
            <form method="post" className="search-form">
              <span className="icon ion ion-search"></span>
              <input type="text" className="form-control" placeholder="Search..." />
            </form>
          </div> */}
        </div>
      </div>
    </nav>
  );
}
