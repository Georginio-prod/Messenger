import { useMemo} from "react";
import { usePathname} from "next/navigation";
import { HiChat} from "react-icons/hi";
import { HiOutlineArrowLeftOnRectangle
    ,HiUsers
} from "react-icons/hi2"
import { signOut } from "next-auth/react";
import useConversation from "@/app/hooks/useConversation";

const useRoutes = () => {
    const pathname = usePathname();
    const {conversationId} = useConversation();

    const routes = useMemo(() =>[
        {
            label: 'chat',
            href: '/conversations',
            icon: HiChat,
            active: pathname === '/conversations' || !! conversationId
        },
        {
            label: 'Users',
            href:'/users',
            icon: HiUsers,
            active:pathname ==='/users'
        },
        {
            label: 'logout',
            href: '#',
            onClick: () => signOut(),
            icon: HiOutlineArrowLeftOnRectangle
        }
], [pathname, conversationId]);

    return routes;
}

export default useRoutes;