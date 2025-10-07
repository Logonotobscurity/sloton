
import { test, expect } from '@playwright/test';

test.describe('Desktop Header Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display the main navigation links', async ({ page }) => {
    await expect(page.getByRole('button', { name: 'Solutions' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Industries' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Company' })).toBeVisible();

    await expect(page.getByRole('link', { name: 'Use Cases' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Partners' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'About' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Contact Us' })).toBeVisible();
  });
});

test.describe('Mobile Header Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
  });

  test('should open the mobile menu and display navigation links', async ({ page }) => {
    await page.getByRole('button', { name: 'Toggle Menu' }).click();
    await expect(page.getByLabel('Mobile navigation menu')).toBeVisible();

    await expect(page.getByRole('button', { name: 'Solutions' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Industries' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Company' })).toBeVisible();

    await page.getByRole('button', { name: 'Solutions' }).click();
    await expect(page.getByRole('link', { name: 'AI Solutions' })).toBeVisible();
  });
});
