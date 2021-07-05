#!/usr/bin/bash

apt-get update
apt-get upgrade
apt-get install -y nodejs cowsay figlet libwebp ffmpeg wget tesseract
npm i node-tesseract-ocr
wget -O ~/../usr/share/tessdata/ind.traineddata "https://github.com/tesseract-ocr/tessdata/blob/master/ind.traineddata?raw=true"
npm install
npm install @adiwajshing/baileys
npm install colors
npm install parse-ms
npm install figlet
npm install mathjs
npm install emoji-api
npm install ytsr
npm install cheerio
npm install file-type
npm install awesome-phonenumber
npm install fluent-ffmpeg
npm install image-to-base64
npm install performance-now
npm install base64-img
npm install axios
npm install google-it
npm install ms
npm install os
npm install g-i-s
npm install node-fetch
npm install browser-id3-writer
npm install @kagchi/kag-api
npm install fake-useragent
npm install multistream
npm install form-data
npm audit fix
echo "[*] All dependencies have been installed, please run the command \"npm start\" to immediately start the script"

#!/usr/bin/bash

figlet ochobot system
echo -e "> Silahkan Ketik Enter Untuk Melanjutkan"
read enter
clear
echo -e "\033[1;33mSCRIPT INI GRATIS KOK, CUMA ARIF MINTA TOLONG\nJANGAN LUPA SUBSCRIBE YA\n CHANNEL YOUTUBE ARIFI RAZZAQ OFFICIAL\033[0m\n"
echo -e "> enter to next"
read enter
clear
node index