import { MoreVertical, Phone, Video, X } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";

const ChatHeader = () => {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();

  return (
    <div className="p-3.5 lg:p-4 border-b border-base-300/70 bg-base-100/70 backdrop-blur-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="avatar online">
            <div className="size-11 rounded-2xl relative ring-1 ring-base-300 overflow-hidden">
              <img src={selectedUser.profilePic || "/avatar.png"} alt={selectedUser.fullName} />
            </div>
          </div>

          <div>
            <h3 className="font-semibold leading-5">{selectedUser.fullName}</h3>
            <p className="text-xs text-base-content/60 mt-0.5">
              {onlineUsers.includes(selectedUser._id) ? "Active now" : "Away"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <button className="btn btn-ghost btn-sm btn-circle hidden sm:inline-flex" type="button">
            <Phone className="size-4" />
          </button>
          <button className="btn btn-ghost btn-sm btn-circle hidden sm:inline-flex" type="button">
            <Video className="size-4" />
          </button>
          <button className="btn btn-ghost btn-sm btn-circle hidden md:inline-flex" type="button">
            <MoreVertical className="size-4" />
          </button>
          <button className="btn btn-ghost btn-sm btn-circle" onClick={() => setSelectedUser(null)}>
            <X className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default ChatHeader;
