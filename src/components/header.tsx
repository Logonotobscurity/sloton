
"use client";

import Link from "next/link";
import { MainNav } from "./header/main-nav";
import { SkipToContentLink } from "./header/skip-to-content";

export function Header() {
  return (
    <>
      <SkipToContentLink />
      <header>
        <div>
          <div>
             <Link href="/">
                <div>
                    <span>LOG_ON</span>
                    <span>Connecting Advantages...</span>
                </div>
            </Link>
          </div>

          <MainNav />

        </div>
      </header>
    </>
  );
}
