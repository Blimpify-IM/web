'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Handles scrolling to hash elements when navigating from other pages
 * This ensures hash links work correctly when coming from pages like /contact
 */
export function HashScrollHandler() {
  const pathname = usePathname();

  useEffect(() => {
    // Only handle hash scrolling on the home page
    if (pathname !== '/') {
      return;
    }

    // Get hash from URL
    const hash = window.location.hash;
    if (!hash) {
      return;
    }

    // Remove the # symbol
    const elementId = hash.substring(1);
    if (!elementId) {
      return;
    }

    // Wait for page to be fully loaded
    const scrollToElement = () => {
      const element = document.getElementById(elementId);
      if (element) {
        // Small delay to ensure page is rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    };

    // Try scrolling immediately
    scrollToElement();

    // Also try after a short delay in case elements aren't rendered yet
    const timeout = setTimeout(scrollToElement, 300);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}

