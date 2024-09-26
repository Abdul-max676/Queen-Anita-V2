//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "2348106149503";
global.owner = process.env.OWNER_NUMBER || "2349066316239";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUJlejQ2RWFudHRIUkw0QXFuYk1oNnZrYTNEenFBSGFTZ0ExY2FETmtrQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL0pNSVloUGVYaTR5aUN1UGJrWVBLUG1qT1creWdTbFdGeWZ1OHE1WHZSOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNTlNWNkFJQXd6clJ5aENQY00zQWl2TmdEa3Y2a2MvRGRrMGRKWG03MVhNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzWkI3a0plZjFncGZDYlh1UWgvL0VOMGl3T1N0d1hYTHFjOEVwTjc5NVY4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndMOXh4OUs2MVdEalpOWkFOdmwvSUwwYjlDVFIrSVhmK1NOVEJuRWN2VlU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJtWkFHQkxyZXZFWkdjcUJiZGpVR0pYWVQyZzhvdVNSc2xuWlhJNjdUUlk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0NmS0ZmWVZ0bmtua1NzVFFrOExVbUNrdU5OL24yUXc2ekZuUXRXcGlFMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZzJhM0NKUTdvOUZkK0EraWZnY09TSk5FbmlkOU1aWTA0L1hJa1c0bXd3RT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdpTEJmYm9PUWMvOW9oVEM2VDB6cUNsQWtNUXIxV0x5SWw4THhiUmt1V0ZaUnp4MEtKdm1SUlRQY2dqTThuSGkrOWZ6cXk4OVJYTjBhWkxMeDM5RmlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTczLCJhZHZTZWNyZXRLZXkiOiJ5RFdnLy9md0o0T0U4OUlrbzlqcDBRYndVMm1kYTluaC9TbzFaekIvNFpvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJGOEEyWkg2SlFSR1JBQ2M0aVRiM21RIiwicGhvbmVJZCI6IjVjNzdiNzk2LWZlMzMtNDBlMi04OTYyLWI5OWE1ZDNlMDQyNiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6VGtzUEhNWlJFd2JtbG5IMkNmT3U0ZjhBeFk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiME05c2Y0Q0wwUTlPZm1WM1JtUUxrWHZlL0hBPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlFCQUxNQTNKIiwibWUiOnsiaWQiOiIyMzQ5MDY2MzE2MjM5OjEzQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMblUzZDBERU9HQTFMY0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJYS1NJUzhHb3h5d0JRYlQzcHpFTXV3c1g0VGVOZjBpeDVnK1dheFlSRGpnPSIsImFjY291bnRTaWduYXR1cmUiOiJuUUFMMWFiMURLL1A5Rkp6MjJMK0VYZ25XVFc0RlRValQwaWtrNjVaRkcwOHZ5R1ArN0FON1lNZldNd1N2U1pKSzhTKzdob2tnTFdIaFdVMDZqUXhCUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoibVRleVhFVnBUNW53cE80b3E4alhIbjlTMDdQTE9Odzh3ZDhQK1BrUDNFTEZzaWR0cC9yQjJBMk81NUVEcnFaK0dEQWxpR05MdFdMYWg1RDIramRKZ2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDY2MzE2MjM5OjEzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZ5a2lFdkJxTWNzQVVHMDk2Y3hETHNMRitFM2pYOUlzZVlQbG1zV0VRNDQifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjczMzI0NjIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSzJMIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
