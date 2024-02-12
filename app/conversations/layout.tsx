import getConversations from "../actions/getConversations";
import getUsers from "../actions/getUsers";
import ConversationList from "./components/ConversationList";
import Sidebar from "@/app/components/Sidebar/Sidebar";
import React from "react";

export default async function ConversationsLayout({
  children
}: {
  children: React.ReactNode,
}) {
  const conversations = await getConversations
  const users = await getUsers

  return (

    <Sidebar>
      <div className="h-full">
        <ConversationList 
          users={users} 
          title="Messages" 
          initialItems={conversations}
        />
        {children}
      </div>
    </Sidebar>
  );
}
