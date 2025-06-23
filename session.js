//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUVBZjhndThjbjJqZzg2bTFwd2srV1ppKzlSUzU4bXJNWllpRnBEYi9tQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYSt6eVlqWXllS20yeEJEU25HRXo5cW4yT09JUjFtQ1NOaEJRbWsrTWZYMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBSXZCLzFJVFM4OWFzcHRGTzlIRVBHKzJITnFPSFRCMTh2a0Z4bWhackVzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWWUR4M3pDSU1uSi96Q2FLaWJSVlBwVjdoM1dRcjFoelNJeHlGcmo2WFJRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitLRGZoMWd0ZDZtV2kwaGFyOHZ0UU5JaFNqZFhlY0ZHUlJRQlh6Y3JuMlE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjN2ck1XNC91K3RiSXRWRlYveDB0NGlJZWlyUzFxWm9BTnc5Q2pweG8renc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUZBbXR4c21DWklaaGdwRnNieHZ0SHA1bm9OY1lJayt3V2FreVlrRmNIZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL1JxTU9qWWFqeGNRSENtRkRsNGpZWTZxc0lEbEZyWjhuMVRzWHludm5Waz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImY5eXBvYUlPMWRpSVU5T0wwWGg4eUI1SlJsQnQvL1dDeE5rV2FSZ2lReW5TRUp2UkZkN21xL3hIYkpzWTFtUGNicFNSTjY0NGllZjN4RW52Z001VGdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjIwLCJhZHZTZWNyZXRLZXkiOiJQU21SOENHWG5PeWF3SWNScFpYUWVjc2pualFPSHpEWGhmbG5wc2QySzZRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJYRW5uQ2JSVVFUaW8zQnU1dlhjdjV3IiwicGhvbmVJZCI6ImM0YzQ1OTUxLWQ4MzMtNDgyNS1iZjdkLWI2MmZlN2Y0MjRiNCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtUjlMcVdldHJvNEd2cVlqZ3F5Y0pQNzBLaUE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQm9IL3pJT1MxSmRqTXNzVC96QmJxM0UvandzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IllDQVA1SDFZIiwibWUiOnsiaWQiOiI5NDc0MTg1Mjc4Nzo4QHMud2hhdHNhcHAubmV0IiwibGlkIjoiNTU2NTA0NDQ5MDI1NjY6OEBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0wrdXZGVVF4dXpsd2dZWUFTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlZtSW44VUdLc0xmbDlZaWJVQTdPWTY1UjVia1VLTzJjYVl5N3MxdW9maEU9IiwiYWNjb3VudFNpZ25hdHVyZSI6IitkRkJ0L3FPTmdpdSt4ajBGcXphanVRN1MzM3oxTFM2RUxjd1hpbUtabVFveS9tMFd3SWUyT2pJMzhUdnlBUHE3WkhlNUdORnovVTF1NEhubjk0dENnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJxZ3I5Y3lPRXNWaklXelJCMXJpbEM4b0Iwd1drUWo1QVhHQTJ2UFBxMkNZMW8yRWppNXpDbHBMNXRaYXIxS3hRcUo4N3dBdnNuMDRSQkpRbStVS1RoZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzQxODUyNzg3OjhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVlppSi9GQmlyQzM1ZldJbTFBT3ptT3VVZVc1RkNqdG5HbU11N05icUg0UiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FNSURRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUwNjkzNDU5LCJsYXN0UHJvcEhhc2giOiIzUjlaMzkiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUpScyJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94741852787",
  PASSWORD: 
    process.env.PASSWORD || "Ransara",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
