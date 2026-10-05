"use client";

import { useEffect, useRef, useState } from "react";
import GalleryVisual from "./GalleryVisual";

export default function InkGallery({ items, scattered = false, label }) {
  const [selected, setSelected] = useState(null);
  const closeRef = useRef(null);
  const lastTrigger = useRef(null);
  const item = selected === null ? null : items[selected];

  function close() {
    setSelected(null);
    requestAnimationFrame(() => lastTrigger.current?.focus());
  }

  useEffect(() => {
    if (selected === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    function onKeyDown(event) {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") setSelected((current) => (current + 1) % items.length);
      if (event.key === "ArrowLeft") setSelected((current) => (current - 1 + items.length) % items.length);
      if (event.key === "Tab") {
        const focusable = [...document.querySelectorAll(".gallery-dialog button, .gallery-dialog a")];
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => { document.body.style.overflow = previousOverflow; document.removeEventListener("keydown", onKeyDown); };
  }, [selected, items.length]);

  return <>
    <div className={`ink-gallery${scattered ? " ink-gallery-scattered" : " ink-gallery-project"}`} role="group" aria-label={label}>
      {items.map((entry, index) => <button className="gallery-card" type="button" key={entry.id} onClick={(event) => { lastTrigger.current = event.currentTarget; setSelected(index); }} aria-label={`Buka ${entry.title}: ${entry.kind}`} aria-haspopup="dialog">
        <span className="gallery-card-media"><GalleryVisual type={entry.visual} /></span>
        <span className="gallery-card-info"><span className="gallery-card-number">{String(index + 1).padStart(2, "0")}</span><span className="gallery-card-title">{entry.title}<small>{entry.kind}{entry.project ? ` / ${entry.project}` : ""}</small></span><span aria-hidden="true">↗</span></span>
      </button>)}
    </div>
    {item && <div className="gallery-lightbox" onMouseDown={(event) => { if (event.target === event.currentTarget) close(); }}>
      <div className="gallery-dialog" role="dialog" aria-modal="true" aria-labelledby="gallery-dialog-title" aria-describedby="gallery-dialog-caption">
        <div className="gallery-dialog-top"><span>{String(selected + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")} · {item.kind}</span><button type="button" ref={closeRef} onClick={close} aria-label="Tutup galeri">Tutup <span aria-hidden="true">×</span></button></div>
        <div className="gallery-dialog-media"><GalleryVisual type={item.visual} /></div>
        <div className="gallery-dialog-bottom"><div><h2 id="gallery-dialog-title">{item.title}</h2><p id="gallery-dialog-caption">{item.caption}</p>{item.slug && <a href={`/proyek/${item.slug}/#galeri`}>Baca cerita proyek <span aria-hidden="true">↗</span></a>}</div><div className="gallery-dialog-arrows"><button type="button" aria-label="Gambar sebelumnya" onClick={() => setSelected((selected - 1 + items.length) % items.length)}>←</button><button type="button" aria-label="Gambar berikutnya" onClick={() => setSelected((selected + 1) % items.length)}>→</button></div></div>
      </div>
    </div>}
  </>;
}
