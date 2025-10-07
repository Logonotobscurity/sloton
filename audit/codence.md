# Duplicate File Analysis & Codence

This document outlines the plan for resolving duplicate files found during the audit. No files will be deleted until this plan is reviewed and approved.

## 1. `desktop-nav.tsx`

*   **Path A:** `src/components/desktop-nav.tsx`
*   **Path B:** `src/components/header/desktop-nav.tsx`
*   **Suggested Canonical Location:** `src/components/header/desktop-nav.tsx`
*   **Reasoning:** The file at Path B contains the modern, refactored navigation logic, including the mega menu structure. The file at Path A is an outdated version. The `src/components/header.tsx` component correctly imports from Path B.
*   **Migration Plan:** Delete the file at `src/components/desktop-nav.tsx`. No import changes are necessary as the correct component is already in use.

## 2. `mobile-nav.tsx`

*   **Path A:** `src/components/mobile-nav.tsx`
*   **Path B:** `src/components/header/mobile-nav.tsx`
*   **Suggested Canonical Location:** `src/components/header/mobile-nav.tsx`
*   **Reasoning:** The file at Path B contains the updated mobile navigation logic that uses the `Sheet` and `Accordion` components. Path A contains an older, different implementation. The `src/components/header.tsx` component correctly imports from Path B.
*   **Migration Plan:** Delete the file at `src/components/mobile-nav.tsx`. No import changes are necessary.
