'use client';

import { ArrowRight, Mail, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { profile } from '@/lib/data';

export function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-bg" aria-hidden="true" />
      <div className="container hero-grid">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow eyebrow-light">HELLO, I&apos;M</span>
          <h1>Beermohamed <span>K</span></h1>
          <p className="hero-role">{profile.role}</p>
          <p className="hero-tech">
            React.js <i /> Next.js <i /> TypeScript <i /> Build Scalable Web Applications
          </p>
          <p className="hero-description">{profile.heroDescription}</p>
          <div className="hero-buttons">
            <a className="button button-primary" href="#contact">
              <Mail size={16} /> Let&apos;s Connect <ArrowRight size={16} />
            </a>
            <a className="button button-outline-light" href="#projects">
              <Play size={14} fill="currentColor" /> View My Work
            </a>
          </div>
        </motion.div>

        <div className="hero-slogan" aria-hidden="true">
          Turning<br />Ideas Into<br />Digital<br />Experiences<span />
        </div>
      </div>

      <div className="hero-wave" aria-hidden="true" />
    </section>
  );
}
