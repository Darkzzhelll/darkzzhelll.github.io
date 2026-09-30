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
        <div className="hero-topline"><span>PORTOFOLIO / 2026</span><span>UI/UX DESIGNER · TERUS BEREKSPERIMEN</span></div>
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow"><span className="live-dot"></span> Halo, saya Ryan</span>
            <h1 id="hero-title">Mendesain<br /><em>rasa.</em><br />Membangun<br />kemungkinan<span className="period">.</span></h1>
            <p>Berangkat dari UI/UX, lalu belajar membawa ide lebih jauh lewat front-end, API, dan bantuan AI. Saya tertarik pada pengalaman yang punya arah, karakter, dan alasan.</p>
            <div className="hero-actions">
              <a className="pill pill-dark" href="#cerita">Kenali ceritaku <span aria-hidden="true">↗</span></a>
              <a className="text-link" href="#karya">Lihat ruang karya <span aria-hidden="true">↓</span></a>
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
        <div className="hero-bottomline"><span>BERBASIS DI INDONESIA</span><a href="#cerita">GULIR UNTUK MEMULAI <span aria-hidden="true">↓</span></a><span>01 — 04</span></div>
      </section>

      <section className="intro section-pad reveal" id="cerita" aria-labelledby="intro-title">
        <div className="section-index"><span>01 / CERITA</span><span>SEDIKIT TENTANG SAYA</span></div>
        <div className="intro-layout">
          <div className="intro-symbol" aria-hidden="true"><span>人</span><small>MANUSIA<br />DI TENGAH DESAIN</small></div>
          <div>
            <h2 id="intro-title">Saya percaya, desain yang baik <em>dimulai dari memahami.</em></h2>
            <div className="intro-columns">
              <p>Saya Ryan, seorang UI/UX Designer yang sedang memperluas cara berkarya. Pekerjaan hari ini menantang saya untuk melihat lebih dari satu disiplin: dari alur pengguna dan tampilan, sampai bagaimana sebuah ide benar-benar bekerja di layar.</p>
              <p>Sekarang saya juga belajar vibe coding menggunakan Claude, ChatGPT, dan z.ai. Masih dalam proses—mulai dari front-end dan konsumsi API. Bagi saya, AI adalah alat untuk mencoba lebih cepat; keputusan tentang pengalaman tetap perlu dipikirkan dengan sengaja.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="statement" aria-label="Prinsip desain">
        <div className="statement-bg" aria-hidden="true"></div>
        <p className="statement-kicker">HAL YANG SAYA JAGA</p>
        <p className="statement-text">Bukan sekadar <span>terlihat keren.</span><br />Harus terasa <em>jelas</em> saat digunakan.</p>
        <span className="statement-mark" aria-hidden="true">✳</span>
      </section>

      <section className="process section-pad" id="cara-kerja" aria-labelledby="process-title">
        <div className="section-index reveal"><span>02 / CARA KERJA</span><span>DARI PERTANYAAN MENJADI PENGALAMAN</span></div>
        <div className="process-heading reveal"><h2 id="process-title">Belajar sambil <em>membuat.</em></h2><p>Ini cara saya mendekati sebuah ide, baik saat mendesain maupun saat mencoba membangunnya.</p></div>
        <div className="process-list">
          <article className="process-item reveal"><span className="process-num">01</span><div><h3>Pahami konteksnya.</h3><p>Siapa yang menggunakan? Apa yang ingin mereka selesaikan? Saya mulai dari pertanyaan agar alurnya punya tujuan.</p></div><span className="process-icon" aria-hidden="true">↗</span></article>
          <article className="process-item reveal"><span className="process-num">02</span><div><h3>Rancang dengan niat.</h3><p>Susun hierarki, interaksi, dan detail visual yang membantu orang memahami apa yang harus dilakukan berikutnya.</p></div><span className="process-icon" aria-hidden="true">↗</span></article>
          <article className="process-item reveal"><span className="process-num">03</span><div><h3>Uji lewat prototipe.</h3><p>Gunakan desain dan kode untuk merasakan idenya lebih awal, lalu perbaiki bagian yang belum bekerja.</p></div><span className="process-icon" aria-hidden="true">↗</span></article>
          <article className="process-item reveal"><span className="process-num">04</span><div><h3>Terus bertumbuh.</h3><p>Belajar front-end, API, dan alat AI sambil tetap bertanya: apakah pengalaman ini benar-benar masuk akal?</p></div><span className="process-icon" aria-hidden="true">↗</span></article>
        </div>
      </section>

      <section className="skills section-pad" aria-labelledby="skills-title">
        <div className="section-index reveal"><span>03 / RUANG BELAJAR</span><span>APA YANG SEDANG SAYA KERJAKAN</span></div>
        <div className="skills-layout reveal"><h2 id="skills-title">Di antara<br /><em>desain &amp; kode.</em></h2><div className="skill-tags" aria-label="Bidang kerja dan pembelajaran"><span>UI/UX Design</span><span>User Flow</span><span>Prototyping</span><span>Front-end</span><span>Integrasi API</span><span>Vibe Coding</span><span>Claude</span><span>ChatGPT</span><span>z.ai</span></div></div>
        <p className="skills-note reveal">Beberapa sudah menjadi bagian dari pekerjaan saya. Beberapa lainnya masih saya pelajari secara aktif.</p>
      </section>

      <section className="work section-pad" id="karya" aria-labelledby="work-title">
        <div className="section-index reveal"><span>04 / KARYA</span><span>SEBUAH RUANG YANG AKAN TERUS DIISI</span></div>
        <div className="work-head reveal"><h2 id="work-title">Proyek yang <em>bertumbuh.</em></h2><p>Saya akan menaruh studi desain dan eksperimen web di sini seiring proyek-proyeknya siap dibagikan.</p></div>
        <a className="work-card reveal" href="https://github.com/Darkzzhelll?tab=repositories" target="_blank" rel="noopener noreferrer" aria-label="Lihat repositori proyek Ryan di GitHub, terbuka di tab baru">
          <span className="work-card-top"><span>ARSIP TERBUKA / GITHUB</span><span>↗</span></span>
          <span className="work-card-center"><span className="work-star" aria-hidden="true">✳</span><strong>Karya berikutnya<br />sedang dibuat.</strong></span>
          <span className="work-card-bottom"><span>Jelajahi repositori saya</span><span>UI/UX · FRONT-END · EKSPERIMEN</span></span>
        </a>
      </section>

      <section className="contact section-pad" id="kontak" aria-labelledby="contact-title">
        <div className="section-index reveal"><span>MARI TERHUBUNG</span><span>LANJUTKAN PERCAKAPAN</span></div>
        <h2 className="reveal" id="contact-title">Punya ide yang<br /><em>menarik?</em></h2>
        <div className="contact-bottom reveal"><p>Saya senang bertukar pikiran tentang desain, pengalaman digital, dan hal-hal yang sedang dibangun.</p><a href="https://github.com/Darkzzhelll" target="_blank" rel="noopener noreferrer">Temukan saya di GitHub <span aria-hidden="true">↗</span></a></div>
      </section>
    </main>

    <footer><span>© <span id="year">2026</span> RYAN SUTAWIJAYA</span><span>DIBUAT DENGAN RASA INGIN TAHU.</span><a href="#beranda">KEMBALI KE ATAS ↑</a></footer>
  
      <Script src="/script.js" strategy="afterInteractive" />
    </>
  );
}
