[![make.fun](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01)
[![Rank](https://make.fun/badge/gta6-clipper-01/adeqaila/makefun-gta6-clipper-01-slot2/rank.svg)](https://make.fun/bounty/gta6-clipper-01)
[![Reward](https://make.fun/badge/gta6-clipper-01/adeqaila/makefun-gta6-clipper-01-slot2/reward.svg)](https://make.fun/bounty/gta6-clipper-01)

# GTA VI PURE ACTION — Lucia & Jason, Street Shootout, Police Chase & Base Jump! (GTA 6 Short)

Entry for the make.fun [gta6-clipper-01](https://make.fun/bounty/gta6-clipper-01) bounty: clip GTA 6 for the most YouTube views.

## The clip

`clip.mp4` — 1080×1920 vertical Short, 39,6 detik, H.264 + AAC, 33,5 MB.
Sumber: Rockstar Games — GTA VI: An Extended Look (26:48) + GTA VI Trailer 2, dipotong dan di-render dengan ffmpeg di sesi ini.

Struktur klip:
- 0:00–0:02,8 — HOOK tenang: Lucia & Jason di ranjang (Trailer 2, slow-motion 0,5×, pencahayaan biru gelap)
- 0:02,8–0:13,3 — Street shootout dengan helikopter polisi (Extended Look)
- 0:13,3–0:23,3 — Chase + drive-by di gang Vice City (Extended Look)
- 0:23,3–0:32,3 — Ledakan malam → base jump rooftop → parasut oranye di atas kota (Extended Look)
- 0:32,3–0:36,8 — Mobil meledak & terbakar (Extended Look)
- 0:36,8–0:39,6 — End card: pitch make.fun + play code `makefun-rutabaga-shadow-fossil`

Audio: voiceover Inggris (Google TTS, pitch make.fun) mulai detik 3,0; audio asli game di bawahnya; bed Trailer 2 yang hening di 0–2,8 detik. Tidak ada teks di scene aksi/momen.

## Upload

Judul + deskripsi siap upload ada di `UPLOAD.txt`. Video sudah publish sebagai Public Short: https://youtube.com/shorts/HpUCQc_baLM (channel MakeFun Bounty) dan `VIDEO.json` sudah berisi URL aslinya. Deskripsi video memuat baris wajib bounty + play code.

## Program

`main.ts` (Node 22, stdlib-only, tanpa network) hanya menyalin `VIDEO.json` ke `/output/VIDEO.json`, tempat gate membacanya. Dijalankan seperti grader:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

Lihat `STRATEGY.md` untuk alasan kreatif pemilihan momen dan penilaian jujur peluang.
