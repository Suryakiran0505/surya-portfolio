import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { experience, type Role } from '../data/portfolio';
import { EASE, SectionHeading, Tilt } from './fx';
import { PosterBackdrop } from './Poster';

/**
 * EXPERIENCE — every role on the resume as a billboard: key art on the left, the role on the right.
 * A crimson timeline fills as the visitor scrolls through the roles.
 */
export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.75', 'end 0.6'] });
  const fill = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <>
      <SectionHeading
        kicker="Now Streaming"
        title="Experience"
        aside={<p className="max-w-xs text-sm text-mist">Every role on the resume, with the stack it ran on and what I contributed.</p>}
      />

      <div ref={ref} className="gutter relative">
        <div aria-hidden className="absolute bottom-0 left-[calc(var(--gutter)+7px)] top-0 hidden w-px overflow-hidden bg-white/10 md:block">
          <motion.div className="h-full w-full origin-top bg-crimson" style={{ scaleY: fill }} />
        </div>
        <div className="space-y-8 sm:space-y-10">
          {experience.map((x, i) => (
            <RoleCard key={x.company} role={x} index={i} />
          ))}
        </div>
      </div>
    </>
  );
}

function RoleCard({ role: x, index }: { role: Role; index: number }) {
  const accent = x.palette.accent;
  const name = x.company.replace(/\s*Pvt\.?\s*Ltd\.?$/i, '');
  const mono = name
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('');

  return (
    <motion.article
      className="relative md:pl-12"
      initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-8% 0px' }}
      transition={{ duration: 0.9, delay: index * 0.08, ease: EASE }}
    >
      {/* timeline node */}
      <span
        aria-hidden
        className="absolute left-0 top-10 hidden h-[15px] w-[15px] rounded-full border-2 md:block"
        style={x.current ? { background: accent, borderColor: accent, boxShadow: `0 0 18px ${accent}` } : { background: 'var(--color-ink)', borderColor: 'rgba(255,255,255,0.35)' }}
      />

      <div className="group grid overflow-hidden rounded-2xl bg-ink-2 ring-1 ring-white/10 transition duration-500 hover:shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)] hover:ring-white/25 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        {/* key art */}
        <Tilt max={4} glare={false} className="relative aspect-video overflow-hidden lg:aspect-auto lg:min-h-[400px]">
          <div className="absolute inset-0 transition-transform duration-[1.4s] ease-[var(--ease-cine)] group-hover:scale-[1.06]">
            <PosterBackdrop palette={x.palette}>
              <span className="absolute -top-6 right-4 select-none font-display text-[10rem] leading-none text-white/[0.07] sm:text-[16rem] lg:text-[20rem]">{mono}</span>
            </PosterBackdrop>
          </div>

          <div className="absolute left-5 top-5 sm:left-7 sm:top-7">
            {x.current ? (
              <span className="flex items-center gap-2 rounded-full bg-black/45 px-3 py-1.5 text-[10px] font-bold tracking-[0.24em] text-bone backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" style={{ background: accent }} />
                  <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: accent }} />
                </span>
                NOW STREAMING
              </span>
            ) : (
              <span className="flex items-center gap-2 rounded-full bg-black/45 px-3 py-1.5 text-[10px] font-bold tracking-[0.24em] text-bone backdrop-blur">
                <span style={{ color: accent }}>✓</span> COMPLETED
              </span>
            )}
          </div>

          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 [transform:translateZ(30px)]">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em]" style={{ color: accent }}>
              {x.label}
            </p>
            <p className="font-display text-[clamp(2.4rem,4.6vw,3.8rem)] leading-[0.88] tracking-wide text-bone">{name}</p>
          </div>
        </Tilt>

        {/* the role */}
        <div className="p-5 sm:p-8 lg:p-10">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-mist">
            <span className="font-semibold" style={{ color: x.current ? '#46e3a8' : undefined }}>
              {x.period}
            </span>
            <span className="h-1 w-1 rounded-full bg-smoke" />
            <span>{x.label}</span>
          </div>
          <h3 className="mt-3 font-display text-[clamp(2rem,3.6vw,3rem)] leading-[0.92] tracking-wide text-bone">{x.role}</h3>
          <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-smoke">{x.company}</p>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-bone/85">{x.logline}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {x.stack.map((t) => (
              <span key={t} className="glass rounded-full px-3 py-1.5 text-xs font-medium text-bone">
                {t}
              </span>
            ))}
          </div>

          <h4 className="mb-3 mt-8 text-[11px] font-bold uppercase tracking-[0.3em] text-crimson-2">My Contribution</h4>
          <ul className="space-y-3">
            {x.points.map((p) => (
              <li key={p} className="flex gap-3 text-sm leading-relaxed text-bone/80">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: accent }} />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.article>
  );
}
