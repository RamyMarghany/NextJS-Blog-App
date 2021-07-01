import Link from "next/link";

import Logo from "../layout/logo";

import classes from "./navigation.module.css";

const Navigation = () => {
  return (
    <header className={classes.header}>
      <Link href='/'>
        {/* Wrapping the logo in anchor tag because the behavior of the Link from NextJS is working by default if it wraps only a blank text, but if it needs to wrap HTML element or any component it should use the anchor tag first*/}
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href='/posts'>Posts</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
