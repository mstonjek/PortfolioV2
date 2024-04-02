import { useState, useEffect } from "react";

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isAutoMode, setIsAutoMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
    setIsAutoMode(false); 
  };

  const toggleAutoMode = () => {
    setIsAutoMode((prev) => !prev);
    updateDarkMode();
  };

  const changeMode = (mode) => {
    if (mode === "dark") {
      setIsDarkMode(true);
      setIsAutoMode(false);
    } else if (mode === "light") {
      setIsDarkMode(false);
      setIsAutoMode(false);
    } else if (mode === "auto") {
      setIsDarkMode(false);
      setIsAutoMode(true);
      updateDarkMode();
    }
  };

  const updateDarkMode = () => {
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)")
      .matches;
    setIsDarkMode(prefersDarkMode);
  };

  useEffect(() => {
    updateDarkMode();


    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleDarkModeChange = (e) => setIsDarkMode(e.matches);
    mediaQuery.addEventListener("change", handleDarkModeChange);


    return () => {
      mediaQuery.removeEventListener("change", handleDarkModeChange);
    };
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark-mode");
    } else {
      root.classList.remove("dark-mode");
    }
  }, [isDarkMode]);



  return {
    isDarkMode,
    isAutoMode,
    toggleDarkMode,
    toggleAutoMode,
    changeMode,
  };
};

export default useDarkMode;
