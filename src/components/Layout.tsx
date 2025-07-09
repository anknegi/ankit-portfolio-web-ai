import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ankitLogo from "@/assets/ankit-logo.png";
import { Badge } from "@/components/ui/badge";
import { Globe, Phone, Flag } from "lucide-react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [navOpen, setNavOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background p-4 md:p-8 flex flex-col">
      <div className="max-w-6xl mx-auto w-full space-y-8 flex-1">
        {/* Nav Section */}
        <nav className="border-gray-200 dark:bg-gray-900">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a
              href="https://anknegi.netlify.app/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src={ankitLogo}
                className="bg-white w-40 h-35 md:w-35 md:h-55 rounded-3xl object-cover"
                alt="Ankit Logo"
              />
            </a>
            <button
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded={navOpen}
              onClick={() => setNavOpen((open) => !open)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div
              className={`${navOpen ? "" : "hidden"} w-full md:block md:w-auto`}
              id="navbar-default"
            >
              <ul className="font-medium flex flex-col p-4 md:p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <Link
                    to="/"
                    className={`block py-2 px-3 rounded-sm md:bg-transparent md:p-0 ${
                      location.pathname === "/"
                        ? "text-white bg-blue-700 md:text-blue-700 dark:text-white md:dark:text-blue-500"
                        : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    }`}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pre-interview"
                    className={`block py-2 px-3 rounded-sm md:bg-transparent md:p-0 ${
                      location.pathname === "/pre-interview"
                        ? "text-white bg-blue-700 md:text-blue-700 dark:text-white md:dark:text-blue-500"
                        : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    }`}
                  >
                    Pre interview
                  </Link>
                </li>
                <li>
                  <Link
                    to="/projects"
                    className={`block py-2 px-3 rounded-sm md:bg-transparent md:p-0 ${
                      location.pathname === "/projects"
                        ? "text-white bg-blue-700 md:text-blue-700 dark:text-white md:dark:text-blue-500"
                        : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    }`}
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className={`block py-2 px-3 rounded-sm md:bg-transparent md:p-0 ${
                      location.pathname === "/blog"
                        ? "text-white bg-blue-700 md:text-blue-700 dark:text-white md:dark:text-blue-500"
                        : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    }`}
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/downloads"
                    className={`block py-2 px-3 rounded-sm md:bg-transparent md:p-0 ${
                      location.pathname === "/downloads"
                        ? "text-white bg-blue-700 md:text-blue-700 dark:text-white md:dark:text-blue-500"
                        : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    }`}
                  >
                    Downloads
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Main Content */}
        <main>{children}</main>
      </div>
      {/* Footer */}
      <footer className="max-w-6xl mx-auto w-full mt-8">
        <div className="portfolio-card flex flex-wrap gap-6 justify-center md:justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🎂</span>
            <span className="text-muted-foreground">21 April</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-muted-foreground" />
            <a
              href="https://anknegi.netlify.app/"
              className="text-muted-foreground"
            >
              https://anknegi.netlify.app/
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-muted-foreground" />
            <span className="text-muted-foreground">Login to view</span>
          </div>
          <div className="flex items-center gap-2">
            <Flag className="w-4 h-4 text-orange-500" />
            <span className="text-muted-foreground">New Delhi- India</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;