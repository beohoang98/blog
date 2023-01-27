import { Link } from "gatsby";
import { FC, ReactNode } from "react";
// @ts-ignore
import { ThemeToggler } from "gatsby-plugin-dark-mode";
import { ThemeSwitch } from "./theme-switch";

interface LayoutProps {
  location: Location;
  title: string;
  children?: ReactNode;
}

const Layout: FC<LayoutProps> = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;

  return (
    <div className="global-wrapper line-numbers" data-is-root-path={isRootPath}>
      <nav className="global-nav" role="navigation">
        <Link className="header-link-home" to="/">
          {title}
        </Link>
        <ThemeSwitch />
      </nav>
      <main className="global-main">{children}</main>
      <footer className="global-footer">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  );
};

export default Layout;
