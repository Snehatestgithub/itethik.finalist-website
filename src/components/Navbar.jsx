import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { motion } from 'framer-motion'
import companyData from '../shared/companyData'
import Logo from './Logo'

const { contactInfo } = companyData

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const [isLightMode, setIsLightMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme')
      if (savedTheme === 'light') {
        document.documentElement.classList.add('light-theme')
        return true
      }
    }
    return false
  })
  const closeAllMenus = () => {
    setIsOpen(false)
  }

  const toggleTheme = () => {
    if (isLightMode) {
      document.documentElement.classList.remove('light-theme')
      localStorage.setItem('theme', 'dark')
      setIsLightMode(false)
    } else {
      document.documentElement.classList.add('light-theme')
      localStorage.setItem('theme', 'light')
      setIsLightMode(true)
    }
  }

  const toggleMenu = () => setIsOpen(!isOpen)

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ]
  const visibleNavItems = location.pathname === '/services/custom-pc-building'
    ? navItems.filter((item) => item.name !== 'Home' && item.name !== 'Services')
    : navItems

  return (
    <>
      {/* Navbar */}
      <nav className="fixed left-2 right-2 md:left-10 md:right-10 top-2 z-50 rounded-xl bg-glass-strong px-4 py-1.5 shadow-lg shadow-black/20 backdrop-blur-xl border-x border-t border-white/5 after:absolute after:bottom-0 after:left-1/2 after:w-[86%] after:-translate-x-1/2 after:border-b after:border-white/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center relative">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 z-50 transition-transform duration-300">
            <Logo imageClassName="h-7 md:h-9" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-3.5 xl:gap-5 z-50">
            {visibleNavItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link 
                  key={item.path}
                  to={item.path} 
                  onClick={closeAllMenus}
                  className={`transition font-medium whitespace-nowrap ${
                    isActive 
                      ? 'text-cyan font-bold drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]' 
                      : 'text-gray-300 hover:text-cyan'
                  } text-xs`}
                >
                  {item.name}
                </Link>
              );
            })}

            <button 
              onClick={toggleTheme}
              className="rounded-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-cyan transition border border-white/10 ignore-light-mode flex items-center justify-center shrink-0 p-1"
              aria-label="Toggle Theme"
            >
              {isLightMode ? <Moon size={14} /> : <Sun size={14} />}
            </button>
            <a 
              href={contactInfo.whatsappUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition flex items-center gap-1.5 shrink-0 px-3 py-1.5 text-xs"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.472-.149-.672.15-.199.297-.768.967-.941 1.166-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.173.199-.297.298-.497.099-.199.05-.373-.025-.522-.075-.149-.672-1.624-.921-2.224-.242-.58-.487-.502-.672-.512l-.573-.01c-.199 0-.522.074-.795.373s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.199 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.874.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"/>
              </svg>
              Let's Talk
            </a>
          </div>

          {/* Mobile / Tablet Menu Button & Theme Toggle */}
          <div className="flex items-center gap-3 lg:hidden z-50">
            <button 
              onClick={toggleTheme}
              className="rounded-full bg-white/5 hover:bg-white/10 text-gray-300 transition border border-white/10 ignore-light-mode flex items-center justify-center p-1"
            >
              {isLightMode ? <Moon size={16} /> : <Sun size={16} />}
            </button>
            <button 
              onClick={toggleMenu}
              className="hover:bg-white/10 rounded-lg transition flex items-center justify-center p-1"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile / Tablet Menu Drawer */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden absolute left-0 right-0 top-full mt-2 bg-[#070f26]/95 backdrop-blur-2xl border border-white/10 px-4 py-6 rounded-2xl shadow-2xl transition-all duration-300"
          >
            <div className="space-y-1.5">
              {visibleNavItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link 
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl transition text-sm font-semibold ${
                      isActive 
                        ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30' 
                        : 'text-gray-200 hover:text-cyan hover:bg-white/5'
                    }`}
                  >
                    <span>{item.name}</span>
                    {item.badge && (
                      <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-md bg-white/10 text-cyan-300 border border-white/10 font-bold">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}

              <div className="pt-2">
                <a 
                  href={contactInfo.whatsappUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition text-sm shadow-md cursor-pointer"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.472-.149-.672.15-.199.297-.768.967-.941 1.166-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.173.199-.297.298-.497.099-.199.05-.373-.025-.522-.075-.149-.672-1.624-.921-2.224-.242-.58-.487-.502-.672-.512l-.573-.01c-.199 0-.522.074-.795.373s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.199 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.874.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"/>
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Spacer to prevent content from hiding under navbar */}
      <div className={
        location.pathname === '/' || location.pathname === '/about'
          ? 'h-[42px] md:h-[50px]'
          : location.pathname === '/services'
            ? 'h-[50px] md:h-[58px]'
            : 'h-[58px]'
      }></div>
    </>
  )
}
