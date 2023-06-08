'use client';

import React from 'react';
import { useEffect } from 'react';
import { HiChevronDown, HiOutlineColorSwatch } from 'react-icons/hi';
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
    <div className="dropdown-end dropdown">
      <label tabIndex={0} className="btn-ghost btn gap-2">
        <HiOutlineColorSwatch className="text-3xl lg:text-xl" />
        <span className="hidden gap-2 sm:inline-flex">
          Themes
          <HiChevronDown />
        </span>
      </label>

      <div className="dropdown-content h-80 max-h-[50vh] overflow-y-auto rounded-xl bg-base-200">
        <div className="flex flex-col gap-3 p-3" tabIndex={0}>
          {themes.map((theme, index) => (
            <button
              key={index}
              className="flex items-center justify-between gap-6 rounded-lg bg-base-100 p-3 text-sm font-bold text-base-content"
              data-theme={theme}
              data-set-theme={theme}
              data-act-class="[&_svg]:visible"
            >
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="invisible h-3 w-3"
                >
                  <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                </svg>
                <span>{theme}</span>
              </div>
              <div className="flex gap-1 [&>div]:rounded-lg [&>div]:px-1 [&>div]:py-2">
                <div className="bg-primary" />
                <div className="bg-secondary" />
                <div className="bg-accent" />
                <div className="bg-neutral" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThemeBtn;
