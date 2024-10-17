import FormCreateUser from '@/components/user/create-form';
import Breadcrumbs from '@/components/user/breadcrumbs';

export default async function Page() {

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Users', href: '/dashboard/user' },
          {
            label: 'Create User',
            href: '/dashboard/user/create',
            active: true,
          },
        ]}
      />
      <FormCreateUser />
    </main>
  );
}