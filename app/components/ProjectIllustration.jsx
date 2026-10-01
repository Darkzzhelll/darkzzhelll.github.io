export default function ProjectIllustration({ type }) {
  if (type === "river") {
    return <svg className="case-illustration" viewBox="0 0 1200 630" role="img" aria-label="Ilustrasi konseptual alur pemantauan sungai dari titik pengamatan menuju ringkasan informasi">
      <rect width="1200" height="630" fill="#172f32" />
      <path d="M-80 90C180 0 220 260 470 170S810 80 1280 170M-80 250C180 160 220 420 470 330S810 240 1280 330M-80 410C180 320 220 580 470 490S810 400 1280 490" fill="none" stroke="#75a9a6" strokeWidth="2" opacity=".24" />
      <path d="M-80 326C170 225 235 483 468 360S805 284 1280 407" fill="none" stroke="#d9e7dc" strokeWidth="100" opacity=".12" />
      <path d="M-80 326C170 225 235 483 468 360S805 284 1280 407" fill="none" stroke="#90d0c8" strokeWidth="3" strokeDasharray="12 12" />
      <g fill="#ebebe0" fontFamily="Arial, sans-serif"><text x="65" y="75" fontSize="20" letterSpacing="4">SUNGAI BRANTAS</text><text x="65" y="110" fontSize="13" letterSpacing="3" opacity=".65">ALUR PEMANTAUAN / ILUSTRASI KONSEP</text></g>
      <g fill="#e3eddf" stroke="#172f32" strokeWidth="7"><circle cx="200" cy="305" r="19"/><circle cx="540" cy="339" r="19"/><circle cx="915" cy="356" r="19"/></g>
      <g fill="#e9eee6" fontFamily="Arial, sans-serif" fontSize="18"><text x="152" y="265">Amati</text><text x="490" y="297">Catat</text><text x="865" y="315">Tinjau</text></g>
      <rect x="710" y="435" width="390" height="135" rx="8" fill="#e9eee6"/><rect x="735" y="460" width="105" height="10" rx="5" fill="#b9c6bc"/><rect x="735" y="490" width="260" height="14" rx="7" fill="#2a5c60"/><rect x="735" y="522" width="305" height="10" rx="5" fill="#b9c6bc"/>
    </svg>;
  }
  if (type === "workflow") {
    return <svg className="case-illustration" viewBox="0 0 1200 630" role="img" aria-label="Ilustrasi konseptual proses kerja dari kebutuhan menuju prototipe dan peninjauan">
      <rect width="1200" height="630" fill="#e4dfd3"/>
      <g fontFamily="Arial, sans-serif" fill="#242320"><text x="68" y="86" fontSize="20" letterSpacing="4">DARI IDE KE VERSI YANG BISA DICOBA</text><text x="68" y="119" fontSize="13" letterSpacing="3" opacity=".55">RANGKUMAN ALUR KERJA / ILUSTRASI KONSEP</text></g>
      <path d="M241 308H966" stroke="#b7afa0" strokeWidth="3" strokeDasharray="8 10"/>
      {[[68,"01","Kebutuhan",170],[415,"02","Prototipe",520],[760,"03","Tinjau",860]].map(([x,n,label,cx])=><g key={n}><rect x={x} y="225" width="270" height="235" rx="4" fill="#f5f1e8" stroke="#c4bcaf"/><circle cx={cx} cy="308" r="28" fill="#d64f34"/><text x={cx} y="315" textAnchor="middle" fill="#fff" fontFamily="Arial, sans-serif" fontSize="18">{n}</text><text x={x+24} y="387" fill="#242320" fontFamily="Arial, sans-serif" fontSize="29">{label}</text><rect x={x+24} y="409" width="155" height="9" rx="4" fill="#d0c9bc"/></g>)}
      <path d="M1060 273l46 35-46 35" fill="none" stroke="#d64f34" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>;
  }
  return <svg className="case-illustration" viewBox="0 0 1200 630" role="img" aria-label="Ilustrasi konseptual struktur website profil dengan halaman utama dan cerita proyek">
    <rect width="1200" height="630" fill="#252422"/>
    <g stroke="#aaa59b" fill="none"><rect x="90" y="96" width="658" height="437" rx="9"/><rect x="780" y="158" width="325" height="329" rx="9"/></g>
    <rect x="90" y="96" width="658" height="38" rx="9" fill="#d7d0c3"/><circle cx="114" cy="115" r="5" fill="#d64f34"/><circle cx="132" cy="115" r="5" fill="#aaa59b"/><circle cx="150" cy="115" r="5" fill="#aaa59b"/>
    <rect x="124" y="169" width="265" height="24" rx="4" fill="#eee9df"/><rect x="124" y="211" width="215" height="24" rx="4" fill="#eee9df"/><rect x="124" y="269" width="235" height="8" rx="4" fill="#8e8a81"/><rect x="124" y="288" width="210" height="8" rx="4" fill="#8e8a81"/><rect x="124" y="324" width="132" height="37" rx="18" fill="#d64f34"/><rect x="450" y="170" width="258" height="326" fill="#b3aba0"/>
    <rect x="805" y="193" width="178" height="17" rx="4" fill="#eee9df"/><rect x="805" y="229" width="235" height="7" rx="3" fill="#8e8a81"/><rect x="805" y="247" width="200" height="7" rx="3" fill="#8e8a81"/><rect x="805" y="296" width="272" height="147" fill="#d64f34"/>
    <path d="M747 333h39" stroke="#e3dfd5" strokeWidth="3" strokeDasharray="6 6"/><path d="M775 325l10 8-10 8" fill="none" stroke="#e3dfd5" strokeWidth="3"/>
    <g fill="#e3dfd5" fontFamily="Arial, sans-serif" fontSize="13" letterSpacing="2"><text x="90" y="569">HALAMAN UTAMA</text><text x="780" y="530">CERITA PROYEK</text></g>
  </svg>;
}
