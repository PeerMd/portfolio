import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { projects } from '@/lib/data';
import { Reveal } from './reveal';

export function Projects() {
  return (
    <section id="projects" className="section section-projects">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">FEATURED PROJECTS</span>
            <h2>Some of My Work</h2>
          </div>
          <span className="section-link">View All Projects →</span>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.04}>
              <article className="project-card">
                <div className="project-preview-image">
                  <Image src={project.image} alt={`${project.title} preview`} fill sizes="(max-width: 760px) 100vw, (max-width: 1050px) 50vw, 25vw" />
                </div>
                <div className="project-body">
                  <h3>{project.title}</h3>
                  <div className="project-stack">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div>
                  <p>{project.description}</p>
                  <a href="#contact" className="project-link">View Project <ArrowRight size={14} /></a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
