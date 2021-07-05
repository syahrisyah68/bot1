exports.wait = () => {
	return`*「 WAIT 」 SEDANG PROSES*`
}

exports.succes = () => {
	return`*「 SUCCES 」*`
}

exports.lvlon = () => {
	return`*「 ENABLE 」 LEVELING*`
}

exports.lvloff = () => {
	return`*「 DISABLE 」 LEVELING*`
}

exports.lvlnul = () => {
	return`*LEVELMU MASIH KOSONG*`
}

exports.lvlnoon = () => {
	return`*LEVEL DI GRUB BELUM DI AKTIFKAN*`
}

exports.noregis = () => {
	return`*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar affis|17*`
}

exports.rediregis = () => {
	return`*「 SUDAH DAFTAR 」*\n\n*kamu sudah terdaftar di database bot*`
}

exports.stikga = () => {
	return`*yah gagal coba ulangi beberapa saat lagi*`
}

exports.linkga = () => {
	return`*maaf link tidak valid*`
}

exports.groupo = () => {
	return`*「GROUP ONLY」*`
}

exports.ownerb = () => {
	return`*「OWNER BOT ONLY」*`
}

exports.ownerg = () => {
	return`*「OWNER GROUP ONLY」*`
}

exports.admin = () => {
	return`*「ADMIN GROUP ONLY」*`
}

exports.badmin = () => {
	return`*「BOT HARUS JADI ADMIN」*`
}

exports.nsfwoff = () => {
	return`*NSFW GAK AKTIF*`
}

exports.bug = () => {
	return`*Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi*`
}

exports.wrongf = () => {
	return`*format salah/text kosong*`
}

exports.clears = () => {
	return`*clear all Success*`
}

exports.pc = () => {
	return`*「 REGISTRASI 」*\n\nuntuk mengetahui apa kamu sudah terdaftar silahkah check message yang saya kirim \n\nNOTE:\n*jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`╭━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙\n│ *「 PENDAFTARAN USER 」*\n│\n│ *Terima kasih Telah Mendaftarkan*\n│ *Diri Anda Ke Dalam*\n│ *Database Ꮖᔑしᗩᗰ-ᏴϴͲ*\n│\n│ *Nama : ${namaUser}*\n│ *APi : wa.me/${sender.split("@")[0]}*\n│ *Umur : ${umurUser}*\n│ *Waktu Registrasi : ${time}*\n│ *SN : ${serialUser}*\n│ *Status : Terverifikasi*\n│\n│\n│ *Jangan Sampai Lupa Nomer Ini*\n│ *Suatu Saat Bakalan Berguna*\n│ *Tunggu Update BOT Versi Terbaru.*\n│\n│ *☑ Silahkan Ketik ${prefix}rules*\n│ *Untuk Melanjutkan Pengguna*\n╰━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙\n\n *「 Ꮖᔑしᗩᗰ-ᏴϴͲ V1 」*`
}

exports.cmdnf = (prefix, command) => {
	return`command *${prefix}${command}* tidak di temukan\coba tulis *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*maaf tapi ${pushname} bukan owner script*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⎆level mu : ${getLevelingLevel(sender)}*\n*┣⎆jenis command : ${command}*\n*┗⎆syarat level : ${aha}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⎆level mu : ${getLevelingLevel(sender)}*\n*┣⎆jenis command : ${command}*\n*┗⎆syarat level : ${ahb}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⎆level mu : ${getLevelingLevel(sender)}*\n*┣⎆jenis command : ${command}*\n*┗⎆syarat level : ${ahc}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⎆level mu : ${getLevelingLevel(sender)}*\n*┣⎆jenis command : ${command}*\n*┗⎆syarat level : ${ahd}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⎆level mu : ${getLevelingLevel(sender)}*\n*┣⎆jenis command : ${command}*\n*┗⎆syarat level : ${ahe}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⎆level mu : ${getLevelingLevel(sender)}*\n*┣⎆jenis command : ${command}*\n*┗⎆syarat level : ${ahf}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role, time, premi) => { 
	return `
*❦═─⌬〘 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐒𝐈 𝐁𝐎𝐓 〙⊰══*
*║*
*║✘➳ HTTP://Ꮖᔑしᗩᗰ-ᏴϴͲ.COM*
*║✘➳ Version : v1. 00.0*
*║✘➳ Type : Baileys*
*║*
*╚─┈─┈─┈─┈─┈─┈─┈─┈─┈ ❋ཻུ۪۪⸙͎*

*┌─────────────────═⌬*
*│*
*├──❭〘 DATA ANDA 〙❬───*
*│*
*│⊢⊸⊰ Hallo : ${pushname}*
*│⊢⊸⊰ Waktu : ${time}*
*│⊢⊸⊰ Premium : ${premi}*
*│⊢⊸⊰ API : wa.me/${sender.split("@")[0]}*
*│⊢⊸⊰ Xp : ${getLevelingXp(sender)}*
*│⊢⊸⊰ Level : ${getLevelingLevel(sender)}*
*│⊢⊸⊰ Rank : ${role}*
*│⊢⊸⊰ Uangmu : Rp${uangku}*
*│⊢⊸⊰ Total Pengguna : ${_registered.length}*
*│⊢⊸⊰ Prefix : 「  ${prefix}  」*
*│⊢⊸⊰ Registered : ✔️*
*│*
*├──❭〘 DATA ANDA 〙❬───*
*│*
*│*
*├──────「 TAMBAH KENAGAN 」*
*│*
*│⧿≻. ${prefix}addvn <reply>*
*│⧿≻. ${prefix}getvn <opsional>*
*│⧿≻. ${prefix}listvn*
*│⧿≻. ${prefix}addimage <reply>*
*│⧿≻. ${prefix}getimage <opsional>*
*│⧿≻. ${prefix}listimage*
*│⧿≻. ${prefix}addvideo <reply>*
*│⧿≻. ${prefix}getvideo <opsional>*
*│⧿≻. ${prefix}listvideo*
*│⧿≻. ${prefix}addsticker <reply>*
*│⧿≻. ${prefix}getsticker <opsional>*
*│⧿≻. ${prefix}liststicker*
*│*
*├──────「 AKSESBILITAS BOT 」*
*│*
*│⧿≻. ${prefix}public <aktif/nonaktif>*
*│⧿≻. ${prefix}leveling <enable/disable>*
*│⧿≻. ${prefix}nobadword <enable/disable>*
*│⧿≻. ${prefix}event <1/0>*
*│⧿≻. ${prefix}antilink <1/0>*
*│⧿≻. ${prefix}antivirtex <1/0>*
*│⧿≻. ${prefix}Welcome <1/0*
*│*
*├──────「 LIMIT × UANG 」*
*│*
*│⧿≻. ${prefix}giftlimit*
*│⧿≻. ${prefix}resetlimit*
*│⧿≻. ${prefix}limit*
*│⧿≻. ${prefix}setlimit <opsional>*
*│⧿≻. ${prefix}setmemlimit <opsional>*
*│⧿≻. ${prefix}transfer <jumlah|tag>*
*│⧿≻. ${prefix}level*
*│⧿≻. ${prefix}dompet*
*│⧿≻. ${prefix}leaderboard*
*│*
*├──────「 MENYENANGKAN 」*
*│*
*│⧿≻. ${prefix}apakah <opsional>*
*│⧿≻. ${prefix}kapankah <opsional>*
*│⧿≻. ${prefix}bisakah <opsional>*
*│⧿≻. ${prefix}watak <opsional>*
*│⧿≻. ${prefix}hobby <opsional>*
*│⧿≻. ${prefix}nilai <opsional>*
*│⧿≻. ${prefix}gantengcek*
*│⧿≻. ${prefix}cantikcek*
*│⧿≻. ${prefix}dadu*
*│*
*├──────「 GAME EXCITING 」*
*│*
*│⧿≻. ${prefix}tebakgambar*
*│⧿≻. ${prefix}caklontong*
*│⧿≻. ${prefix}Family100*
*│*
*├──────「 ISLAM MENU 」*
*│*
*│⧿≻. ${prefix}murrotal*
*│⧿≻. ${prefix}listsurah*
*│⧿≻. ${prefix}jadwalsholat <daerah>*
*│*
*├──────「 MEDIA MENU 」*
*│*
*│⧿≻. ${prefix}stiker <reply gambar>*
*│⧿≻. ${prefix}stikergif <reply video min 9d>*
*│⧿≻. ${prefix}tahta <nama>*
*│⧿≻. ${prefix}blackpink <nama>*
*│⧿≻. ${prefix}drawing <reply gambar>*
*│⧿≻. ${prefix}igstalk <username>*
*│⧿≻. ${prefix}instaimg*
*│⧿≻. ${prefix}tts <kode bahasa|opsional>*
*│*
*├──────「 UNTUK UMUM 」*
*│*
*│⧿≻. ${prefix}reqwest fitur <opsional>*
*│⧿≻. ${prefix}laporbug <opsional>*
*│⧿≻. ${prefix}owner*
*│⧿≻. ${prefix}donasi*
*│⧿≻. ${prefix}info*
*│⧿≻. ${prefix}listonline*
*│⧿≻. ${prefix}kodebahasa*
*│⧿≻. ${prefix}kodenegara*
*│⧿≻. ${prefix}tnc*
*│⧿≻. ${prefix}happymod <opsional>*
*│*
*├──────「 FITUR ADMIN GC 」*
*│*
*│⧿≻. ${prefix}linkgc*
*│⧿≻. ${prefix}grup <buka/tutup>*
*│⧿≻. ${prefix}tutuptime*
*│⧿≻. ${prefix}kick <tag>*
*│⧿≻. ${prefix}delete <reply>*
*│⧿≻. ${prefix}notif <opsional>*
*│⧿≻. ${prefix}promote <tag>*
*│⧿≻. ${prefix}demote <tag>*
*│⧿≻. ${prefix}add <nomor>*
*│⧿≻. ${prefix}tagall*
*│⧿≻. ${prefix}infogc*
*│*
*├──────「 OWNER 」*
*│*
*│⧿≻. ${prefix}kicktime <tag>*
*│⧿≻. ${prefix}addprem <tag>*
*│⧿≻. ${prefix}listprem <tag>*
*│⧿≻. ${prefix}delprem <tag>*
*│⧿≻. ${prefix}ban <tag>*
*│⧿≻. ${prefix}unban <tag>*
*│⧿≻. ${prefix}banlist*
*│⧿≻. ${prefix}addbadword <opsional>*
*│⧿≻. ${prefix}listbadword*
*│⧿≻. ${prefix}delbadword <opsional>*
*│⧿≻. ${prefix}virtex*
*│⧿≻. ${prefix}bc <opsional>*
*│⧿≻. ${prefix}clearall <tag>*
*│*
*└─────────────────┈ ❋ཻུ۪۪⸙͎*



║▌│█║▌│ █║▌│█│║▌║
║▌│█║▌│ █║▌│█│║▌║
   
*©Arifi Razzaq OFFICIAL*

*Jangan lupa kalian subscribe Channel Youtube : Arifi Razzaq OFFICIAL*

*「 💸 」Yuk Berdonasi Untuk Tabungan Di Akhirat Kelak...*
*Link donasi :* https://www.saweria.co/arifirazzaq
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
	return`
*「 SELAMAT 」*
ཻུ⧿➤ *Nama* : ${pushname}
ཻུ⧿➤ *Nomer* : wa.me/${sender.split("@")[0]}
ཻུ⧿➤ *Xp* : ${getLevelingXp(sender)}
ཻུ⧿➤ *Limit* = +3
ཻུ⧿➤ *Rank* : ${role}
ཻུ⧿➤ *Tingkat*: ${bars}
ཻུ⧿➤ *Level* : ${getLevel} ⎆ ${getLevelingLevel(sender)}
`}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT COUNT 」*
sisa limit anda : ${limitCounts}

NOTE : untuk mendapatkan limit. bisa lewat naik level atau buylimit`
}

exports.satukos = () => {
	return`*Tambah parameter 1/enable atau 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*┏⎆ 「 ATM 」⊰━┓*\n┣⎆ *Nama* : ${pushname}\n┣⎆ *Nomer* : ${sender.split("@")[0]}\n┣⎆ *Uang* : ${uangkau}\n┗━━━━━━━━━━`
}

exports.premadd = (pnom) => {
	return`*「 PREMIUM ADD 」*

*Name* : ${pnom}
*Expired* : 30 DAY\n*thank for order premium*`
}

exports.dellprem = (hnom) => {
	return`*「 PREMIUM DELETE 」*

*Name* : ${hnom}
*Expired* : NOW:v\n*thank for order premium back soon for buying again:D*`
}

exports.premon = (pushname) => {
	return`MAAF ${pushname} ANDA BUKAN USER PREMIUM`
}
