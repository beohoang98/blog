// @ts-ignore
import { ThemeToggler } from "gatsby-plugin-dark-mode";
import "./theme-switch.css";

export const ThemeSwitch = () => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }: any) => (
        <label className="theme-toggler">
          <input
            type="checkbox"
            hidden
            onChange={(e) => toggleTheme(e.target.checked ? "dark" : "light")}
            checked={theme === "dark"}
          />
          <div className="switch-container">
            <div className="switch" />
          </div>
          <span>Dark Mode</span>
        </label>
      )}
    </ThemeToggler>
  );
};
