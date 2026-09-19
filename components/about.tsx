import { BriefcaseBusiness, CalendarDays, Code2, Linkedin, Mail, MapPin, Users, Zap } from 'lucide-react';
import { profile } from '@/lib/data';
import { Reveal } from './reveal';

export function About() {
  return (
    <section id="about" className="section section-about">
      <div className="container about-grid">
        <Reveal>
          <div className="about-copy">
            <span className="eyebrow">ABOUT ME</span>
            <h2>Turning ideas into<br />real-world products</h2>
            <p>
              Senior Frontend Engineer with 6+ years of experience building production-grade web applications using React.js, Next.js, and TypeScript. Experienced in E-commerce platforms, admin dashboards, and enterprise applications.
            </p>
            <p>
              Strong in REST API integration, performance optimization, and modern frontend architecture. Currently available as an Immediate Joiner.
            </p>
            <div className="stats-row">
              <div className="stat"><BriefcaseBusiness /><strong>6+</strong><span>Years Experience</span></div>
              <div className="stat"><Code2 /><strong>20+</strong><span>Projects Delivered</span></div>
              <div className="stat"><Users /><strong>5</strong><span>Team Size (Led)</span></div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="contact-card">
            <div className="contact-list">
              <div><MapPin /><span>{profile.location}</span></div>
              <a href={`mailto:${profile.email}`}><Mail /><span>{profile.email}</span></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin /><span>linkedin.com/in/beer-mohamed-7080b72b6</span></a>
              <div><Zap /><span>{profile.availability}</span></div>
              <div><CalendarDays /><span>Notice Period: 0 Days</span></div>
              <div><Users /><span>{profile.availabilityNote}</span></div>
            </div>
            <div className="quote-panel">
              <span className="quote-mark">“</span>
              <p>{profile.headline}</p>
              <span className="quote-line" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
