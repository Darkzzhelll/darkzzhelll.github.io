import { notFound } from "next/navigation";
import ProjectIllustration from "../../components/ProjectIllustration";
import { getProject, projects } from "../../projects";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Ryan Sutawijaya`,
    description: project.description,
    alternates: { canonical: `/proyek/${slug}/` },
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const nextProject = projects[(projects.findIndex((item) => item.slug === slug) + 1) % projects.length];

  return <>
    <a className="skip-link" href="#main">Lewati ke konten</a>
    <header className="site-header case-header">
      <a className="brand" href="/#beranda" aria-label="Ryan Sutawijaya, kembali ke beranda">RS<span className="brand-dot">.</span></a>
      <nav aria-label="Navigasi utama"><a href="/#cerita">Profil</a><a href="/#cara-kerja">Cara kerja</a><a href="/#karya">Karya</a></nav>
      <a className="header-contact" href="/#kontak">Mari terhubung <span aria-hidden="true">↗</span></a>
    </header>
    <main id="main" className="case-page">
      <section className="case-hero" aria-labelledby="case-title">
        <a className="case-back" href="/#karya"><span aria-hidden="true">←</span> Kembali ke proyek</a>
        <div className="case-hero-grid"><div><p className="case-eyebrow">{project.number} / {project.kind} · {project.year}</p><h1 id="case-title">{project.title}<span className="period">.</span></h1><p className="case-lead">{project.lead}</p></div><div className="case-meta"><div><span>KONTEKS</span><strong>{project.context}</strong></div><div><span>PERAN SAYA</span><strong>{project.roles.join(" · ")}</strong></div></div></div>
      </section>
      <figure className="case-figure"><ProjectIllustration type={project.illustration}/><figcaption>{project.illustrationCaption}</figcaption></figure>
      <section className="case-section case-background" aria-labelledby="background-title"><div className="case-section-label">01 / LATAR BELAKANG</div><div><h2 id="background-title">Awalnya dari mana?</h2>{project.background.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></section>
      <section className="case-section case-approach" aria-labelledby="approach-title"><div className="case-section-label">02 / PERAN &amp; PROSES</div><div><h2 id="approach-title">Bagian yang saya kerjakan.</h2><div className="case-steps">{project.approach.map((step) => <article key={step.label}><span>{step.label}</span><h3>{step.title}</h3><p>{step.body}</p></article>)}</div></div></section>
      <section className="case-section case-outcome" aria-labelledby="outcome-title"><div className="case-section-label">03 / HASIL &amp; CATATAN</div><div><h2 id="outcome-title">Yang bisa saya tunjukkan.</h2><p>{project.outcome}</p><p>{project.closing}</p>{project.external && <a className="case-external" href={project.external.href} target="_blank" rel="noopener noreferrer">{project.external.label} <span aria-hidden="true">↗</span></a>}</div></section>
      <nav className="case-next" aria-label="Proyek berikutnya"><span>LANJUT KE CERITA BERIKUTNYA</span><a href={`/proyek/${nextProject.slug}/`}>{nextProject.title} <span aria-hidden="true">↗</span></a></nav>
    </main>
    <footer><span>© 2026 RYAN SUTAWIJAYA</span><span>WEBSITE PRIBADI RYAN</span><a href="/#karya">KEMBALI KE PROYEK ↑</a></footer>
  </>;
}
