import Pagination from '@/components/user/pagination';
import Search from '@/components/search';
import Table from '@/components/user/table';
import { CreateUser } from '@/components/user/buttons';
import { lusitana } from '@/components/fonts';
import { InvoicesTableSkeleton } from '@/components/skeletons';
import { Suspense } from 'react';
import { getToltalUser } from '@/data/user';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Users',
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = await getToltalUser();
  const total = Math.ceil(Number(totalPages) / 10);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>User</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search User..." />
        <CreateUser />
      </div>
      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={total} />
      </div>
    </div>
  );
}