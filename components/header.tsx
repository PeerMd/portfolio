'use client';

import { Download, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { ThemeToggle } from './theme-toggle';

const links = [
  ['Home', '#home'],
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Experience', '#experience'],
  ['Projects', '#projects'],
  ['Contact', '#contact'],
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#home" className="brand" aria-label="Beermohamed K home">
          <span className="brand-mark"><b>B</b><em>K</em></span>
          <span className="brand-copy">
            <strong>Beermohamed K</strong>
            <small>Frontend Engineer</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([label, href], index) => (
            <a key={href} className={index === 0 ? 'active' : ''} href={href}>{label}</a>
          ))}
        </nav>

        <div className="header-actions">
          <ThemeToggle />
          <a className="button button-primary header-resume" href="/resume.pdf" download>
            <Download size={14} /> Download Resume
          </a>
          <button
            className="mobile-menu-button"
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </nav>
      )}
    </header>
  );
}
