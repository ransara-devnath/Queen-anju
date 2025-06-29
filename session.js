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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUtpVDFYZ1RyZ04zWWFEUk1jTEQ4cmVOd2RpSWNHOXZOR3I4RTVwM3dIYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT2xHc2tlNjVUMEk3elhtd3R3aUdiRk55Nm8yZzdGc2tsSUlQdldwbVYzQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpQUR3VndTcS9VMGR6a3FsUnRUbGxubnpza1Fka2hwcDlIYWRFTXptRmswPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjQmFzRGpCeVJyeXVCeml6RDB3c2xPMXlSQUo0dmt3ZnlUc2ovTDlLM3hrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNMaThDaVZGQTY1RW5NQkFvaVprQ1h1Rm00WEk3VDRsOVRlQk1jZ0hjbjQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IngyMk1vZXNwNmc5S1dGV0p1VHVFYVhXaVZBQXJnb0FvcS92UUlVTXJNMkk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEl3TDNCRmNMbUkyRis2Y0FSOEhJVVhtRzY0MU5GM2JQWWtHN3NhaFpIZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTmordVZsNENIdlR1a1BwdEdRT0hzK0pEZlB3YWdSWmtTNVRGQkFYU3hUQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ind1VU9wRWJNb1ViTDhBNDY2bGxnRU1DTittb3ZTZldyKzNCbjJxWGx3ZkxMZkdXTmlydmRmbDJNeDRKZFVEVzdrWGE1UUFmbENsRjREU0NxVkdZWEN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTEsImFkdlNlY3JldEtleSI6InpiaTlUeG03U2EzcTI3YmFrdy9ELzd3NlYxNytLUjZ5OE5LNDJBUVM1WVk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlMzUDZralNiVHlxVTk0QzQxN283RmciLCJwaG9uZUlkIjoiNTA2OTIyODAtMzhhYy00NDJkLWExY2QtYTM4MGMwYzZhN2U3IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilo5NDBmSzB5cmJiMDRBRVE0bUkxODUvL1BuTT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSTzJ0Wk5hRXBOZUpjdGt2SjR2S1JwRVhEUmc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNkQ0TEJaR00iLCJtZSI6eyJpZCI6Ijk0NzE2MzkyMzE5OjdAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxNjU3MTMwMjUyMjg4NzE6N0BsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ056V3N2NEVFTjdZZzhNR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IitMRU40SnN5RHlDN2Y4a0tLenZCM1p3SUhnaWZodi8vYURDc0Rnb1hKalk9IiwiYWNjb3VudFNpZ25hdHVyZSI6InhaY2swY1VselMxZGlWSzlpVW9WaUkvK2dUUEpuVDIvKzk5WllCSmVaMFdVRlZvV3BldkRIcWl4clJjaEVLM3cyNDlOSXJRZEVYRkNQV3cvbVRiMERBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJKSTkzR1JBdituUkllaW5pMG1oYktlY3ZnS1VkdTBQekpaRzN3SHZTOVlkNmZMZmV0cmliQm9YQjg0YnRHNHUzVmFZZEo4RFNZWi81OEt6LzdCeHJBUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzE2MzkyMzE5OjdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZml4RGVDYk1nOGd1My9KQ2lzN3dkMmNDQjRJbjRiLy8yZ3dyQTRLRnlZMiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUxMTgyNDQzLCJsYXN0UHJvcEhhc2giOiJQV2s1QiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSGtyIn0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94716392319",
  PASSWORD: 
    process.env.PASSWORD || "Shanuka",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
