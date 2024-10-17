
'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
const links = [
    { name: 'Hunting', href: '/products/c/hunting' },
    { name: 'Shooting', href: '/products/c/shooting' },
    { name: 'Fishing', href: '/products/c/fishing' },
    { name: 'Boating', href: '/products/c/boating' },
    { name: 'Camping', href: '/products/c/camping' },
    { name: 'Outdoor Rec', href: '/products/c/outdoor-rec' },
    { name: 'Men', href: '/products/c/men' },
    { name: 'Women', href: '/products/c/women' },
    { name: 'Kids', href: '/products/c/kids' },
    { name: 'Home Gifts', href: '/products/c/home-gifts' },
    { name: 'Bargain Cave', href: '/products/c/bargain-cave' },
];

export default function HeaderProduct() {
    const pathname = usePathname();
    return (
        <>
            <div>
                <form className="max-w-md mx-auto">
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" id="default-search" className="focus-visible:outline-emerald-300 block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-orange-400 focus:border-green-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="What can we help you find..." required />
                        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-lime-400 hover:bg-lime-600 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-yellow-200 dark:focus:ring-yellow-500">Search</button>
                    </div>
                    <div>
                    </div>
                </form>
            </div>
            <div className="my-8 flex justify-between items-center border-y">
                {links.map((link) => {
                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={clsx(
                                'min-w-36 flex h-[60px] items-center justify-center rounded-md text-lg font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:p-2 md:px-3',
                                {
                                    'bg-sky-100 text-blue-600': pathname === link.href,
                                },
                            )}
                        >
                            <p className="hidden md:block items-center">{link.name}</p>
                        </Link>
                    );
                })}
            </div>
        </>
    );
}