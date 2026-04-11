import { useChatStore } from "../store/useChatStore";
import { useEffect, useRef } from "react";

import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import MessageSkeleton from "./skeletons/MessageSkeleton";
import { useAuthStore } from "../store/useAuthStore";
import { formatMessageTime } from "../lib/utils";

const ChatContainer = () => {
  const {
    messages,
    getMessages,
    isMessagesLoading,
    selectedUser,
    subscribeToMessages,
    unsubscribeFromMessages,
  } = useChatStore();
  const { authUser } = useAuthStore();
  const messageEndRef = useRef(null);

  useEffect(() => {
    getMessages(selectedUser._id);

    subscribeToMessages();

    return () => unsubscribeFromMessages();
  }, [selectedUser._id, getMessages, subscribeToMessages, unsubscribeFromMessages]);

  useEffect(() => {
    if (messageEndRef.current && messages) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  if (isMessagesLoading) {
    return (
      <div className="flex-1 flex flex-col overflow-auto bg-base-200/20">
        <ChatHeader />
        <MessageSkeleton />
        <MessageInput />
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col overflow-auto bg-base-200/20 relative">
      <div className="pointer-events-none absolute inset-0 opacity-25 [background:radial-gradient(circle_at_top_right,hsl(var(--p)/0.25),transparent_36%),radial-gradient(circle_at_bottom_left,hsl(var(--a)/0.25),transparent_32%)]" />
      <ChatHeader />

      <div className="flex-1 overflow-y-auto px-3 py-4 sm:px-5 sm:py-6 space-y-4 relative">
        {messages.map((message, idx) => (
          <div
            key={message._id}
            className={`chat ${message.senderId === authUser._id ? "chat-end" : "chat-start"} animate-fade-up`}
            ref={idx === messages.length - 1 ? messageEndRef : null}
          >
            <div className="chat-image avatar">
              <div className="size-9 sm:size-10 rounded-2xl border border-base-300 overflow-hidden">
                <img
                  src={
                    message.senderId === authUser._id
                      ? authUser.profilePic || "/avatar.png"
                      : selectedUser.profilePic || "/avatar.png"
                  }
                  alt="profile pic"
                />
              </div>
            </div>
            <div className="chat-header mb-1">
              <time className="text-[11px] opacity-60 ml-1">
                {formatMessageTime(message.createdAt)}
              </time>
            </div>
            <div
              className={`chat-bubble flex flex-col rounded-2xl border px-3.5 py-2.5 shadow-md max-w-[82vw] sm:max-w-[70%] ${
                message.senderId === authUser._id
                  ? "bg-primary text-primary-content border-primary/50"
                  : "bg-base-100 text-base-content border-base-300"
              }`}
            >
              {message.image && (
                <img
                  src={message.image}
                  alt="Attachment"
                  className="sm:max-w-[240px] rounded-xl mb-2 ring-1 ring-base-content/10"
                />
              )}
              {message.text && <p className="leading-relaxed break-words">{message.text}</p>}
            </div>
          </div>
        ))}

        {messages.length === 0 && (
          <div className="h-full min-h-[320px] grid place-items-center text-center px-4">
            <div className="glass-panel rounded-3xl p-8 max-w-md">
              <h3 className="font-semibold text-lg">Start your first message</h3>
              <p className="text-sm text-base-content/60 mt-2">
                Say hello to {selectedUser.fullName} and begin the conversation.
              </p>
            </div>
          </div>
        )}
      </div>

      <MessageInput />
    </div>
  );
};
export default ChatContainer;
