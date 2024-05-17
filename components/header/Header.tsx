"use client";
import HeaderLinks from "@/components/header/HeaderLinks";
import HeaderMenu from "@/components/header/HeaderMenu";
import LogoLink from "@/components/header/LogoLink";
import SearchBar from "@/components/header/SearchBar";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import { CgClose } from "react-icons/cg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex z-40 w-full h-auto py-2 px-2 items-center justify-center data-[menu-open=true]:border-none sticky top-0 inset-x-0 backdrop-blur-lg data-[menu-open=true]:backdrop-blur-xl backdrop-saturate-150 bg-background/70">
      <nav className="z-40 flex px-0 md:px-6 gap-4 w-full flex-row relative flex-nowrap items-center justify-between h-[var(--navbar-height)] max-w-[1024px]">
        <div className="flex items-center md:gap-x-12">
          <LogoLink />
        </div>

        <div className="hidden md:flex items-center gap-4 ml-4 h-12 w-full max-w-fit rounded-full bg-content2 px-4 dark:bg-content1">
          <HeaderMenu />
        </div>

        <div className="hidden md:flex items-center h-12 w-full max-w-fit rounded-full px-2 bg-content1">
          <SearchBar />
          <HeaderLinks />
        </div>

        <div className="md:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <MenuIcon />
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-50 border-1 border-gray-600">
              <div className="flex flex-col gap-4 p-5 bg-background border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <LogoLink />
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="tracking-wide transition-colors duration-200 font-norma"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <CgClose />
                    </button>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-4 w-full max-w-fit">
                  <HeaderMenu />
                </div>
                <SearchBar />
                <div className="flex items-center gap-x-5 justify-between">
                  <HeaderLinks />
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
