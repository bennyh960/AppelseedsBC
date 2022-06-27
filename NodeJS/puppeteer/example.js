const puppeteer = require("puppeteer");
const fs = require("fs/promises");

async function test() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://www.timeanddate.com/holidays/angola/");
  //   await page.screenshot({ path: "example.png" });

  //   const [el] =await  page.$x("/html/body/header/div[3]/span[2]/span[1]/span/span[1]/input")
  //   const [el] = await page.$x('//*[@id="tr4"]');
  //   const txt = await el.getProperty("textContent");

  //   const data = await page.evaluate(() => {
  //     return Array.from(document.querySelectorAll("td"));
  //   });

  //   const text = await data.map((e) => {
  //     return e.innerHTML;
  //   });

  const tr = await page.$$eval("tr", (tr) => {
    return tr.map((x) => {
      if (x.children) {
        return [...x.children].map((c) => c.textContent);
      }
      return x.textContent;
    });
  });
  //   const td = await page.$$eval("td", (td) => {
  //     return td.map((x) => x.textContent);
  //   });

  await fs.writeFile("table.txt", tr.join("\r\n"));
  await browser.close();
}
test();
