//browser
//browser context ==> window (isolated brower profile and incognito mode/ does not store any data)
//broswer page
import {chromium, test } from "@playwright/test";



//first test
test('Test to launch an Edge browser', async () => {
    const browser = await chromium.launch({
        channel: "msedge"
    });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.redbus.in/");
    let pageTitle = await page.title();
    let pageURL = await page.url();
    console.log(`The title of the page is ${pageTitle} and the URL for this page is ${pageURL}`);
    browser.close();
})
