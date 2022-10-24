import React, {useEffect, useState} from 'react'
import { useTheme } from "next-themes";
import { Sun } from "../";
import { Moon } from "../";

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme("light");
  const [checked, setChecked] = useState((theme == "light" ? false : true))
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect (() => {
    setIsLoaded(true)
  }),[]

  const toggleTheme = (e) => {
    console.log(e.target.checked);
    if (checked) {
        setTheme("light")
        setChecked(false)
    } else{
        setTheme("dark");
        setChecked(true);
    }

  }

  if (!isLoaded) {return(null)}


  return (
    <div className="theme-container">
      <input
        className="checkbox"
        type="checkbox"
        id="theme"
        name="theme"
        checked={checked}
        onChange={toggleTheme}
      />
      <label htmlFor="theme">
        {theme == "dark" ? (
          <Sun color={"var(--foreground)"} />
        ) : (
          <Moon color={"var(--foreground)"} />
        )}
      </label>
      <style jsx>{`
        .theme-container {
          height: 32px;
          cursor: pointer;
        }
        .checkbox {
          appearance: none;
          margin: 0;
        }
        label {
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default ThemeChanger