import { redirect } from 'next/navigation';

export default function RootPage() {
  // Default to Swedish for Nordic users
  redirect('/sv');
}
