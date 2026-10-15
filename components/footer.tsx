import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '@/lib/data';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-main">
        <a href="#home" className="brand">
          <span className="brand-mark">
            <b>B</b>
            <em>K</em>
          </span>
          <span className="brand-copy">
            <strong>Beermohamed K</strong>
            <small>Frontend Engineer</small>
          </span>
        </a>
        <nav className="footer-nav" aria-label="Footer navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="socials">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <Mail size={18} />
          </a>
        </div>
      </div>
      <div className="container footer-bottom">
        © 2026 Beermohamed K. All rights reserved.
      </div>
    </footer>
  );
}
