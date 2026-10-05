export const projectGalleries = {
  "sungai-brantas": [
    { id: "brantas-alur", visual: "river", title: "Alur pemantauan", kind: "Ilustrasi konsep", caption: "Gambaran alur pemantauan sungai. Ini bukan tampilan aplikasi asli." },
    { id: "brantas-peran", visual: "river-roles", title: "Tiga peran dalam tim", kind: "Ilustrasi konsep", caption: "Ringkasan peran saya sebagai Scrum Master, UI/UX Designer, dan Front-end Developer; bukan dokumentasi layar produk." },
    { id: "brantas-catatan", visual: "river-notes", title: "Dari kebutuhan ke web", kind: "Ilustrasi konsep", caption: "Sketsa editorial tentang hubungan kebutuhan, desain, dan front-end dalam proyek tim ini." },
  ],
  "pekerjaan-risada": [
    { id: "risada-alur", visual: "workflow", title: "Alur kerja", kind: "Ilustrasi konsep", caption: "Gambaran umum alur kerja; bukan layar produk atau dokumen internal Risada." },
    { id: "risada-peran", visual: "workflow-roles", title: "Peran yang berganti", kind: "Ilustrasi konsep", caption: "Ringkasan jenis pekerjaan saya, dari desain dan koordinasi sampai konten serta vibe coding." },
    { id: "risada-ulangi", visual: "workflow-loop", title: "Coba, tinjau, perbaiki", kind: "Ilustrasi konsep", caption: "Sketsa siklus peninjauan. Belum ada materi produk internal yang ditampilkan di sini." },
  ],
  "website-profil": [
    { id: "profil-struktur", visual: "portfolio", title: "Struktur website", kind: "Ilustrasi konsep", caption: "Penyederhanaan struktur website profil dan halaman cerita proyek ini." },
    { id: "profil-potret", visual: "portrait", title: "Potret pada beranda", kind: "Aset website", caption: "Potret artistik Ryan yang dipakai pada bagian hero website ini." },
    { id: "profil-proses", visual: "portfolio-process", title: "Proses revisi", kind: "Ilustrasi konsep", caption: "Ringkasan proses memilih konten, mencoba interaksi, lalu merevisi website ini." },
  ],
};

export const homeGallery = [
  { ...projectGalleries["sungai-brantas"][0], project: "Pemantauan Sungai Brantas", slug: "sungai-brantas" },
  { ...projectGalleries["website-profil"][1], project: "Website profil ini", slug: "website-profil" },
  { ...projectGalleries["pekerjaan-risada"][1], project: "Beragam peran di Risada", slug: "pekerjaan-risada" },
  { ...projectGalleries["sungai-brantas"][1], project: "Pemantauan Sungai Brantas", slug: "sungai-brantas" },
  { ...projectGalleries["website-profil"][0], project: "Website profil ini", slug: "website-profil" },
  { ...projectGalleries["pekerjaan-risada"][2], project: "Beragam peran di Risada", slug: "pekerjaan-risada" },
];
