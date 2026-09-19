import Image from 'next/image';
import { experiences } from '@/lib/data';
import { Reveal } from './reveal';

export function Experience() {
  return (
    <section id="experience" className="section section-experience">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">EXPERIENCE</span>
            <h2>My Professional Journey</h2>
          </div>
          <a className="section-link" href="/resume.pdf" target="_blank" rel="noreferrer">View Full Resume →</a>
        </div>
        <div className="timeline">
          {experiences.map((item) => (
            <Reveal key={item.company}>
              <article className="timeline-item">
                <div className="timeline-date">{item.period.split(' — ').map((part) => <span key={part}>{part}</span>)}</div>
                <div className="timeline-track"><span /></div>
                <Image className="company-mark" src="/projects/poorvika-mark.jpg" alt="Poorvika Mobiles" width={51} height={53} />
                <div className="timeline-content">
                  <h3>{item.company}</h3>
                  <strong>{item.role}</strong>
                  <p>{item.summary}</p>
                  <p>{item.details}</p>
                </div>
                <div className="timeline-meta"><span>{item.duration}</span><small>Chennai, India</small></div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
