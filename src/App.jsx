import { useEffect, useState } from "react";
import {
  education,
  experience,
  languages,
  profile,
  references,
  skills,
} from "./data";

const nav = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

function IconMail(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function IconPhone(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M6.5 3.5h3l1.5 4-2.2 1.3a13 13 0 0 0 6.4 6.4L16.5 13l4 1.5v3A2 2 0 0 1 18.6 20 16.5 16.5 0 0 1 4 5.4 2 2 0 0 1 6.5 3.5Z" />
    </svg>
  );
}

function IconPin(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.2" />
    </svg>
  );
}

export default function App() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const message = form.get("message");
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href = `${profile.emailHref}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-ink text-[#f4f1ec]">
      <div className="grain" />
      <div className="pointer-events-none absolute -left-24 top-0 h-[520px] w-[520px] rounded-full bg-ember/15 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-40 h-[380px] w-[380px] rounded-full bg-ember/10 blur-3xl" />

      <header
        className={`fixed inset-x-0 top-0 z-50 transition ${
          scrolled ? "border-b border-white/10 bg-ink/80 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#top" className="text-sm font-extrabold tracking-[0.22em] uppercase">
            MF<span className="text-ember">.</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-white/70 md:flex">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-ember">
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-full bg-ember px-4 py-2 font-semibold text-ink transition hover:bg-ember-bright"
            >
              Hire me
            </a>
          </nav>
          <button
            type="button"
            className="md:hidden"
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="block h-0.5 w-6 bg-white" />
            <span className="mt-1.5 block h-0.5 w-6 bg-white" />
          </button>
        </div>
        {open && (
          <div className="border-t border-white/10 bg-ink px-5 py-4 md:hidden">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-2 text-white/80"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" className="mt-2 inline-block text-ember" onClick={() => setOpen(false)}>
              Hire me
            </a>
          </div>
        )}
      </header>

      <main id="top">
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-24 pt-28 md:grid-cols-[1.15fr_0.85fr] md:pt-36">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-ember">
              Kigali · Available for work
            </p>
            <h1 className="text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-7xl">
              Munezero
              <span className="block text-ember">Fiable</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/70">{profile.role} building human-centered products with React, Node.js, and a growing focus on data science.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-full bg-ember px-6 py-3 text-sm font-bold text-ink transition hover:bg-ember-bright"
              >
                Let’s work together
              </a>
              <a
                href="#experience"
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-bold text-white/90 transition hover:border-ember hover:text-ember"
              >
                View experience
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-white/55">
              <span className="flex items-center gap-2">
                <IconPin className="h-4 w-4 text-ember" />
                {profile.location}
              </span>
              <a href={profile.emailHref} className="flex items-center gap-2 hover:text-ember">
                <IconMail className="h-4 w-4 text-ember" />
                {profile.email}
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-6 rounded-[2rem] bg-ember/20 blur-2xl" />
            <div className="photo-glow relative overflow-hidden rounded-[2rem] bg-ink-soft">
              <img
                src={profile.photo}
                alt="Portrait of Munezero Fiable"
                width={397}
                height={634}
                fetchPriority="high"
                decoding="async"
                className="h-[32rem] w-full object-cover object-top"
                onError={(e) => {
                  e.currentTarget.src = profile.photoFallback;
                }}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/30 to-transparent p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-ember">Full-stack</p>
                <p className="font-semibold">React · Node · Python</p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-ink-soft/60">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-10 md:grid-cols-4">
            {[
              ["4+", "roles shipped"],
              ["3", "languages"],
              ["Full-stack", "React to SQL"],
              ["Kigali", "based"],
            ].map(([k, v]) => (
              <div key={k}>
                <p className="text-3xl font-extrabold text-ember">{k}</p>
                <p className="text-sm text-white/55">{v}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-ember">About</p>
          <h2 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight">
            Enterprise systems with a human-centered pulse.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/70">{profile.summary}</p>
        </section>

        <section id="skills" className="mx-auto max-w-6xl scroll-mt-24 px-5 pb-24">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-ember">Skills</p>
          <h2 className="mt-3 text-4xl font-extrabold">The stack I ship with</h2>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 transition hover:border-ember/60"
              >
                <span className="font-semibold">{skill.name}</span>
                <span className="text-xs uppercase tracking-wider text-ember">{skill.group}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="bg-ink-soft/50 py-24">
          <div className="mx-auto max-w-6xl scroll-mt-24 px-5">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-ember">Experience</p>
            <h2 className="mt-3 text-4xl font-extrabold">Where the work happened</h2>
            <div className="mt-12 space-y-8">
              {experience.map((job) => (
                <article
                  key={`${job.company}-${job.period}`}
                  className="grid gap-6 rounded-3xl border border-white/10 bg-ink p-6 md:grid-cols-[220px_1fr] md:p-8"
                >
                  <div>
                    <p className="text-sm text-ember">{job.period}</p>
                    <h3 className="mt-2 text-xl font-bold">{job.role}</h3>
                    <p className="text-white/60">{job.company}</p>
                  </div>
                  <ul className="space-y-3 text-white/75">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="mx-auto grid max-w-6xl scroll-mt-24 gap-10 px-5 py-24 md:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-ember">Education</p>
            <h2 className="mt-3 text-4xl font-extrabold">Training the craft</h2>
            <div className="mt-8 rounded-3xl border border-ember/40 bg-gradient-to-br from-ember/15 to-transparent p-8">
              <p className="text-sm text-ember">{education.period}</p>
              <h3 className="mt-2 text-2xl font-bold">{education.title}</h3>
              <p className="mt-1 text-white/70">{education.school}</p>
            </div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-ember">Languages</p>
            <h2 className="mt-3 text-4xl font-extrabold">How I communicate</h2>
            <div className="mt-8 space-y-4">
              {languages.map((lang) => (
                <div key={lang.name} className="rounded-2xl border border-white/10 px-5 py-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">{lang.name}</span>
                    <span className="text-sm text-ember">{lang.level}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-ink-soft/50 py-24">
          <div className="mx-auto grid max-w-6xl scroll-mt-24 gap-12 px-5 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-ember">Contact</p>
              <h2 className="mt-3 text-4xl font-extrabold">Let’s build something sharp.</h2>
              <p className="mt-4 text-white/70">
                Open to internships, backend, and full-stack product work. Reach out directly or send a short note.
              </p>
              <div className="mt-8 space-y-4 text-sm">
                <a href={profile.emailHref} className="flex items-center gap-3 hover:text-ember">
                  <IconMail className="h-5 w-5 text-ember" />
                  {profile.email}
                </a>
                <a href={profile.phoneHref} className="flex items-center gap-3 hover:text-ember">
                  <IconPhone className="h-5 w-5 text-ember" />
                  {profile.phone}
                </a>
                <p className="flex items-center gap-3">
                  <IconPin className="h-5 w-5 text-ember" />
                  {profile.location}
                </p>
              </div>
              <div className="mt-10">
                <p className="text-xs font-bold uppercase tracking-[0.35em] text-white/40">References</p>
                <div className="mt-4 space-y-4">
                  {references.map((ref) => (
                    <div key={ref.email} className="rounded-2xl border border-white/10 p-4">
                      <p className="font-semibold">{ref.name}</p>
                      <p className="text-sm text-ember">{ref.title}</p>
                      <p className="mt-1 text-sm text-white/55">{ref.phone}</p>
                      <a href={`mailto:${ref.email}`} className="text-sm text-white/55 hover:text-ember">
                        {ref.email}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <form onSubmit={onSubmit} className="rounded-3xl border border-white/10 bg-ink p-6 md:p-8">
              <label className="block text-sm font-medium">
                Name
                <input
                  required
                  name="name"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-ember"
                />
              </label>
              <label className="mt-4 block text-sm font-medium">
                Email
                <input
                  required
                  type="email"
                  name="email"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-ember"
                />
              </label>
              <label className="mt-4 block text-sm font-medium">
                Message
                <textarea
                  required
                  name="message"
                  rows={6}
                  className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-ember"
                />
              </label>
              <button
                type="submit"
                className="mt-6 w-full rounded-full bg-ember py-3 font-bold text-ink transition hover:bg-ember-bright"
              >
                Send message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-white/40">
        © {new Date().getFullYear()} Munezero Fiale. Built with React and Tailwind.
      </footer>
    </div>
  );
}
