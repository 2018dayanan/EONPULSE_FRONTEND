const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:5173/blog/1', { waitUntil: 'networkidle0' });
  const text = await page.evaluate(() => document.body.innerText);
  const html = await page.evaluate(() => document.body.innerHTML);
  console.log('--- Text Content ---');
  console.log(text);
  console.log('--- HTML Content ---');
  console.log(html);
  await browser.close();
})();
