const puppeteer = require("puppeteer");
async function extractdata()
{
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://www.flipkart.com/noise-icon-buzz-1-69-display-bluetooth-calling-built-in-games-voice-assistant-smartwatch/p/itmd8257a482e5d5?pid=SMWGAU62XCAESACH&otracker=hp_nativeads_Featured%2BBrands_1_10.nativeAdCard.NATIVEADS_NOISE_YXAV1313N4ZQ");

    
    const title = await page.evaluate(() => document.title);
    console.log(title);
    const price = await page.evaluate(() => document.querySelector(".container ._30jeq3._16Jk6d"));
    console.log(price);
    // const rating = await page.evaluate(() => rating);
    // console.log(rating);
    const text = await page.evaluate(() => document.body.innerText);
    console.log(text);

    const links = await page.evaluate(() => Array.from(document.querySelectorAll('a',(e) => e.href)));
    console.log(links);


   if(browser) await browser.close();
}

extractdata();

