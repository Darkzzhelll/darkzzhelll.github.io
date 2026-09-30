import Script from "next/script";

export default function Home() {
  return (
    <>

    <a className="skip-link" href="#main">Lewati ke konten</a>
    <div className="progress" aria-hidden="true"></div>

    <header className="site-header">
      <a className="brand" href="#beranda" aria-label="Ryan Sutawijaya, kembali ke atas">RS<span className="brand-dot">.</span></a>
      <nav aria-label="Navigasi utama">
        <a href="#cerita">Cerita</a>
        <a href="#cara-kerja">Cara kerja</a>
        <a href="#karya">Karya</a>
      </nav>
      <a className="header-contact" href="#kontak">Mari terhubung <span aria-hidden="true">↗</span></a>
    </header>

    <main id="main" className="relative">
      <section className="hero" id="beranda" aria-labelledby="hero-title">
        <div className="hero-topline"><span>RYAN SUTAWIJAYA / 2026</span><span>UI/UX DESIGNER · BELAJAR FRONT-END</span></div>
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow"><span className="live-dot"></span> Halo, saya Ryan</span>
            <h1 id="hero-title">Saya mendesain.<br /><em>Sekarang</em> juga<br />belajar bikin<br />webnya<span className="period">.</span></h1>
            <p>Saya Ryan Sutawijaya, UI/UX Designer. Di tempat kerja, saya perlu memikirkan alur dan tampilan sekaligus memahami bagaimana desain diterapkan. Itu sebabnya saya mulai belajar front-end, API, dan vibe coding.</p>
            <div className="hero-actions">
              <a className="pill pill-dark" href="#cerita">Tentang saya <span aria-hidden="true">↗</span></a>
              <a className="text-link" href="#karya">Lihat proyek <span aria-hidden="true">↓</span></a>
            </div>
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
        <div className="hero-bottomline"><span>INDONESIA</span><a href="#cerita">LANJUT BACA <span aria-hidden="true">↓</span></a><span>01 — 04</span></div>
      </section>

      <section className="intro section-pad reveal" id="cerita" aria-labelledby="intro-title">
        <div className="section-index"><span>01 / TENTANG SAYA</span><span>DARI PEKERJAAN KE HAL YANG SEDANG DIPELAJARI</span></div>
        <div className="intro-layout">
          <div className="intro-symbol" aria-hidden="true"><span>R</span><small>RYAN<br />SUTAWIJAYA</small></div>
          <div>
            <h2 id="intro-title">Di pekerjaan saya, batas antara <em>desain dan implementasi</em> makin tipis.</h2>
            <div className="intro-columns">
              <p>Saya bekerja sebagai UI/UX Designer. Sering kali tugasnya tidak berhenti setelah layar selesai digambar. Saya perlu memikirkan urutan langkah pengguna, kata-kata di antarmuka, dan apa yang terjadi ketika desain itu dipakai.</p>
              <p>Belakangan saya mencoba membuat sendiri sebagian ide itu di browser. Saya belajar front-end dan mengambil data dari API, dibantu Claude, ChatGPT, dan z.ai. Hasilnya belum selalu rapi. Justru dari situ saya bisa melihat bagian mana yang masih perlu saya pahami.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="statement" aria-label="Prinsip desain">
        <div className="statement-bg" aria-hidden="true"></div>
        <p className="statement-kicker">CATATAN UNTUK DIRI SENDIRI</p>
        <p className="statement-text">Kalau orang harus<br />menebak langkah berikutnya,<br /><em>alurnya perlu diperbaiki.</em></p>
      </section>

      <section className="process section-pad" id="cara-kerja" aria-labelledby="process-title">
        <div className="section-index reveal"><span>02 / CARA KERJA</span><span>URUTAN YANG SAYA COBA PAKAI</span></div>
        <div className="process-heading reveal"><h2 id="process-title">Mulai dari <em>yang ditanya.</em></h2><p>Saya belum punya proses yang selalu mulus. Empat langkah ini membantu saya tidak langsung lompat ke tampilan.</p></div>
        <div className="process-list">
          <article className="process-item reveal"><span className="process-num">01</span><div><h3>Cari masalahnya.</h3><p>Saya tulis dulu siapa yang akan memakai dan apa yang ingin mereka selesaikan.</p></div><span className="process-icon" aria-hidden="true">↗</span></article>
          <article className="process-item reveal"><span className="process-num">02</span><div><h3>Urutkan langkahnya.</h3><p>Sebelum bermain dengan warna, saya cek apakah orang bisa mengikuti alurnya tanpa perlu menebak.</p></div><span className="process-icon" aria-hidden="true">↗</span></article>
          <article className="process-item reveal"><span className="process-num">03</span><div><h3>Buat yang bisa dicoba.</h3><p>Prototipe yang bisa diklik sering menunjukkan masalah yang tidak terlihat di gambar diam.</p></div><span className="process-icon" aria-hidden="true">↗</span></article>
          <article className="process-item reveal"><span className="process-num">04</span><div><h3>Balik dan rapikan.</h3><p>Kalau satu langkah terasa janggal, saya kembali ke alurnya dan mencoba lagi.</p></div><span className="process-icon" aria-hidden="true">↗</span></article>
        </div>
      </section>

      <section className="skills section-pad" aria-labelledby="skills-title">
        <div className="section-index reveal"><span>03 / BEKAL</span><span>YANG DIKERJAKAN DAN YANG SEDANG DIPELAJARI</span></div>
        <div className="skills-layout reveal"><h2 id="skills-title">Yang saya pakai.<br /><em>Yang saya pelajari.</em></h2><div className="skills-groups"><div><h3>Di pekerjaan</h3><div className="skill-tags" aria-label="Bidang kerja"><span>UI/UX Design</span><span>User Flow</span><span>Prototyping</span></div></div><div><h3>Sedang dipelajari</h3><div className="skill-tags" aria-label="Bidang yang sedang dipelajari"><span>Front-end</span><span>Konsumsi API</span><span>Vibe Coding</span><span>Claude</span><span>ChatGPT</span><span>z.ai</span></div></div></div></div>
        <p className="skills-note reveal">Saya akan memperbarui bagian ini seiring proyek-proyeknya bertambah.</p>
      </section>

      <section className="work section-pad" id="karya" aria-labelledby="work-title">
        <div className="section-index reveal"><span>04 / PROYEK</span><span>MULAI DARI WEBSITE INI</span></div>
        <div className="work-head reveal"><h2 id="work-title">Proyek <em>pertama di sini.</em></h2><p>Website profil ini jadi tempat saya mengumpulkan karya berikutnya. Kodenya bisa dilihat langsung di GitHub.</p></div>
        <a className="work-card reveal" href="https://github.com/Darkzzhelll/darkzzhelll.github.io" target="_blank" rel="noopener noreferrer" aria-label="Lihat kode website profil Ryan di GitHub, terbuka di tab baru">
          <span className="work-card-top"><span>01 / WEBSITE PRIBADI</span><span>↗</span></span>
          <span className="work-card-center"><span className="work-monogram" aria-hidden="true">RS<span>.</span></span><strong>Website<br />profil ini.</strong></span>
          <span className="work-card-bottom"><span>Lihat kode di GitHub</span><span>NEXT.JS · TAILWIND CSS · GITHUB PAGES</span></span>
        </a>
      </section>

      <section className="contact section-pad" id="kontak" aria-labelledby="contact-title">
        <div className="section-index reveal"><span>KONTAK</span><span>PILIH TEMPAT YANG PALING NYAMAN</span></div>
        <h2 className="reveal" id="contact-title">Mau ngobrol?<br /><em>Hubungi saya.</em></h2>
        <div className="contact-bottom reveal"><p>Soal desain, proyek web, atau kesempatan kerja—pesan saya lewat salah satu tautan ini.</p><div className="contact-links" aria-label="Media sosial dan kontak Ryan"><a href="https://wa.me/6281333962166" target="_blank" rel="noopener noreferrer" aria-label="Hubungi Ryan lewat WhatsApp, terbuka di tab baru"><span>WhatsApp<small>0813 3396 2166</small></span><span aria-hidden="true">↗</span></a><a href="https://www.linkedin.com/in/ryan-sutawijaya-a84758236/" target="_blank" rel="noopener noreferrer"><span>LinkedIn</span><span aria-hidden="true">↗</span></a><a href="https://www.instagram.com/ryansutawijaya/" target="_blank" rel="noopener noreferrer"><span>Instagram</span><span aria-hidden="true">↗</span></a><a href="https://dribbble.com/Darkzzhelll" target="_blank" rel="noopener noreferrer"><span>Dribbble</span><span aria-hidden="true">↗</span></a><a href="https://github.com/Darkzzhelll" target="_blank" rel="noopener noreferrer"><span>GitHub</span><span aria-hidden="true">↗</span></a></div></div>
      </section>
    </main>

    <footer><span>© <span id="year">2026</span> RYAN SUTAWIJAYA</span><span>WEBSITE PRIBADI RYAN</span><a href="#beranda">KEMBALI KE ATAS ↑</a></footer>
  
      <Script src="/script.js" strategy="afterInteractive" />
    </>
  );
}
