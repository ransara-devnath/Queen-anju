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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUxndWdpTXlMcVNoWUNTSXFPbVUzd2F4NGFROEs4YjZHdk1tL2pGTVZIdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaXpvMS82M2RySStESTRuN0tNRWVCdXZrSG9pNWFIeENrNlFoRmxMVmNSND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtRm8ybzBmVm9vZitROHZ2bUtYU3JSSE5wdnJjNGNpemxneG5kNlhhNjBFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlR3FnR0xIcTA3Wjd1K2IyWlJmWEdmMHBqNUhnSWI4dkpGMjEwT0FYdmpjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitBS0NRZmFRQ3Y2cmJHOHc5WnU4SlJUdXhRbE5vV2R2THd6dFZ1bldwWEU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRpc1lBWEJnZ1YxN3Fna1dzcUVWUjhmMnY5RVdseC9jZkF1TTRqbW1neWc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0xzUkpyOXRiK1lkTEtuK2FWZUx3Smh3NlA1OWhMdkRQWVhCcHRBTXBHaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWTlQSm42STMxV2Rkb0tjaEdHVXRJdmRvNU5LNUdFeFZya3dNUnJZVlFUZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZZWFRzNkJwai9Eb0ZwSUtJeUpTV0RCSmFNMm9Pb2xuNGtWOThrTHc3aEsrR2Y0RkRQWEQyTkZzdXIwcU5xZlBUeHV5U2d2alE3aWNabWpmd1pSNEN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjIsImFkdlNlY3JldEtleSI6InIxem1vVHE3Mk5zVlloRklIYzhXTStETHEwdG96Zm5USTB6ejdxNCtpLzA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InpoUEpURHNxU3UydzVLcWViQjZEQVEiLCJwaG9uZUlkIjoiMjA4NWI5NzMtOTk5Yy00NjAzLTk4MTAtN2UzZTY3YTRkNjBmIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklvYzBzenZNTmFLanp3cGhQKzcxTm9WUE9maz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyWW1uQ2pXdzZEVnpVVGsxQzRtM2FCaVlmYzg9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiU0RYRUFCTksiLCJtZSI6eyJpZCI6Ijk0NzI2ODgwNzg0OjEyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuKxpOKCs+KCpuKCtOKCs+KxpOKCsyDEkMmGVuKCpuKCs+KCruKxpyIsImxpZCI6IjI0OTQ4MjEzNDQ0MjE2NDoxMkBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05HanhlTUZFTkhKbnNNR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkJNZHRYcExhdUhGVmY3cEU2NFhrTUo5dWttWGFHc1VjSGJrd2FXZ1ZXbHM9IiwiYWNjb3VudFNpZ25hdHVyZSI6Im90Y1NJMDFEWkN5b25VVkprZkwyR1ZSOXRpa3QwYUZQb2RrNER5ZHdFd2pFa1BBN0tzQzFpczBlb1pyOWw0dC8vNW1hNk1rUmNaczF0ejFLMnh5NURRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ4RlVBUUE0b014alcyT3FDWEFUSEVtYTVOMkxDZjVDbWE5UUxsemJJN3o4RitocDJhOS9PUFlabUt1STZLWmVQcUlvNnhKNjJXTEN6SlBsV3BEZGJCZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzI2ODgwNzg0OjEyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlFUSGJWNlMycmh4VlgrNlJPdUY1RENmYnBKbDJockZIQjI1TUdsb0ZWcGIifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBVUlEUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1MTYyMjg3OSwibGFzdFByb3BIYXNoIjoiMUs0aEg0In0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "",
  PASSWORD: 
    process.env.PASSWORD || "",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
