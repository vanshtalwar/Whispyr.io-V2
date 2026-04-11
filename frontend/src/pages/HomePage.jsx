import { useChatStore } from "../store/useChatStore";

import Sidebar from "../components/Sidebar";
import NoChatSelected from "../components/NoChatSelected";
import ChatContainer from "../components/ChatContainer";

const HomePage = () => {
  const { selectedUser } = useChatStore();

  return (
    <main className="min-h-screen pt-24 pb-6 px-3 sm:px-6 relative overflow-hidden">
      <div className="animated-bg-orb bg-primary/50 size-72 -top-20 -left-20" />
      <div
        className="animated-bg-orb bg-secondary/50 size-72 top-10 right-0"
        style={{ animationDelay: "1.2s" }}
      />

      <div className="mx-auto max-w-7xl h-[calc(100vh-7.5rem)] glass-panel gradient-stroke rounded-3xl overflow-hidden animate-fade-up">
        <div className="flex h-full">
            <Sidebar />

            {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
        </div>
      </div>
    </main>
  );
};
export default HomePage;
