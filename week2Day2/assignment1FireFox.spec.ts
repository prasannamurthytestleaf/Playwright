import {firefox, test } from "@playwright/test";

//second test
test('Test to launch an FireFox browser', async () => {
    const browser = await firefox.launch({
    });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.flipkart.com/");
    let nextPageTitle = await page.title();
    let nextPageURL = await page.url();
    console.log(`The title of the page is ${nextPageTitle} and the URL for this page is ${nextPageURL}`);
})