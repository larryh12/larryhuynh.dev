'use client';

import React from 'react';
import { useEffect } from 'react';
import { themeChange } from 'theme-change';

import {
  HiMenuAlt3,
  HiOutlineColorSwatch,
  HiOutlineHome,
  HiOutlineDesktopComputer,
  HiOutlineCode,
  HiOutlineUserCircle,
  HiOutlineChat,
  HiChevronDown,
} from 'react-icons/hi';

const themes = [
  'rosepine-dawn',
  'rosepine-moon',
  'rosepine-night',
  'catppuccin-latte',
  'catppuccin-frappe',
  'catppuccin-macchiato',
  'catppuccin-mocha',
];

const Navbar = () => {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <div className="navbar fixed top-0 z-50 max-w-screen-lg bg-base-100">
      <div className="flex-1">
        <a href="/" className="btn-ghost btn">
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="72"
            height="auto"
            viewBox="0 0 2465.792 902.144"
          >
            <path d="M 1317.888 571.392 L 1351.68 421.888 Q 1354.752 408.576 1358.848 388.096 Q 1362.944 367.616 1365.504 345.6 Q 1368.064 323.584 1368.064 307.2 A 129.463 129.463 0 0 0 1367.517 294.969 Q 1366.955 289.058 1365.816 283.918 A 71.54 71.54 0 0 0 1364.992 280.576 Q 1361.92 269.312 1355.264 263.68 Q 1349.154 258.51 1339.161 258.086 A 42.856 42.856 0 0 0 1337.344 258.048 Q 1318.912 258.048 1300.48 273.92 Q 1285.378 286.924 1270.62 308.178 A 291.871 291.871 0 0 0 1264.128 317.952 Q 1246.208 346.112 1231.872 382.464 Q 1217.536 418.816 1207.296 459.776 L 1130.496 778.24 L 933.888 778.24 L 1080.32 86.016 Q 1082.368 75.776 1084.416 65.024 Q 1086.166 55.838 1086.421 48.521 A 70.143 70.143 0 0 0 1086.464 46.08 A 58.513 58.513 0 0 0 1085.407 34.653 Q 1083.986 27.516 1080.655 21.85 A 35.861 35.861 0 0 0 1079.808 20.48 Q 1073.65 11.007 1044.267 10.297 A 203.517 203.517 0 0 0 1039.36 10.24 L 1013.76 10.24 L 1014.784 0 L 1304.576 0 L 1250.304 252.928 Q 1249.361 259.529 1245.813 274.38 A 812.283 812.283 0 0 1 1245.184 276.992 Q 1241.088 293.888 1236.48 314.368 Q 1231.872 334.848 1227.264 351.744 Q 1223.021 367.304 1220.948 374.613 A 615.318 615.318 0 0 1 1220.608 375.808 L 1222.656 375.808 Q 1242.27 327.24 1267.421 294.006 A 246.509 246.509 0 0 1 1272.32 287.744 Q 1300.48 252.928 1339.904 235.52 Q 1379.258 218.143 1432.388 218.112 A 323.977 323.977 0 0 1 1432.576 218.112 Q 1481.728 218.112 1509.888 235.008 Q 1538.048 251.904 1549.824 279.552 Q 1561.6 307.2 1561.6 338.944 Q 1561.6 365.568 1555.456 397.824 Q 1549.312 430.08 1543.168 456.704 L 1507.328 621.568 L 1496.064 672.256 Q 1490.944 695.296 1490.944 715.776 Q 1490.944 736.256 1500.672 747.008 Q 1510.4 757.76 1526.784 757.76 Q 1550.336 757.76 1574.912 740.864 Q 1599.488 723.968 1620.992 700.416 L 1627.136 708.608 Q 1610.816 727.988 1585.86 746.352 A 323.909 323.909 0 0 1 1585.664 746.496 A 202.216 202.216 0 0 1 1550.824 766.88 A 256.349 256.349 0 0 1 1526.272 776.704 Q 1491.968 788.48 1446.912 788.48 A 254.807 254.807 0 0 1 1406.164 785.433 Q 1385.003 781.999 1367.915 774.692 A 117.123 117.123 0 0 1 1340.928 758.784 Q 1303.552 729.088 1303.552 676.864 Q 1303.552 657.408 1307.136 630.784 A 629.544 629.544 0 0 1 1311.532 603.088 Q 1314.248 588.032 1317.888 571.392 Z M 586.752 556.032 L 684.032 95.232 Q 687.104 81.92 689.664 68.096 Q 692.224 54.272 692.224 45.056 Q 692.224 30.72 686.08 20.48 Q 680.148 10.593 652.261 10.252 A 165.266 165.266 0 0 0 650.24 10.24 L 622.592 10.24 L 624.64 0 L 909.312 0 L 771.072 629.76 Q 766.976 650.24 763.392 667.136 Q 759.924 683.488 758.853 696.962 A 167.09 167.09 0 0 0 758.784 697.856 Q 758 708.44 757.816 716.923 A 231.008 231.008 0 0 0 757.76 721.92 Q 758.443 733.531 762.315 741.27 A 28.191 28.191 0 0 0 766.976 748.032 Q 774.864 756.413 793.196 756.724 A 84.214 84.214 0 0 0 794.624 756.736 Q 818.176 756.736 841.728 738.304 Q 865.28 719.872 881.664 701.44 L 888.832 710.656 Q 871.424 731.136 849.408 749.056 Q 827.392 766.976 796.16 777.728 Q 764.928 788.48 718.848 788.48 Q 647.168 788.48 608.256 760.832 Q 569.344 733.184 569.344 676.864 Q 569.344 663.552 570.88 648.192 A 334.212 334.212 0 0 1 572.353 635.946 Q 573.137 630.253 574.176 623.842 A 722.328 722.328 0 0 1 576.512 610.304 Q 580.608 587.776 586.752 556.032 Z M 1570.816 902.144 L 1560.576 902.144 L 2008.064 0 L 2018.304 0 L 1570.816 902.144 Z M 2465.792 422.912 L 2026.496 656.384 L 2026.496 632.832 L 2443.264 412.672 L 2026.496 192.512 L 2026.496 168.96 L 2465.792 402.432 L 2465.792 422.912 Z M 439.296 632.832 L 439.296 656.384 L 0 422.912 L 0 402.432 L 439.296 168.96 L 439.296 192.512 L 22.528 412.672 L 439.296 632.832 Z" />
          </svg>
        </a>
      </div>

      <div className="flex-none">
        <ul className="hidden lg:menu lg:menu-horizontal [&>a]:[&>li]:btn-ghost [&>a]:[&>li]:btn">
          <li>
            <a href="#home">
              <HiOutlineHome />
              Home
            </a>
          </li>
          <li>
            <a href="#about">
              <HiOutlineUserCircle />
              About
            </a>
          </li>
          <li>
            <a href="#experience">
              <HiOutlineCode />
              Experience
            </a>
          </li>
          <li>
            <a href="#projects">
              <HiOutlineDesktopComputer />
              Projects
            </a>
          </li>
          <li>
            <a href="#contacts">
              <HiOutlineChat />
              Contacts
            </a>
          </li>
        </ul>

        <div className="dropdown-end dropdown">
          <label tabIndex={0} className="btn-ghost rounded-btn btn gap-3">
            <HiOutlineColorSwatch className="text-3xl lg:text-sm" />
            <span className="hidden gap-3 sm:inline-flex">
              Themes
              <HiChevronDown />
            </span>
          </label>

          <div className="dropdown-content h-80 max-h-[50vh] overflow-y-auto rounded-xl bg-base-200">
            <div className="flex flex-col gap-3 p-3" tabindex="0">
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

        <label
          htmlFor="my-drawer"
          className="btn-ghost btn-square btn text-3xl lg:hidden"
        >
          <HiMenuAlt3 />
        </label>
      </div>
    </div>
  );
};

export default Navbar;
