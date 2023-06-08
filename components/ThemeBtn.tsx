'use client';

import React from 'react';
import { useEffect } from 'react';
import { HiOutlineColorSwatch } from 'react-icons/hi';
import { themeChange } from 'theme-change';

const themes = [
  'rosepine-dawn',
  'rosepine-moon',
  'rosepine-night',
  'catppuccin-latte',
  'catppuccin-frappe',
  'catppuccin-macchiato',
  'catppuccin-mocha',
];

const ThemeBtn = () => {
  useEffect(() => {
    themeChange(false);
  }, []);
  return (
    <details className="dropdown-end dropdown">
      <summary>
        <HiOutlineColorSwatch className="text-2xl" />
        <span className="hidden sm:inline">Themes</span>
      </summary>
      <ul className="dropdown-content menu rounded-box gap-2 p-2 drop-shadow-2xl">
        {themes.map((theme, index) => (
          <button
            key={index}
            className="flex items-center rounded-lg bg-base-100 p-3 text-sm text-base-content transition hover:bg-base-200"
            data-theme={theme}
            data-set-theme={theme}
            data-act-class="[&_svg]:visible"
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
            <span className="ml-2 mr-4 flex-1 text-start">{theme}</span>
            <div className="flex gap-1 [&>div]:rounded-full [&>div]:px-0.5 [&>div]:py-2">
              <div className="bg-primary" />
              <div className="bg-secondary" />
              <div className="bg-accent" />
              <div className="bg-neutral" />
            </div>
          </button>
        ))}
      </ul>
    </details>
  );
};

export default ThemeBtn;