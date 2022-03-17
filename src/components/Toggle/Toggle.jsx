import { useState, useEffect } from 'react';
import { DarkIcon, LightIcon } from '../../assets';

const Toggle = () => {
  const [enabled, setEnabled] = useState(false);

  const lightMode = () => {
    document.documentElement.classList.remove('dark');
    setEnabled(true);
    localStorage.theme = 'light';
  };
  const darkMode = () => {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
    setEnabled(false);
  };

  const darkModeToggle = () => (enabled ? darkMode() : lightMode());

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      darkMode();
    } else {
      lightMode();
    }
  }, []);

  return (
    <button
      type="button"
      onClick={darkModeToggle}
      className="flex items-center justify-center group w-12 h-12 rounded-xl sm:w-full sm:rounded-none sm:h-16 mt-auto bg-gray-200 hover:opacity-70 dark:bg-gray-800 hover:text-darkPrimary sm:dark:hover:bg-darkPrimary dark:hover:text-primary sm:hover:bg-primary sm:hover:opacity-100"
    >
      <span className="sr-only">Use setting</span>
      {enabled ? (
        <DarkIcon className="h-5 w-5 sm:w-6 sm:h-6" />
      ) : (
        <LightIcon className="h-5 w-5 sm:w-6 sm:h-6" />
      )}
      <span className="sidebar-tooltip left-20 group-hover:scale-100">
        {enabled ? 'Dark Mode' : 'Light Mode'}
      </span>
    </button>
  );
};

export default Toggle;
