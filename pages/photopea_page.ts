import { Page, expect } from "@playwright/test";

export class PhotopeaPage {

  constructor(private page: Page) {}


  async createCanvas() {

    await this.page.click("//body/div[@id='cap']/button[1]");
    await this.page.click("//button[normalize-space()='File']");
    await this.page.click("//span[normalize-space()='Alt+Ctrl + N']");
    await this.page.fill("//input[@id='461']", "1280");
    await this.page.fill("//input[@id='463']", "960");
    await this.page.fill("//input[@id='464']", "72");
    await this.page.locator("//select[@id='dd467']").selectOption('Transparent');
    await this.page.locator("//select[@id='dd469']").selectOption('sRGB');
    await this.page.locator("//select[@id='dd470']").selectOption('32 bit');
    await this.page.click("//button[normalize-space()='Create']");
  }
  async addText(text: string) {

  await this.page.keyboard.press("T");

  await this.page.mouse.click(400, 200);

  await this.page.keyboard.type(text);
}
}
