import { Link } from "react-router";

import css from "./NavHeader.module.css";

export default function NavHeader() {
  return (
    <>
      <div className="section">
        <div className="container">
          <nav className={css.navigation}>
            <ul className={css.list}>
              <li className={css.item}>
                <Link className={css.link} to="/">
                  Home
                </Link>
              </li>
              <li className={css.item}>
                <ul className={css.authList}>
                  <li className={css.authItem}>
                    <Link className={css.link} to="register">
                      Register
                    </Link>
                  </li>
                  <li className={css.authItem}>
                    <Link className={css.link} to="/login">
                      Login
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
