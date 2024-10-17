"use client"
import { useState } from 'react'
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/react'
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { useCurrentUser } from '@/hooks/use-current-user'
import { LogoutButton } from '../auth/logout-button'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FaUser } from "react-icons/fa"
import * as React from "react"
import { Moon, Sun, Settings } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
const products = [
    { name: 'Accommodation', categories: ['Tent pitch', 'Touring caravan pitches', 'Motorhome or campervan pitch'], href: '#', icon: ChartPieIcon },
    { name: 'Top destinations', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
    { name: 'National parks', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
]
const callsToAction = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const user = useCurrentUser();
    const { setTheme } = useTheme();
    return (
        <header className="bg-transparent">
            <nav aria-label="Global" className="mx-auto flex items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img alt="" src="logo-campyra.png" className="h-24 w-auto" />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                    </button>
                </div>
                <PopoverGroup className="hidden lg:flex lg:gap-x-12 justify-center items-center">
                    <Popover className="relative">
                        <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 focus-visible:outline-none">
                            Explore
                            <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none" />
                        </PopoverButton>

                        <PopoverPanel
                            transition
                            className="z-50 absolute -left-8 top-full mt-3 w-screen max-w-max overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                        >
                            <div className="p-4 flex flex-wrap">

                                <div
                                    className="basis-1/3 flex-col group relative flex items-start gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                >

                                    <div className="leading-7 text-gray-900">
                                        <span className="block font-semibold text-lg  border-b-4 border-cyan-200">
                                            Accommodation Types
                                        </span>
                                        <a href='#' className="mt-1 hover:underline hover:cursor-pointer hover:text-emerald-800">Tent pitch</a><br />
                                        <a href='#' className="mt-1 hover:underline hover:cursor-pointer hover:text-emerald-800">Touring caravan pitches</a><br />
                                        <a href='#' className="mt-1 hover:underline hover:cursor-pointer hover:text-emerald-800">Motorhome or campervan pitch</a><br />
                                        <a href='#' className="mt-1 hover:underline hover:cursor-pointer hover:text-emerald-800">Tent pitch</a><br />
                                        <a href='#' className="mt-1 hover:underline hover:cursor-pointer hover:text-emerald-800">Touring caravan pitches</a><br />
                                        <a href='#' className="mt-1 hover:underline hover:cursor-pointer hover:text-emerald-800">Motorhome or campervan pitch</a>
                                    </div>



                                </div>
                                <div
                                    className="basis-1/3 group relative flex items-start gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                >

                                    <div className="leading-7 text-gray-900">
                                        <span className="block font-semibold text-lg border-b-4 border-cyan-200">
                                            Top Destinations
                                        </span>
                                        <a className="mt-1 hover:underline hover:cursor-pointer hover:text-emerald-800">England</a><br />
                                        <a className="mt-1 hover:underline hover:cursor-pointer hover:text-emerald-800">Wales</a><br />
                                        <a className="mt-1 hover:underline hover:cursor-pointer hover:text-emerald-800">Cornwall</a><br />
                                        <a className="mt-1 hover:underline hover:cursor-pointer hover:text-emerald-800">Devon</a><br />
                                        <a className="mt-1 hover:underline hover:cursor-pointer hover:text-emerald-800">Scotland</a><br />
                                        <a className="mt-1 hover:underline hover:cursor-pointer hover:text-emerald-800">North Yorkshire</a><br />
                                        <a className="mt-1 hover:underline hover:cursor-pointer hover:text-emerald-800">Dorset</a><br />
                                        <a className="mt-1 hover:underline hover:cursor-pointer hover:text-emerald-800">France</a><br />
                                        <a className="mt-1 hover:underline hover:cursor-pointer hover:text-emerald-800">Spain</a><br />
                                        <a className="mt-1 hover:underline hover:cursor-pointer hover:text-emerald-800">Italy</a><br />
                                        <a className="mt-1 hover:underline hover:cursor-pointer hover:text-emerald-800">The Netherlands</a><br />
                                        <a className="mt-1 hover:underline hover:cursor-pointer hover:text-emerald-800">Newquay</a><br />
                                        <a className="mt-1 hover:underline hover:cursor-pointer hover:text-emerald-800">Norfolk</a><br />
                                        <a className="mt-1 hover:underline hover:cursor-pointer hover:text-emerald-800">North Wales</a><br />
                                        <a className="mt-1 hover:underline hover:cursor-pointer hover:text-emerald-800">Cumbria</a><br />
                                        <a className="mt-1 hover:underline hover:cursor-pointer hover:text-emerald-800">USA</a>
                                    </div>
                                </div>
                                <div
                                    className="basis-1/3 group relative flex items-start gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                >

                                    <div className="leading-7 text-gray-900">
                                        <span className="block font-semibold text-lg border-b-4 border-violet-200">
                                            National Parks
                                        </span>
                                        <a className="mt-1 hover:underline hover:cursor-pointer hover:text-emerald-800">The Brecon Beacons (Bannau Brycheiniog)</a><br />
                                        <a className="mt-1 hover:underline hover:cursor-pointer hover:text-emerald-800">Dartmoor</a><br />
                                        <a className="mt-1 hover:underline hover:cursor-pointer hover:text-emerald-800">The North York Moors</a><br />
                                        <a className="mt-1 hover:underline hover:cursor-pointer hover:text-emerald-800">Pembrokeshire Coast</a><br />
                                        <a className="mt-1 hover:underline hover:cursor-pointer hover:text-emerald-800">The Broads</a><br />
                                        <a className="mt-1 hover:underline hover:cursor-pointer hover:text-emerald-800">Exmoor</a><br />
                                        <a className="mt-1 hover:underline hover:cursor-pointer hover:text-emerald-800">Northumberland National Park</a><br />
                                        <a className="mt-1 hover:underline hover:cursor-pointer hover:text-emerald-800">South Downs</a><br />
                                        <a className="mt-1 hover:underline hover:cursor-pointer hover:text-emerald-800">The Cairngorms</a><br />
                                        <a className="mt-1 hover:underline hover:cursor-pointer hover:text-emerald-800">Loch Lomond & The Trossachs</a><br />
                                        <a className="mt-1 hover:underline hover:cursor-pointer hover:text-emerald-800">The Lake District and Cumbria</a><br />
                                        <a className="mt-1 hover:underline hover:cursor-pointer hover:text-emerald-800">The Peak District</a><br />
                                        <a className="mt-1 hover:underline hover:cursor-pointer hover:text-emerald-800">The New Forest</a><br />
                                        <a className="mt-1 hover:underline hover:cursor-pointer hover:text-emerald-800">The Yorkshire Dales</a><br />
                                        <a className="mt-1 hover:underline hover:cursor-pointer hover:text-emerald-800">Snowdonia (Eryri)</a>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                                {callsToAction.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                                    >
                                        <item.icon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </PopoverPanel>
                    </Popover>
                    <a href="/products" className="text-sm font-semibold leading-6">
                        Products
                    </a>
                    <a href="#" className="text-sm font-semibold leading-6">
                        Marketplace
                    </a>
                    <a href="#" className="text-sm font-semibold leading-6">
                        Company
                    </a>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon">
                                <Sun onClick={() => setTheme("dark")} className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                <Moon onClick={() => setTheme("light")} className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                            </Button>
                        </DropdownMenuTrigger>
                    </DropdownMenu>
                </PopoverGroup>
                {!user ? (
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <a href="/auth/login" className="text-sm font-semibold leading-6">
                            Log in <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                ) : (
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <Popover className="relative">
                            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 focus-visible:outline-none">
                                Hello,{user.name}&nbsp;&nbsp;
                                <Avatar>
                                    <AvatarImage src={user?.image || ''} />
                                    <AvatarFallback className="bg-orange-600">
                                        <FaUser className="text-white" />
                                    </AvatarFallback>
                                </Avatar>
                            </PopoverButton>
                            <PopoverPanel
                                transition
                                className="min-w-28 z-50 absolute -right-8 top-full mt-3 w-screen max-w-max overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                            >
                                <div className="p-4 flex flex-col justify-center items-center dark:text-black">
                                    <a href='#' className='border-b pb-1'>Profile</a>
                                    <a href='#' className='border-b py-1'>Settings</a>
                                    <LogoutButton>
                                        Logout
                                    </LogoutButton>
                                </div>
                            </PopoverPanel>
                        </Popover>
                    </div>
                )}

            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0" />
                <DialogPanel className="fixed inset-y-0 right-0 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                alt=""
                                src="logo-campyra.png"
                                className="h-8 w-auto"
                            />
                        </a>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Disclosure as="div" className="-mx-3">
                                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                        Product
                                        <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                                    </DisclosureButton>
                                    <DisclosurePanel className="mt-2 space-y-2">
                                        {[...products, ...callsToAction].map((item) => (
                                            <DisclosureButton
                                                key={item.name}
                                                as="a"
                                                href={item.href}
                                                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                            >
                                                {item.name}
                                            </DisclosureButton>
                                        ))}
                                    </DisclosurePanel>
                                </Disclosure>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Features
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Marketplace
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Company
                                </a>
                            </div>
                            <div className="py-6">
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}
