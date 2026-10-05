import Script from "next/script";
import InkGallery from "./components/InkGallery";
import { homeGallery } from "./gallery-data";
import { projects } from "./projects";

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ryan-sutawijaya-a84758236/" },
  { label: "Dribbble", href: "https://dribbble.com/Darkzzhelll" },
  { label: "Instagram", href: "https://www.instagram.com/ryansutawijaya/" },
  { label: "GitHub", href: "https://github.com/Darkzzhelll" },
  { label: "WhatsApp", href: "https://wa.me/6281333962166" },
];

function SocialIcon({ name }) {
  const common = { width: 21, height: 21, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true };
  if (name === "LinkedIn") return <svg {...common}><rect x="3" y="8" width="4" height="13" /><path d="M5 4.5h.01M11 21V8h4v2c.7-1.4 2-2.3 3.8-2.3 2.4 0 3.2 1.7 3.2 4.4V21h-4v-8c0-1.3-.5-2-1.6-2-1.2 0-1.8.8-1.8 2V21" /></svg>;
  if (name === "Dribbble") return <svg {...common}><circle cx="12" cy="12" r="9" /><path d="M8 4.1c3.6 4.1 5.7 8.5 6.8 16.1M4 9.1c4.6.4 8.6-.6 12.2-3M4.2 16.2c5.1-4 10-5.3 16.6-3.9" /></svg>;
  if (name === "Instagram") return <svg {...common}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.7" r=".7" fill="currentColor" stroke="none" /></svg>;
  if (name === "GitHub") return <svg {...common}><path d="M8.4 20.5c-4.3-1.2-5.9-4.4-5.9-8.2 0-2.1.8-3.9 2.2-5.2-.2-.8-.3-2.4.2-3.6 0 0 1.8-.2 3.7 1.7a13 13 0 0 1 6.8 0c1.9-1.9 3.7-1.7 3.7-1.7.5 1.2.4 2.8.2 3.6 1.4 1.3 2.2 3.1 2.2 5.2 0 3.8-1.6 7-5.9 8.2M9 20.5v-3.2c-2 .5-3.3 0-4.2-1.7M15 20.5v-3.2c0-1-.1-1.7-.6-2.2" /></svg>;
  return <svg {...common}><path d="M20.7 11.7a8.7 8.7 0 0 1-12.9 7.6L3 20.6l1.3-4.7a8.7 8.7 0 1 1 16.4-4.2Z" /><path d="M8.2 7.6c-.5.2-.9.9-.9 1.5 0 2.3 3.4 5.8 5.7 6.5.7.2 1.5-.2 1.9-.8l.5-.9-2.1-1-1 1c-1.2-.5-2.3-1.6-2.9-2.8l.9-1-1.2-2.2-.9-.3Z" /></svg>;
}

export default function Home() {
  return (
    <>

    <a className="skip-link" href="#main">Lewati ke konten</a>
    <div className="progress" aria-hidden="true"></div>

    <header className="site-header">
      <a className="brand" href="#beranda" aria-label="Ryan Sutawijaya, kembali ke atas">RS<span className="brand-dot">.</span></a>
      <nav aria-label="Navigasi utama">
        <a href="#cerita">Profil</a>
        <a href="#cara-kerja">Cara kerja</a>
        <a href="#karya">Karya</a>
        <a href="#galeri">Galeri</a>
      </nav>
      <a className="header-contact" href="#kontak">Mari terhubung <span aria-hidden="true">↗</span></a>
    </header>

    <main id="main" className="relative">
      <section className="hero" id="beranda" aria-labelledby="hero-title">
        <div className="hero-topline"><span>RYAN SUTAWIJAYA / PORTOFOLIO</span><span>DESAIN · PRODUK · WEB</span></div>
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow"><span className="live-dot"></span> RYAN SUTAWIJAYA · DESAIN &amp; VIBE CODING</span>
            <h1 id="hero-title">Membuat web<br />yang <em>mudah</em><br />dan nyaman<br />digunakan<span className="period">.</span></h1>
            <p>Saya suka menyederhanakan hal yang rumit menjadi pengalaman yang enak dipakai. Pekerjaan saya bergerak antara desain, koordinasi produk, konten, dan front-end. Sekarang pekerjaan saya banyak berkisar pada vibe coding, sambil terus belajar membangun web yang benar-benar berguna.</p>
            <div className="hero-actions">
              <a className="pill pill-dark" href="/Ryan-Sutawijaya-CV.pdf" download="CV-Ryan-Sutawijaya.pdf">Unduh CV <span aria-hidden="true">↓</span></a>
              <a className="text-link" href="#karya">Lihat proyek <span aria-hidden="true">↗</span></a>
            </div>
            <nav className="hero-social" aria-label="Media sosial Ryan"><span className="social-kicker">TERHUBUNG DI</span><div className="social-grid">{socialLinks.map(({ label, href }) => <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={`${label} Ryan, terbuka di tab baru`}><SocialIcon name={label} /><span>{label}</span></a>)}</div></nav>
          </div>

          <div className="hero-art" id="hero-art" data-mode="0" aria-label="Potret artistik Ryan Sutawijaya dengan tiga eksplorasi visual yang dapat dipilih">
            <div className="art-frame">
              <img className="portrait portrait-base" src="/assets/ryan-portrait.png" alt="Ryan Sutawijaya berdiri dengan payung dalam komposisi tinta hitam-putih" fetchPriority="high" />
              <img className="portrait portrait-reveal" src="/assets/ryan-portrait.png" alt="" aria-hidden="true" />
              <div className="art-grain" aria-hidden="true"></div>
              <div className="art-corner art-corner-tl" aria-hidden="true">RS / 01</div>
              <div className="art-corner art-corner-br" aria-hidden="true">GERAKKAN KURSOR ↗</div>
              <div className="art-caption" aria-live="polite"><span className="caption-number">01 / 03</span><strong>Melihat lebih dekat</strong></div>
              <div className="reveal-ring" aria-hidden="true"></div>
            </div>
            <div className="art-switcher" role="group" aria-label="Pilih sisi eksplorasi">
              <button className="mode-button is-active" type="button" data-mode="0" aria-pressed="true">01 <span>Desain</span></button>
              <button className="mode-button" type="button" data-mode="1" aria-pressed="false">02 <span>Eksplorasi</span></button>
              <button className="mode-button" type="button" data-mode="2" aria-pressed="false">03 <span>Bangun</span></button>
            </div>
            <p className="art-hint">Arahkan kursor ke foto, atau pilih satu sisi.</p>
          </div>
        </div>
        <div className="hero-bottomline"><span>TERAKHIR DIPERBARUI 2026</span><a href="#cerita">LANJUT BACA <span aria-hidden="true">↓</span></a><span>01 — 05</span></div>
      </section>

      <section className="intro section-pad reveal" id="cerita" aria-labelledby="intro-title">
        <div className="section-index"><span>01 / PROFIL</span><span>PENGALAMAN DAN LATAR BELAKANG</span></div>
        <div className="intro-layout">
          <div className="intro-signature" aria-hidden="true"><span>CATATAN / 01</span><strong><em>Ryan</em><br />Sutawijaya<span className="signature-dot">.</span></strong><small>DESAIN, PRODUK &amp; WEB</small></div>
          <div>
            <h2 id="intro-title">Mulai dari apa yang dibutuhkan pengguna menuju <em>solusi yang siap digunakan.</em></h2>
            <div className="intro-columns">
              <p>Jabatan saya UI/UX Designer, tetapi pekerjaan sehari-hari sering melebar: menyusun alur produk, mengoordinasikan tim, membuat konten dan grafis, sampai membantu sisi front-end. Saya menyesuaikan peran dengan kebutuhan proyek.</p>
              <p>Belakangan pekerjaan saya lebih sering berupa membangun prototipe web lewat vibe coding. Saya masih belajar front-end dan integrasi API, sambil terus melatih penilaian desain: apa yang perlu dibuat, apa yang sebaiknya disederhanakan, dan apakah hasilnya nyaman dipakai.</p>
            </div>
            <div className="intro-facts"><div><span>PEKERJAAN</span><strong>Risada Damai Sejahtera</strong><small>UI/UX Designer · 2023—sekarang</small></div><div><span>PENDIDIKAN</span><strong>Universitas Brawijaya</strong><small>S1 Informatika · 2018—2023</small></div></div>
          </div>
        </div>
      </section>

      <section className="statement" aria-label="Prinsip desain">
        <div className="statement-bg" aria-hidden="true"></div>
        <p className="statement-kicker">PRINSIP KERJA</p>
        <p className="statement-text">Mudah dipakai.<br /><em>Nyaman untuk kembali.</em></p>
        <p className="statement-note">Saya memilih tampilan yang sederhana dan alur yang tidak membuat orang menebak-nebak. Pengguna seharusnya bisa menyelesaikan tujuannya, lalu betah saat kembali.</p>
      </section>

      <section className="process section-pad" id="cara-kerja" aria-labelledby="process-title">
        <div className="section-index reveal"><span>02 / CARA KERJA</span><span>DARI KEBUTUHAN KE HASIL YANG BISA DICOBA</span></div>
        <div className="process-heading reveal"><h2 id="process-title">Mulai dari <em>orangnya.</em></h2><p>Cara saya bergerak dari kebutuhan pengguna sampai hasil yang bisa dicoba dan diperbaiki.</p></div>
        <div className="process-list">
          <article className="process-item reveal"><span className="process-num">01</span><div><h3>Pahami kebutuhan.</h3><p>Mulai dari tujuan pengguna, kebutuhan stakeholder, dan batasan produk.</p></div><span className="process-icon" aria-hidden="true">↗</span></article>
          <article className="process-item reveal"><span className="process-num">02</span><div><h3>Susun alur.</h3><p>Petakan langkah dan informasi yang perlu dilihat pengguna sebelum merancang tampilan akhir.</p></div><span className="process-icon" aria-hidden="true">↗</span></article>
          <article className="process-item reveal"><span className="process-num">03</span><div><h3>Buat versi awal.</h3><p>Kadang berupa desain dan prototipe, kadang langsung berupa web yang saya bangun dengan bantuan AI.</p></div><span className="process-icon" aria-hidden="true">↗</span></article>
          <article className="process-item reveal"><span className="process-num">04</span><div><h3>Coba dan perbaiki.</h3><p>Periksa apakah alurnya mudah dipahami, minta masukan, lalu rapikan bagian yang menghambat pengguna.</p></div><span className="process-icon" aria-hidden="true">↗</span></article>
        </div>
      </section>

      <section className="skills section-pad" aria-labelledby="skills-title">
        <div className="section-index reveal"><span>03 / KEAHLIAN</span><span>ALAT DAN BIDANG YANG SAYA KERJAKAN</span></div>
        <div className="skills-layout reveal"><h2 id="skills-title">Banyak peran.<br /><em>Satu tujuan: mudah dipakai.</em></h2><div className="skills-groups"><div><h3>Yang pernah saya kerjakan</h3><div className="skill-tags" aria-label="Bidang kerja"><span>UI/UX Design</span><span>Koordinasi produk</span><span>Scrum Master</span><span>Konten &amp; grafis</span><span>Prototyping</span><span>Responsive UI</span></div></div><div><h3>Yang sedang saya dalami</h3><div className="skill-tags" aria-label="Bidang yang sedang dipelajari"><span>Vibe coding</span><span>Front-end</span><span>Integrasi API</span><span>Claude</span><span>ChatGPT</span><span>z.ai</span></div></div></div></div>
        <p className="skills-note reveal">Pengalaman kerja dan pendidikan lengkap tersedia di CV yang dapat diunduh.</p>
      </section>

      <section className="work section-pad" id="karya" aria-labelledby="work-title">
        <div className="section-index reveal"><span>04 / PROYEK</span><span>TIGA CONTOH DARI PEKERJAAN DAN PROYEK PRIBADI</span></div>
        <div className="work-head reveal"><h2 id="work-title">Beberapa pekerjaan, <em>beberapa peran.</em></h2><p>Buka setiap cerita untuk melihat konteks, peran saya, dan cara pengerjaannya.</p></div>
        <div className="project-grid">
          {projects.map((project) => <article className={`project-card reveal${project.featured ? " project-card-featured" : ""}`} key={project.number}>
            <div className="project-card-top"><span>{project.number} / {project.kind.toUpperCase()} · {project.year.toUpperCase()}</span><span aria-hidden="true">↗</span></div>
            <div className="project-card-body"><span className="project-card-watermark" aria-hidden="true">{project.number}</span><p className="project-context">{project.context}</p><h3>{project.title}</h3><p className="project-description">{project.description}</p></div>
            <div className="project-card-bottom"><div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><a href={`/proyek/${project.slug}/`} aria-label={`Baca cerita proyek ${project.title}`}>Baca ceritanya <span aria-hidden="true">↗</span></a></div>
          </article>)}
        </div>
      </section>

      <section className="gallery-section section-pad" id="galeri" aria-labelledby="gallery-title">
        <div className="section-index reveal"><span>05 / GALERI</span><span>CUPLIKAN VISUAL DARI CERITA PROYEK</span></div>
        <div className="gallery-heading reveal"><h2 id="gallery-title">Ruang <em>visual.</em></h2><div><p>Beberapa pekerjaan punya hasil yang bisa ditunjukkan. Sebagian lain saya ceritakan lewat peran dan prosesnya.</p><small>Klik gambar untuk melihat keterangan dan cerita proyek.</small></div></div>
        <InkGallery items={homeGallery} scattered label="Galeri visual pilihan dari proyek Ryan" />
      </section>

      <section className="contact section-pad" id="kontak" aria-labelledby="contact-title">
        <div className="section-index reveal"><span>KONTAK</span><span>TERBUKA UNTUK DISKUSI DAN KOLABORASI</span></div>
        <h2 className="reveal" id="contact-title">Mari bicara<br /><em>tentang proyekmu.</em></h2>
        <div className="contact-bottom reveal"><p>Untuk peluang kerja, kolaborasi, atau pertanyaan tentang proyek yang ditampilkan di sini, kirim email kepada saya.</p><a className="contact-email" href="mailto:ryansutawijaya@gmail.com">ryansutawijaya@gmail.com <span aria-hidden="true">↗</span></a></div>
      </section>
    </main>

    <footer><span>© <span id="year">2026</span> RYAN SUTAWIJAYA</span><span>WEBSITE PRIBADI RYAN</span><a href="#beranda">KEMBALI KE ATAS ↑</a></footer>
  
      <Script src="/script.js" strategy="afterInteractive" />
    </>
  );
}
