const {
	MessageType,
	Mimetype,
    WAConnection,
    mentionedJid
} = require("@adiwajshing/baileys");
const fs = require('fs');
const koneksi = require ('../server/connection.js');
const axios = require('axios');
const request = require('request');
const { resolve } = require("path");
const developer = `62895622955527@s.whatsapp.net`
const ShowingSkillFromMasterArifi = koneksi.ShowingSkillFromMasterArifi
const sekarang = new Date().getTime();
			var ase = new Date();
                        var jamss = ase.getHours();
                         switch(jamss){
                case 0: jamss = "☪ Midnight"; break;
                case 1: jamss = "☪ Midnight"; break;
                case 2: jamss = "☪ Midnight"; break;
                case 3: jamss = "☪ Midnight"; break;
                case 4: jamss = "☪ Midnight"; break;
                case 5: jamss = "☪ Dawn"; break;
                case 6: jamss = "⛯ Morning"; break;
                case 7: jamss = "⛯ Morning"; break;
                case 8: jamss = "⛯ Morning"; break;
                case 9: jamss = "⛯ Morning"; break;
                case 10: jamss = "⛯ Morning"; break;
                case 11: jamss = "⛯ Afternoon"; break;
                case 12: jamss = "⛯ Zuhur"; break;
                case 13: jamss = "⛯ Afternoon"; break;
                case 14: jamss = "⛯ Afternoon"; break;
                case 15: jamss = "⛯ Asr"; break;
                case 16: jamss = "⛯ Afternoon"; break;
                case 17: jamss = "⛯ Evening"; break;
                case 18: jamss = "☪ Maghrib"; break;
                case 19: jamss = "☪ Isha"; break;
                case 20: jamss = "☪ Night"; break;
                case 21: jamss = "☪ Night"; break;
                case 22: jamss = "☪ Midnight"; break;
                case 23: jamss = "☪ Midnight"; break;
            }
            var tampilUcapan = "" + jamss;
exports.sendText = (from, text) => {
    ShowingSkillFromMasterArifi.sendMessage(from, text, MessageType.text)
}
exports.sendImage = (from, image, caption, arifirazzaq2001) => {
	ShowingSkillFromMasterArifi.sendMessage(from, image, MessageType.image, {quoted: arifirazzaq2001, caption: caption})
}
exports.sendVideo = (from, video, caption, arifirazzaq2001) => {
	ShowingSkillFromMasterArifi.sendMessage(from, video, MessageType.video, {quoted: arifirazzaq2001, caption: caption})
}
exports.sendGif = (from, gif) => {
	ShowingSkillFromMasterArifi.sendMessage(from, gif, MessageType.video, {mimetype: "video/gif"})
}
exports.reply = (from, text, arifirazzaq2001) => {
    ShowingSkillFromMasterArifi.sendMessage(from, text, MessageType.text, {quoted: arifirazzaq2001})
}
exports.sendSticker = (from, filename, arifirazzaq2001) => {
	ShowingSkillFromMasterArifi.sendMessage(from, filename, MessageType.sticker, {quoted: arifirazzaq2001})
}
exports.sendKontak = (from, nomor, nama) => {
	const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	ShowingSkillFromMasterArifi.sendMessage(from, {displayname: nama, vcard: vcard}, MessageType.contact)
}
exports.sendFakeStatus = (from, teks, faketeks) => {
	ShowingSkillFromMasterArifi.sendMessage(from, teks, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": faketeks, "jpegThumbnail": fs.readFileSync(`./cloud/arifi.jpeg`)} } } })
}
exports.FakeStatusForwarded = (from, teks, faketeks) => {
	ShowingSkillFromMasterArifi.sendMessage(from, teks, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": faketeks, "jpegThumbnail": fs.readFileSync(`./cloud/arifi.jpeg`)} }, contextInfo: {"forwardingScore": 999, "isForwarded": true} } })
}
exports.FakeStatusImgForwarded = (from, image, caption, faketeks) => {
	ShowingSkillFromMasterArifi.sendMessage(from, image, MessageType.image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": faketeks, "jpegThumbnail": fs.readFileSync(`./cloud/arifi.jpeg`)} } }, caption: caption, contextInfo: {"forwardingScore": 999, "isForwarded": true} })
}
exports.sendFakeStatusWithImg = (from, image, caption, faketeks) => {
	ShowingSkillFromMasterArifi.sendMessage(from, image, MessageType.image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "orderMessage": { "message": `${tampilUcapan}\n⛼ ${baterai.baterai}%`, "itemCount": `2021`, 'thumbnail': fs.readFileSync('./cloud/fakeBuffer.jpeg')} } }, caption: caption, sendEphemeral: true, contextInfo: {"mentionedJid": [developer], "forwardingScore": 999, "isForwarded": true} })
}
exports.sendMention = (from, text, orangnya, arifirazzaq2001) => {
	ShowingSkillFromMasterArifi.sendMessage(from, text, MessageType.extendedText, {contextInfo: {mentionedJid: orangnya}, quoted: arifirazzaq2001})
}
exports.hideTag = async function(from, text){
	let anu = await ShowingSkillFromMasterArifi.groupMetadata(from)
	let members = anu.participants
	let ane = []
	for (let i of members){
		ane.push(i.jid)
	}
	ShowingSkillFromMasterArifi.sendMessage(from, text, MessageType.text, {contextInfo: {"mentionedJid": ane}})
}
exports.hideTagImg = async function(from, image){
	let anu = await ShowingSkillFromMasterArifi.groupMetadata(from)
	let members = anu.participants
	let ane = []
	for (let i of members){
		ane.push(i.jid)
	}
	ShowingSkillFromMasterArifi.sendMessage(from, image, MessageType.image, {contextInfo: {"mentionedJid": ane}})
}
exports.hideTagSticker = async function(from, sticker){
	let anu = await ShowingSkillFromMasterArifi.groupMetadata(from)
	let members = anu.participants
	let ane = []
	for (let i of members){
		ane.push(i.jid)
	}
	ShowingSkillFromMasterArifi.sendMessage(from, sticker, MessageType.sticker, {contextInfo: {"mentionedJid": ane}})
}
exports.hideTagKontak = async function(from, nomor, nama){
	let vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	let anu = await ShowingSkillFromMasterArifi.groupMetadata(from)
	let members = anu.participants
	let ane = []
	for (let i of members){
		ane.push(i.jid)
	}
	ShowingSkillFromMasterArifi.sendMessage(from, {displayname: nama, vcard: vcard}, MessageType.contact, {contextInfo: {"mentionedJid": ane}})
}
exports.getRandom = (ext) => {
    return `${Math.floor(Math.random() * 10000)}${ext}`
}
exports.sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
exports.runtime = function(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}
exports.FakeTokoForwarded = (from, teks, fake) => {
	anu = {
		key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(`./cloud/arifi.jpeg`)
					},
					"title": fake,
					"description": "ochobot",
					"currencyCode": "IDR",
					"priceAmount1000": "50000000",
					"retailerId": "Self Bot",
					"productImageCount": 1
				},
				"businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
	ShowingSkillFromMasterArifi.sendMessage(from, teks, MessageType.text, {quoted: anu, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
}
exports.sendFakeToko = (from, teks, fake) => {
	anu = {
		key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(`./cloud/arifi.jpeg`)
					},
					"title": fake,
					"description": "ochobot",
					"currencyCode": "IDR",
					"priceAmount1000": "50000000",
					"retailerId": "Self Bot",
					"productImageCount": 1
				},
				"businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
	ShowingSkillFromMasterArifi.sendMessage(from, teks, MessageType.text, {quoted: anu})
}
exports.sendFakeThumb = async function(from, url, title, desc, comnya, fotonya){
	var anoim = {
		detectLinks: false
	}
	var arifirazzaq2001 = await ShowingSkillFromMasterArifi.generateLinkPreview(url)
	arifirazzaq2001.title = title
	arifirazzaq2001.description = desc
	arifirazzaq2001.jpegThumbnail = fotonya ? fotonya : fs.readFileSync(`./cloud/arifi.jpeg`)
	arifirazzaq2001.canonicaUrl = comnya
	ShowingSkillFromMasterArifi.sendMessage(from, arifirazzaq2001, MessageType.extendedText, anoim)
}
exports.sendFakeImg = function(from, imageasli, caption, thumbnail, arifirazzaq2001){
	let ai = {
		thumbnail: thumbnail ? thumbnail : fs.readFileSync(`./cloud/arifi.jpeg`),
		quoted: arifirazzaq2001 ? arifirazzaq2001 : ''
	}
	ShowingSkillFromMasterArifi.sendMessage(from, imageasli, MessageType.image, ai)
}
exports.sendMediaURL = async(to, url, text="", arifirazzaq2001, mids=[]) =>{
	if(mids.length > 0){
		text = normalizeMention(to, text, mids)
	}
	const fn = Date.now() / 10000;
	const filename = fn.toString()
	let mime = ""
	var download = function (uri, filename, callback) {
		request.head(uri, function (err, res, body) {
			mime = res.headers['content-type']
			request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
		});
	};
	download(url, filename, async function () {
		console.log('done');
		let media = fs.readFileSync(filename)
		let type = mime.split("/")[0]+"Message"
		if(mime === "image/gif"){
			type = MessageType.video
			mime = Mimetype.gif
		}
		if(mime.split("/")[0] === "audio"){
			mime = Mimetype.mp4Audio
		}
		ShowingSkillFromMasterArifi.sendMessage(to, media, type, { quoted: arifirazzaq2001, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
		
		fs.unlinkSync(filename)
	});
}
exports.getGroupAdmins = function(participants){
    admins = []
	for (let i of participants) {
		i.isAdmin ? admins.push(i.jid) : ''
	}
	return admins
}
exports.getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}
exports.setName = async function(query){
    const response = await ShowingSkillFromMasterArifi.updateProfileName(query)
    return response
}
exports.setBio = async function(query){
    const response = await ShowingSkillFromMasterArifi.setStatus(query)
    return response
}
exports.kick = function(from, orangnya){
	for (let i of orangnya){
		ShowingSkillFromMasterArifi.groupRemove(from, [i])
	}
}
exports.add = function(from, orangnya){
	ShowingSkillFromMasterArifi.groupAdd(from, orangnya)
}
exports.promote = function(from, orangnya){
	ShowingSkillFromMasterArifi.groupMakeAdmin(from, orangnya)
}
exports.demote = function(from, orangnya){
	ShowingSkillFromMasterArifi.groupDemoteAdmin(from, orangnya)
}
exports.upTextStatus = function(text){
	ShowingSkillFromMasterArifi.sendMessage('status@broadcast', text, MessageType.extendedText)
}
exports.upImgStatus = function(image, text){
	ShowingSkillFromMasterArifi.sendMessage('status@broadcast', image, MessageType.image, {caption: text})
}
exports.upVidStatus = function(video, text){
	ShowingSkillFromMasterArifi.sendMessage('status@broadcast', video, MessageType.video, {caption: text})
}
exports.createGroup = function(nama, member){
	let a
	ShowingSkillFromMasterArifi.groupCreate(nama, member)
	.then((res) => a = res )
	.catch((err) => a = err)
	return a
}
exports.getGroup = async function(totalchat){
	let grup = []
	let a = []
	let b = []
	for (c of totalchat){
		a.push(c.jid)
	}
	for (d of a){
		if (d && d.includes('g.us')){
			b.push(d)
		}
	}
	for (e of b){
		let ingfo = await ShowingSkillFromMasterArifi.groupMetadata(e)
		grup.push(ingfo)
	}
	return grup
}