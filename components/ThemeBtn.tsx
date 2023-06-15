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
              className="btn-neutral btn-block btn-sm btn h-fit bg-base-100 px-4 normal-case"
              value={theme}
              data-theme={theme}
              onClick={(e) => changeTheme(e.target as HTMLElement)}
            >
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
