import { redirect } from 'next/navigation';

/**
 * Priser visas i landningssidans sektion #pricing.
 * Denna route behålls för bokmärken/länkar och omdirigerar dit.
 */
export default function PricingPage() {
  redirect('/#pricing');
}
