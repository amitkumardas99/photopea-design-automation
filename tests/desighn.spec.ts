import { test, expect } from '@playwright/test';
import { PhotopeaPage } from '../pages/photopea_page';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('generate design in photopea', async ({ page }) => {

  const editor = new PhotopeaPage(page);

  await editor.createCanvas();

  await editor.addText("Hello");
  await editor.addText("World");
  

});