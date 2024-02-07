import Sidebar from "@/app/components/Sidebar/Sidebar";

export default async function ConversationLayout({
    children
}:{
    children: React.ReactNode
}){
    return(
        <Sidebar>
            <div className="h-full">
                {children}
            </div>
        </Sidebar>
    )
}