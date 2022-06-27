const puppeteer = require("puppeteer");
const fs = require("fs/promises");

async function test() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://www.timeanddate.com/holidays/angola/");

  // * First option - will not sapreate children in rows
  // const tr = await page.$$eval("tr", (tr) => {
  //   return tr.map((x) => x.textContent);
  // });

  // * Second option
  const tr = await page.$$eval("tr", (tr) => {
    return tr.map((x) => {
      if (x.children) {
        return [...x.children].map((c) => c.textContent);
      }
      return x.textContent;
    });
  });

  await fs.writeFile("table.txt", tr.join(" \r\n"));
  await browser.close();
}
test();
