import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FaUser } from "react-icons/fa"
import { LogoutButton } from "@/components/auth/logout-button"
import { ExitIcon } from "@radix-ui/react-icons"
import { useCurrentUser } from "@/hooks/use-current-user"

export const UserButton = () => {
    const user = useCurrentUser();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="flex justify-center items-center">
                <span className="text-xl">Hello, {user?.name || ''}&nbsp;</span>
                <Avatar>
                    <AvatarImage src={user?.image || ''} />
                    <AvatarFallback className="bg-teal-600">
                        <FaUser className="text-white" />
                    </AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40" align="end">
                <LogoutButton>
                    <DropdownMenuItem><ExitIcon className="h-4 w-4 mr-2" />Logout</DropdownMenuItem>
                </LogoutButton>
            </DropdownMenuContent>
        </DropdownMenu >
    )
}