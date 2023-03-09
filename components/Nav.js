/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <Link className="nav-link" href="/">
          Accueil
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="blog">
          Blog
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link " href="liste">
          Liste
        </Link>
      </li>
    </ul>
  );
};

export default Nav;
