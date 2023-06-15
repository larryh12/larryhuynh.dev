'use client';

import { useTheme } from 'next-themes';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { HiOutlineColorSwatch } from 'react-icons/hi';

const themes = [
  'dawn',
  'moon',
  'night',
  'latte',
  'frappe',
  'macchiato',
  'mocha',
  'light',
  'dark',
];

const ThemeBtn = () => {
  const changeTheme = (eTarget: HTMLElement) => {
    let button = eTarget as HTMLButtonElement;
    while (button.nodeName !== 'BUTTON') {
      button = button.parentElement as HTMLButtonElement;
    }
    Array.from(button.parentElement!.children).forEach((sibling) =>
      sibling.classList.remove('[&_svg]:visible')
    );
    button.classList.add('[&_svg]:visible');
    setTheme(button.value);
  };

  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <li>
        <a href="#" aria-label="Themes">
          <HiOutlineColorSwatch className="text-2xl" />
          <span className="hidden sm:inline">Themes</span>
        </a>
      </li>
    );
  }

  return (
    <li>
      <details className="dropdown-end dropdown">
        <summary>
          <HiOutlineColorSwatch className="text-2xl" />
          <span className="hidden sm:inline">Themes</span>
        </summary>
        <div className="dropdown-content rounded-box w-48 space-y-2 bg-neutral/90 p-3 drop-shadow-lg">
          {themes.map((theme) => (
            <button
              key={theme}
              className="btn-neutral btn-block btn-sm btn h-fit bg-base-100 normal-case"
              value={theme}
              data-theme={theme}
              onClick={(e) => changeTheme(e.target as HTMLElement)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="invisible mt-0.5 h-3 w-3"
              >
                <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
              </svg>
              <span className="flex-1 text-start">{theme}</span>
              <div className="flex gap-1 [&>div]:rounded-full [&>div]:px-0.5 [&>div]:py-2">
                <div className="bg-primary" />
                <div className="bg-secondary" />
                <div className="bg-accent" />
              </div>
            </button>
          ))}
        </div>
      </details>
    </li>
  );
};

export default ThemeBtn;
