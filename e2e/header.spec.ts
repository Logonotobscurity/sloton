
import { test, expect } from '@playwright/test';

test.describe('Desktop Header Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display the main navigation links and triggers', async ({ page }) => {
    // Check for dropdown triggers
    await expect(page.getByRole('button', { name: 'Solutions' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Company' })).toBeVisible();

    // Check for direct links
    await expect(page.getByRole('link', { name: 'Use Cases' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Partners' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Contact Us' })).toBeVisible();
  });
});

test.describe('Mobile Header Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
  });

  test('should open the mobile menu and display navigation links', async ({ page }) => {
    await page.getByRole('navigation', { name: 'Main navigation' }).getByRole('button', { name: 'Toggle Menu' }).click();
    await expect(page.getByLabel('Mobile navigation menu')).toBeVisible();

    // Check for accordion triggers
    await expect(page.getByRole('button', { name: 'Solutions' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Company' })).toBeVisible();

    // Open the solutions accordion and check for a link
    await page.getByRole('button', { name: 'Solutions' }).click();
    await expect(page.getByRole('link', { name: 'AI Solutions' })).toBeVisible();
  });
});
