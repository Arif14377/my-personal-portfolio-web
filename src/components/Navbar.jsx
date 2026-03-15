import React, { useEffect, useState } from "react";
import { FaTimes, FaBars, FaHome, FaUser, FaBriefcase, FaEnvelope, FaCog } from "react-icons/fa";
import Button from "./Button";

const navItems = [
  { label: "Home", href: "/", icon: FaHome },
  { label: "About", href: "#about-me", icon: FaUser },
  { label: "Projects", href: "#projects", icon: FaBriefcase },
  { label: "Experience", href: "#about-me", icon: FaBriefcase },
  { label: "Contact", href: "#contact", icon: FaEnvelope },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  return (
    <>
{/* Header Utama */}
      <header className="fixed w-full top-0 z-40 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-12">
          
          {/* Logo/Profil - Flex-1 (kiri) */}
          <div className="flex-1 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-sm font-semibold text-blue-300">
              AR
            </div>
            <div className="leading-tight hidden sm:block">
              <p className="text-sm font-semibold text-white">Arif Rahman</p>
              <p className="text-xs text-slate-400">Fullstack Developer</p>
            </div>
          </div>

          {/* Desktop Nav - Flex-1 & Justify Center (tengah) */}
          <div className="hidden md:flex flex-1 justify-center items-center gap-8 text-sm text-slate-300">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="transition-colors hover:text-blue-300">
                {item.label}
              </a>
            ))}
          </div>

          {/* Button - Flex-1 & Justify End (kanan) */}
          <div className="hidden md:flex flex-1 justify-end">
            <Button />
          </div>

          {/* Mobile Toggle */}
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="md:hidden p-2 text-slate-200"
          >
            <FaBars size={24} />
          </button>
        </nav>
      </header>

      {/* Mobile Sidebar (Dipindahkan keluar dari header agar z-index aman) */}
      <div className={`fixed inset-0 z-100 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
        
        {/* Panel Sidebar */}
        <div className={`absolute right-0 top-0 h-full w-70 bg-slate-950 shadow-2xl p-6 transition-transform duration-500 ease-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
          
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-slate-400 hover:text-white"
          >
            <FaTimes size={24} />
          </button>

          {/* Profil Sidebar */}
          <div className="mt-4 mb-10 flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-blue-300 font-bold">AR</div>
            <div>
              <p className="text-white font-bold">Arif Rahman</p>
              <p className="text-xs text-slate-400">arif.rahman@email.com</p>
            </div>
          </div>

          {/* Menu Sidebar */}
          <div className="flex flex-col gap-6 text-slate-300">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="flex items-center gap-4 hover:text-blue-300 transition-colors" onClick={() => setIsOpen(false)}>
                <item.icon />
                {item.label}
              </a>
            ))}
            <div className="pt-6 border-t border-slate-800">
              <Button />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}