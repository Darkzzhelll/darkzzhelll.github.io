import Script from "next/script";

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ryan-sutawijaya-a84758236/" },
  { label: "Dribbble", href: "https://dribbble.com/Darkzzhelll" },
  { label: "Instagram", href: "https://www.instagram.com/ryansutawijaya/" },
  { label: "GitHub", href: "https://github.com/Darkzzhelll" },
  { label: "WhatsApp", href: "https://wa.me/6281333962166" },
];

const projects = [
  {
    number: "01",
    category: "PROYEK TIM / 2022",
    title: "Pemantauan Sungai Brantas",
    context: "AWS SEAL · MSIB Batch 2 · DLH Kota Batu",
    description: "Aplikasi web untuk membantu memantau kondisi Sungai Brantas. Saya terlibat sebagai Scrum Master, UI/UX Designer, dan Front-end Developer. Proyek tim ini meraih peringkat pertama di kompetisi AWS SEAL MSIB.",
    tags: ["UI/UX", "Front-end", "Scrum Master"],
    featured: true,
  },
  {
    number: "02",
    category: "PEKERJAAN / 2023—SEKARANG",
    title: "Antarmuka web & aplikasi",
    context: "Risada Damai Sejahtera",
    description: "Merancang antarmuka dan prototipe, menyiapkan layout responsif, serta meninjau implementasi bersama developer. Saya menyempurnakan desain lewat masukan stakeholder dan uji kegunaan.",
    tags: ["UI/UX", "Prototyping", "Design Handoff"],
  },
  {
    number: "03",
    category: "PROYEK PRIBADI / 2026",
    title: "Website profil ini",
    context: "CV dan portofolio online",
    description: "Eksperimen membangun website profil dengan Next.js dan Tailwind CSS. Kode serta proses perubahannya terbuka di GitHub.",
    tags: ["Next.js", "Tailwind CSS", "GitHub Pages"],
    href: "https://github.com/Darkzzhelll/darkzzhelll.github.io",
  },
];

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
      </nav>
      <a className="header-contact" href="#kontak">Mari terhubung <span aria-hidden="true">↗</span></a>
    </header>

    <main id="main" className="relative">
      <section className="hero" id="beranda" aria-labelledby="hero-title">
        <div className="hero-topline"><span>RYAN SUTAWIJAYA / PORTOFOLIO</span><span>UI/UX DESIGNER · MALANG, INDONESIA</span></div>
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow"><span className="live-dot"></span> UI/UX DESIGNER · RYAN SUTAWIJAYA</span>
            <h1 id="hero-title">Merancang<br /><em>alur</em> dan<br />antarmuka<br />produk digital<span className="period">.</span></h1>
            <p>Saya merancang antarmuka web dan aplikasi di Risada Damai Sejahtera. Dari prototipe hingga handoff ke developer, saya memastikan alurnya tetap jelas saat desain diterapkan.</p>
            <div className="hero-actions">
              <a className="pill pill-dark" href="/Ryan-Sutawijaya-CV.pdf" download="CV-Ryan-Sutawijaya.pdf">Unduh CV <span aria-hidden="true">↓</span></a>
              <a className="text-link" href="#karya">Lihat proyek <span aria-hidden="true">↗</span></a>
            </div>
            <div className="hero-social" aria-label="Media sosial Ryan"><span>TEMUKAN SAYA</span><div>{socialLinks.map(({ label, href }) => <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={`${label} Ryan, terbuka di tab baru`}>{label}<span aria-hidden="true">↗</span></a>)}</div></div>
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
        <div className="hero-bottomline"><span>TERAKHIR DIPERBARUI 2026</span><a href="#cerita">LANJUT BACA <span aria-hidden="true">↓</span></a><span>01 — 04</span></div>
      </section>

      <section className="intro section-pad reveal" id="cerita" aria-labelledby="intro-title">
        <div className="section-index"><span>01 / PROFIL</span><span>PENGALAMAN DAN LATAR BELAKANG</span></div>
        <div className="intro-layout">
          <div className="intro-symbol" aria-hidden="true"><span>R</span><small>RYAN<br />SUTAWIJAYA</small></div>
          <div>
            <h2 id="intro-title">Dari kebutuhan pengguna ke <em>desain yang siap dibangun.</em></h2>
            <div className="intro-columns">
              <p>Sejak April 2023, saya bekerja sebagai UI/UX Designer di Risada Damai Sejahtera. Saya merancang antarmuka web dan aplikasi, membuat prototipe high-fidelity, serta menyusun layout responsif berdasarkan kebutuhan pengguna dan stakeholder.</p>
              <p>Saya bekerja bersama developer untuk meninjau hasil implementasi, lalu memperbaiki desain dari masukan dan pengujian usability. Di luar pekerjaan, saya mendalami front-end, integrasi API, dan cara memakai AI untuk menguji ide lebih cepat.</p>
            </div>
            <div className="intro-facts"><div><span>PEKERJAAN</span><strong>Risada Damai Sejahtera</strong><small>UI/UX Designer · 2023—sekarang</small></div><div><span>PENDIDIKAN</span><strong>Universitas Brawijaya</strong><small>S1 Informatika · 2018—2023</small></div></div>
          </div>
        </div>
      </section>

      <section className="statement" aria-label="Prinsip desain">
        <div className="statement-bg" aria-hidden="true"></div>
        <p className="statement-kicker">PRINSIP KERJA</p>
        <p className="statement-text">Pengguna perlu tahu<br />apa yang terjadi,<br /><em>dan apa langkah berikutnya.</em></p>
      </section>

      <section className="process section-pad" id="cara-kerja" aria-labelledby="process-title">
        <div className="section-index reveal"><span>02 / CARA KERJA</span><span>DARI KEBUTUHAN KE PROTOTIPE</span></div>
        <div className="process-heading reveal"><h2 id="process-title">Mulai dari <em>masalahnya.</em></h2><p>Pendekatan yang saya gunakan saat merancang dan meninjau antarmuka.</p></div>
        <div className="process-list">
          <article className="process-item reveal"><span className="process-num">01</span><div><h3>Pahami kebutuhan.</h3><p>Mulai dari tujuan pengguna, kebutuhan stakeholder, dan batasan produk.</p></div><span className="process-icon" aria-hidden="true">↗</span></article>
          <article className="process-item reveal"><span className="process-num">02</span><div><h3>Susun alur.</h3><p>Petakan langkah dan informasi yang perlu dilihat pengguna sebelum merancang tampilan akhir.</p></div><span className="process-icon" aria-hidden="true">↗</span></article>
          <article className="process-item reveal"><span className="process-num">03</span><div><h3>Buat prototipe.</h3><p>Rancang layar responsif dan prototipe yang bisa ditinjau bersama tim.</p></div><span className="process-icon" aria-hidden="true">↗</span></article>
          <article className="process-item reveal"><span className="process-num">04</span><div><h3>Tinjau hasilnya.</h3><p>Periksa implementasi bersama developer dan perbaiki berdasarkan masukan pengguna maupun stakeholder.</p></div><span className="process-icon" aria-hidden="true">↗</span></article>
        </div>
      </section>

      <section className="skills section-pad" aria-labelledby="skills-title">
        <div className="section-index reveal"><span>03 / KEAHLIAN</span><span>ALAT DAN BIDANG YANG SAYA KERJAKAN</span></div>
        <div className="skills-layout reveal"><h2 id="skills-title">Desain sebagai dasar.<br /><em>Kode sebagai perluasan.</em></h2><div className="skills-groups"><div><h3>Di pekerjaan</h3><div className="skill-tags" aria-label="Bidang kerja"><span>UI/UX Design</span><span>Figma</span><span>Prototyping</span><span>Responsive UI</span><span>Design Handoff</span><span>Photoshop</span><span>Illustrator</span></div></div><div><h3>Sedang didalami</h3><div className="skill-tags" aria-label="Bidang yang sedang dipelajari"><span>Front-end</span><span>Integrasi API</span><span>Vibe Coding</span><span>Claude</span><span>ChatGPT</span><span>z.ai</span></div></div></div></div>
        <p className="skills-note reveal">Pengalaman kerja dan pendidikan lengkap tersedia di CV yang dapat diunduh.</p>
      </section>

      <section className="work section-pad" id="karya" aria-labelledby="work-title">
        <div className="section-index reveal"><span>04 / PROYEK</span><span>TIGA CONTOH DARI PEKERJAAN DAN PROYEK PRIBADI</span></div>
        <div className="work-head reveal"><h2 id="work-title">Beberapa proyek <em>yang saya kerjakan.</em></h2><p>Tiga contoh pekerjaan saya: proyek tim, desain produk di tempat kerja, dan website ini.</p></div>
        <div className="project-grid">
          {projects.map((project) => <article className={`project-card reveal${project.featured ? " project-card-featured" : ""}`} key={project.number}>
            <div className="project-card-top"><span>{project.number} / {project.category}</span><span aria-hidden="true">{project.href ? "↗" : "—"}</span></div>
            <div className="project-card-body"><span className="project-card-watermark" aria-hidden="true">{project.number}</span><p className="project-context">{project.context}</p><h3>{project.title}</h3><p className="project-description">{project.description}</p></div>
            <div className="project-card-bottom"><div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>{project.href && <a href={project.href} target="_blank" rel="noopener noreferrer">Lihat kode <span aria-hidden="true">↗</span></a>}</div>
          </article>)}
        </div>
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
