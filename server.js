// const express = require(“express”);
const express = require("express")
const path = require("path");

const app = express();
const fs = require("fs");
const PORT = 3000;
var __PAGE_TITLE__ = ""
var todo = function (req, res) {
let detail = { title: ``, body: "" };
console.log("Fetching host info from:", host)

// let htmlContent = fs.readFileSync("./build/index.html”, “utf8”);
let htmlContent = fs.readFileSync("./build/index.html", "utf-8")

// htmlContent = htmlContent.replace(__PAGE_TITLE__,'dynamic_title’);
htmlContent = htmlContent.replace(__PAGE_TITLE__,'dynamic_title')

htmlContent = htmlContent.replace(‘__DESCRIPTION__’, dynamic_description);
htmlContent = htmlContent.replace(`__FB_TITLE__`,dynamic_fb_title);
htmlContent = htmlContent.replace(`__FB_DESCRIPTION__`, dynamic_fb_description);
htmlContent = htmlContent.replace(`__PAGE_NO_SCRIPT__`, `<p>Javascript doesn’t work</p>`);
res.send(htmlContent);
}
app.get("/", todo);
app.use(express.static(path.join(__dirname, "./build”)));
app.listen(PORT, () => {
console.log(`Express app running on port ${PORT}.`);
});