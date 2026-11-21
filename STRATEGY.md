# STRATEGY — gta6-clipper-01 slot 2: "Pure Action" (v10, Extended Look + Trailer 2)

## Momen yang dipilih

**"GTA VI: An Extended Look" (Rockstar Games, 26:48, `work/extended-look.mp4`)
+ satu shot dari Trailer 2 (`work/trailer2.mp4`).** Pembuka ranjang dari
Trailer 2, lalu empat beat aksi kontinu dari Extended Look — semuanya
terverifikasi frame-demi-frame:

| Beat | Sumber (trim) | Durasi | Isi |
|---|---|---|---|
| Ranjang Lucia & Jason | Trailer 2, 77,9–79,3, slow-mo 0,5× | 2,8 dtk | Lucia & Jason di ranjang, pencahayaan biru gelap (pembuka) |
| Street shootout | EL 842–852,5 | 10,5 dtk | Baku tembak jalanan, helikopter polisi, mobil polisi ditembaki, satu mobil terbalik di udara |
| Chase + drive-by | EL 928–938 | 10,0 dtk | Kejar-kejaran mobil lewat gang + drive-by (dua orang menembak dari jendela) |
| Base jump + parasut | EL 1127–1136 | 9,0 dtk | Ledakan malam → lompat dari rooftop → terjun bebas → parasut oranye di atas kota |
| Burning car | EL 964,5–969 | 4,5 dtk | Mobil meledak & terbakar di garasi parkir (finale api) |

**Total: ranjang 2,8 + aksi 34,0 detik + end card 2,8 detik = 39,6 detik.**
Tiap beat aksi 5–10 detik dan utuh (persis yang user minta sejak awal —
baru mungkin dari Extended Look, karena shot Trailer 2 cuma 2–4 detik).

## Kenapa momen ini

1. **Pembuka ranjang — permintaan eksplisit user.** User (21 Nov 11:22 WIB):
   "sebenarnya ini sudah sangat keren beb. cuman durasi terlalu pendek,
   apalagi scene yang di ranjang itu hee". Scene ranjang itu ada di v6
   (clip t≈2,5–4,0 dtk, terselip di segmen heist shootout Trailer 2) dan
   user suka. Shot lengkapnya di Trailer 2 cuma ~1,5 dtk, jadi dipakai
   slow-motion 0,5× (2,8 dtk) sebagai pembuka — tenang, biru gelap,
   kontras dramatis sebelum aksi meledak. Extended Look TIDAK punya momen
   setara (kamar pink-nya Lucia sendirian). Tetap tasteful seperti trailer
   aslinya.
2. **Aksi saja setelah pembuka, tanpa dialog.** Extended Look penuh adegan
   lambat (jalan kaki, dialog apartemen, pesta, TV). Semua itu dibuang —
   setelah ranjang, klip ini 100% aksi sampai end card.
3. **Tanpa teks di scene aksi/momen.** Semua sudut HUD di-crop habis
   (center-crop 608×1080 → 1080×1920): minimap, health bar, ammo, wanted
   stars HILANG. Segmen yang mengandung teks terbaca sengaja dihindari:
   "POLICE" di pintu mobil polisi (t≈853), rambu "HOBBY" (t≈921), rambu
   "ROAD CLOSED" (t≈927), pesan teks Lucia (t≈1425), "FLOOR 26" (t≈1473),
   prompt kontrol (t≈267, t≈1502), frame glitch/blur transisi parasut
   (t≈1137). Crosshair (lingkaran kecil di tengah saat membidik) masih
   terlihat di beberapa frame shootout — itu simbol gameplay, bukan teks.
   Shot grapple/sandera di Trailer 2 (t≈77,5) sengaja TIDAK dipakai —
   trim ranjang dimulai 77,9 supaya frame pertama klip langsung ranjang.
4. **Hook: tenang → meledak.** Detik pertama ranjang biru yang intim, lalu
   potong keras ke helikopter + mobil polisi ditembaki. Kontras ini yang
   bikin penonton berhenti scroll.
5. **Arc: ranjang → tembak → kejar → terbang → meledak.** Momen personal,
   lalu empat beat aksi naik: baku tembak jalanan, kejar-kejaran, lompat
   parasut (visual paling indah), lalu mobil terbakar sebagai finale
   sebelum end card.
6. **Shot kontinu 5–10 detik.** Tidak seperti Trailer 2, tiap beat aksi di
   sini adalah satu take gameplay yang utuh — mobil tidak "melompat" antar
   shot.

## Keputusan kreatif

- **Ranjang slow-motion 0,5× sebagai pembuka.** Shot sumber 1,4 dtk
  (77,9–79,3) jadi 2,8 dtk lewat `setpts=(PTS-STARTPTS)*2` — dreamy dan
  lingering, 2,4× lebih lama dari yang user lihat di v6 (1,5 dtk).
  Center-crop 608×864 (x=656, y=108, buang bar hitam letterbox) supaya
  konsisten dengan segmen EL (full-bleed, tanpa blur bar).
- **Center-crop, bukan blur-fill (segmen EL).** Footage gameplay 1920×1080
  penuh HUD di sudut — blur-fill akan menampilkan minimap/ammo/teks.
  Center-crop 608×1080 (x=656; x=750 untuk burning car supaya api di
  tengah) membuang semua sudut HUD. Aksi selalu di tengah frame, jadi
  tidak ada yang penting terpotong.
- **Voiceover panjang (35,9 dtk), bukan teks di scene.** Pitch make.fun
  disampaikan lewat voiceover Inggris (Google TTS, 4 chunk digabung, sama
  seperti v9 — teks TIDAK diubah, cuma di-delay 3,0 dtk supaya mulai pas
  aksi dimulai): "GTA Six is coming, and the action is absolutely insane.
  Street shootouts. Police chases through the alleys of Vice City. Base
  jumps off skyscrapers, parachuting over the whole city. And cars
  exploding in flames. But here's the thing. You don't need a console to
  make clips like this. I made this entire video with AI. And you can earn
  real money doing the exact same thing on make.fun. The best clips win
  five hundred dollars. So what are you waiting for? Link in the
  description." Mulai detik 3,0, berakhir detik 38,9 (0,7 dtk sebelum klip
  selesai). Audio game asli di bawahnya pada 0,2×; bed audio Trailer 2
  (di-slow 0,5×) di 0–2,8 dtk pada 0,2× — hening/dreamy.
- **End card tepat 2,8 detik** (36,8–39,6), dipakai ulang dari v6: hitam +
  teks putih/emas (pitch + URL bounty + play code
  `makefun-rutabaga-shadow-fossil`).
- **Riwayat rebuild.** v7 (47,8 dtk): ada teks "POLICE", rambu
  "HOBBY"/"ROAD CLOSED", frame glitch parasut, opening burning car yang
  gelap. v8 (38,8 dtk): semua teks dibuang, tapi masih ada blur lembut 1
  detik di ekor parasut. v9 (36,8 dtk): ekor parasut dipotong di 1136,
  klip final bersih. v10 (40,4 dtk): ranjang ditambah, tapi trim 77,5–79,3
  bocor 0,5 dtk shot grapple merah di frame pertama — DIBUANG. v10b
  (39,6 dtk): trim ranjang digeser ke 77,9–79,3, terverifikasi bersih —
  ini klip final. Tiap versi diverifikasi dengan cek 2fps + frame full-res
  di titik rawan.

## Judul & deskripsi

Lihat `UPLOAD.txt` (di `slot2/`). Judul: "GTA VI PURE ACTION — Lucia &
Jason, Street Shootout, Police Chase & Base Jump!". Deskripsi memuat baris
wajib bounty kata-per-kata + play code `makefun-rutabaga-shadow-fossil` +
tagar #GTA6 #GTAVI #Shorts #ViceCity #Leonida.

## Verifikasi (klip final v10)

- `clip.mp4`: 1080×1920, 30 fps, H.264 + AAC, **39,6 detik** (<60 detik =
  Short), 33.453.403 byte, sha256
  `67656f1a4b1803548c21628b654d154e7cd791187aae17db6081edd2d8050106`.
- Video stream tepat 39,600000 dtk; ranjang 2,8 + aksi 34,0 dtk + end card
  tepat 2,8 dtk.
- Cek 2fps seluruh klip (79 frame, 9 sheet di `work/slot2/v10check/`):
  ranjang ✓ (frame pertama biru, tanpa grapple merah, tanpa teks),
  shootout ✓ (tanpa "POLICE"), chase ✓ (tanpa "HOBBY"/"ROAD CLOSED"),
  parasut ✓ (tajam sampai akhir, tanpa blur/glitch), burning car ✓,
  end card ✓. Tidak ada HUD (minimap/health/ammo/stars) di frame mana pun.
- Audio: bed hening 0–2,8 dtk (mean −29,3 dB); voiceover hadir 3,0–38,9
  dtk (segmen aksi mean −21,9/−22,2 dB, jelas); mix final mean −21,8 dB /
  max −4,6 dB, tanpa clipping; ekor end card (38–39,6 dtk) mean −30,3 dB.
- `main.ts` grader-sim (v9): `mkdir -p out && MAKEFUN_BOT_DIR=.
  MAKEFUN_OUTPUT_DIR=out node main.ts` → `out/VIDEO.json` tersalin
  (placeholder `REPLACE_ME`, diisi setelah upload). main.ts TIDAK diubah
  untuk v10 (hanya file klip yang diganti).
- Sumber footage: `work/extended-look.mp4` (492.930.086 byte, 1608,15 dtk,
  1920×1080, H.264+AAC) + `work/trailer2.mp4` (shot ranjang). Klip jadi
  buatan orang lain TIDAK dipakai. Segmen slot 1 TIDAK dipakai.
  v9 tersimpan sebagai `work/slot2/clip-v9.mp4`; v6 tersimpan sebagai
  `work/slot2/clip-v6.mp4`.
- Pelajaran teknis: `-ss` sebelum `-i` (fast seek) meleset ~1 detik di file
  H.264 ini juga — semua potongan memakai filter `trim` (akurat) dan
  diverifikasi dari klip hasil render, bukan dari sumber. **Trailer 2
  (AV1) lebih parah: trim yang sama bisa bergeser per render** — trim
  ranjang 77,5 di strip survei = ranjang, tapi di render = grapple; harus
  geser ke 77,9 dan verifikasi dari render. Concat butuh `setsar=1` di
  semua cabang (end card punya SAR 1216:1215).

## Penilaian jujur peluang

RENDAH–SEDANG. Metric-nya views nyata di YouTube — lotre distribusi, tidak
bisa di-grind seperti kode. Slot 1 ("Bike vs Plane") di #156–#159 dengan
1.122 views (garis top 20 di ~1.384, top 100 di ~1.200). Klip ini JAUH lebih
kuat dari slot 1 dan dari v6: 39,6 detik (vs 13,6), pembuka ranjang yang
user sendiri minta (momen personal Lucia & Jason — bisa menahan penonton
lebih lama dari aksi murni), empat beat aksi kontinu 5–10 detik (vs
potongan 0,6–4,6 detik), dan momen paling epik (parasut + mobil terbakar)
— peluangnya lebih baik dari slot 1, tapi top 20 tetap butuh keberuntungan
algoritma Shorts. Harapan realistis: tembakan kedua yang mungkin menambah
beberapa ratus views; top 20 butuh Shorts-nya keangkat. Risiko: klaim
Content ID atas footage Rockstar tetap mungkin walau bounty secara eksplisit
meminta klip dari footage GTA 6.

## Serah-terima

Klip + judul + deskripsi di atas **SIAP DI-UPLOAD** dan diserahkan ke parent
(user) untuk di-upload ke channel YouTube-nya sebagai video Public — sesuai
kit: "upload it or hand it to the person to upload". Saya TIDAK meng-upload
ke YouTube, TIDAK push ke GitHub, TIDAK submit. Setelah upload, parent
mengisi URL Shorts ke `entry/VIDEO.json`, lalu repo + submit.
