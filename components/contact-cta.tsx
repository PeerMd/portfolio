import { Download, Mail } from 'lucide-react';
import { Reveal } from './reveal';

export function ContactCta() {
  return (
    <section id="contact" className="cta-section">
      <div className="cta-wave cta-wave-one" />
      <div className="cta-wave cta-wave-two" />
      <div className="container cta-inner">
        <Reveal>
          <span className="eyebrow">LET&apos;S WORK TOGETHER</span>
          <h2>Have a project in mind?</h2>
          <p>
            I&apos;m currently available for full-time opportunities. Feel free
            to reach out!
          </p>
          <div className="cta-actions">
            <a
              className="button button-primary"
              href="mailto:peerkamaal@gmail.com"
            >
              <Mail size={16} /> Get in Touch
            </a>
            {/* <a className="button button-outline" href="/resume.pdf" download><Download size={16} /> Download Resume</a> */}
          </div>
        </Reveal>
        <div className="cta-script">
          Let&apos;s
          <br />
          Build Something
          <br />
          Great Together
          <span />
        </div>
      </div>
    </section>
  );
}
