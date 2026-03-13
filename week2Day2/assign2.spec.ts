import {chromium, test } from "@playwright/test";

//second assignment
test('To Create Lead', async () => {
    const browser = await chromium.launch({
        channel: "chrome"
    });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.locator(`#username`).fill("democsr");
    await page.locator(`#password`).fill("crmsfa");
    await page.locator(".decorativeSubmit").click();
    await page.locator("//a[contains(text(), 'CRM/SFA')]").click();
    await page.locator("//a[contains(text(), 'Leads')]").click();
    await page.locator("//a[contains(text(), 'Create Lead')]").click();
    await page.locator("//div[@class='fieldgroup']//input[@name='companyName']").fill("MarginPoint");
    await page.locator("#createLeadForm_firstName").fill("Prasannamurthy");
    await page.locator("#createLeadForm_lastName").fill("Krishnan");
    await page.locator("#createLeadForm_personalTitle").fill("Mr.");
    await page.locator("#createLeadForm_generalProfTitle").fill("Automation QA Engineer");
    await page.locator("#createLeadForm_annualRevenue").fill("$1000");
    await page.locator("#createLeadForm_departmentName").fill("QA");
    await page.locator("#createLeadForm_primaryPhoneNumber").fill("9789926144");
    await page.locator(".smallSubmit").click();
    let pageTitle2 = await page.title();
    console.log(pageTitle2);
});