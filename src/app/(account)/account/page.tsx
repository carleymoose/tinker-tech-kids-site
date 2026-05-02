import Link from 'next/link';
import { redirect } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { getSession } from '@/features/account/controllers/get-session';

export default async function AccountPage() {
  const session = await getSession();

  if (!session) {
    redirect('/login');
  }

  return (
    <section className="rounded-lg bg-black px-4 py-16">
      <h1 className="mb-8 text-center text-4xl font-bold">Account</h1>
      
      <div className="max-w-md mx-auto text-center">
        <p className="text-zinc-400 mb-8">Account management coming soon...</p>
        
        <Button asChild>
          <Link href="/pricing">Browse Plans</Link>
        </Button>
      </div>
    </section>
  );
}