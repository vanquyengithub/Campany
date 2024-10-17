import FormUpdateUser from '@/components/user/edit-form';
import Breadcrumbs from '@/components/user/breadcrumbs';
import { getUserById } from '@/data/user';
import { notFound } from 'next/navigation';
import { getAccountByUserId } from "@/data/account";
export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;

  const [user, account] = await Promise.all([
    getUserById(id),
    getAccountByUserId(id),
  ]);
  if (!user) {
    notFound();
  }
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'User', href: '/dashboard/user' },
          {
            label: 'Edit User',
            href: `/dashboard/user/${id}/edit`,
            active: true,
          },
        ]}
      />
      <FormUpdateUser user={user} account={account} />
    </main>
  );
}