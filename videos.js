/**
 * ════════════════════════════════════════════════════════════
 *  VIDEOS.JS — DEIN PORTFOLIO VERWALTEN
 * ════════════════════════════════════════════════════════════
 *
 *  So fügst du ein neues Video hinzu (3 Schritte):
 *
 *  1. Lade dein Video auf YouTube oder Vimeo hoch.
 *
 *  2. Kopiere die Video-ID:
 *     YouTube:  https://www.youtube.com/watch?v=  [DIESE_ID]
 *     Vimeo:    https://vimeo.com/               [DIESE_ID]
 *
 *  3. Füge hier unten einen neuen Eintrag ein:
 *     {
 *       title:    "Dein Videotitel",
 *       client:   "Teamname · Liga",
 *       platform: "youtube"  ODER  "vimeo",
 *       id:       "deine-video-id",
 *       thumb:    ""  ← leer lassen für Auto-Thumbnail (nur YouTube)
 *                     ← oder eigene Bild-URL eintragen
 *     },
 *
 * ════════════════════════════════════════════════════════════
 */

const VIDEOS = [
  {
    title:    "Helvetic Mercenaries — Season Highlights 2024",
    client:   "Helvetic Mercenaries · ELF",
    platform: "youtube",
    id:       "dQw4w9WgXcQ",   // ← Platzhalter: durch echte YouTube-ID ersetzen
    thumb:    ""
  },
  {
    title:    "Razorbacks Season Reel 2024",
    client:   "IFM Ravensburg Razorbacks · GFL",
    platform: "youtube",
    id:       "dQw4w9WgXcQ",
    thumb:    ""
  },
  {
    title:    "VfB Friedrichshafen — Bundesliga Match Day",
    client:   "VfB Friedrichshafen · Volleyball-Bundesliga",
    platform: "youtube",
    id:       "dQw4w9WgXcQ",
    thumb:    ""
  },
  {
    title:    "SC Samina Hohenems — Playoff Highlights",
    client:   "SC Samina Hohenems · ÖEL",
    platform: "youtube",
    id:       "dQw4w9WgXcQ",
    thumb:    ""
  },
  {
    title:    "OSC Tiger — Promo Film",
    client:   "OSC Tiger",
    platform: "youtube",
    id:       "dQw4w9WgXcQ",
    thumb:    ""
  },
  {
    title:    "Showreel 2024 — Sport &amp; Action",
    client:   "Jonathan Klein",
    platform: "youtube",
    id:       "dQw4w9WgXcQ",
    thumb:    ""
  },
];
