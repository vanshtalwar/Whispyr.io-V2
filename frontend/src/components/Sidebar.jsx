import { useEffect, useState } from "react";
import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";
import SidebarSkeleton from "./skeletons/SidebarSkeleton";
import { Search, Users, Wifi } from "lucide-react";

const Sidebar = () => {
  const { getUsers, users, selectedUser, setSelectedUser, isUsersLoading } = useChatStore();

  const { onlineUsers } = useAuthStore();
  const [showOnlineOnly, setShowOnlineOnly] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const filteredUsers = users
    .filter((user) => (showOnlineOnly ? onlineUsers.includes(user._id) : true))
    .filter((user) => user.fullName.toLowerCase().includes(search.toLowerCase()));

  if (isUsersLoading) return <SidebarSkeleton />;

  return (
    <aside className="h-full w-20 lg:w-80 border-r border-base-300/70 bg-base-100/40 backdrop-blur-md flex flex-col transition-all duration-300">
      <div className="p-4 lg:p-5 border-b border-base-300/60 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="size-9 rounded-xl bg-primary/20 ring-1 ring-primary/30 grid place-items-center">
              <Users className="size-5 text-primary" />
            </div>
            <div className="hidden lg:block">
              <p className="font-semibold leading-5">Conversations</p>
              <p className="text-xs text-base-content/60">Find people and start chatting</p>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-1.5 rounded-xl bg-success/15 text-success px-2 py-1 text-xs">
            <Wifi className="size-3.5" />
            {Math.max(0, onlineUsers.length - 1)} online
          </div>
        </div>

        <div className="hidden lg:block">
          <label className="relative block">
            <Search className="size-4 absolute left-3 top-1/2 -translate-y-1/2 text-base-content/50" />
            <input
              type="text"
              className="input input-sm input-bordered w-full rounded-xl pl-9 bg-base-100/70"
              placeholder="Search by name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </label>
        </div>

        <div className="hidden lg:flex items-center justify-between">
          <label className="cursor-pointer flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={showOnlineOnly}
              onChange={(e) => setShowOnlineOnly(e.target.checked)}
              className="toggle toggle-primary toggle-sm"
            />
            <span>Online only</span>
          </label>
          <span className="text-xs text-base-content/60">{filteredUsers.length} results</span>
        </div>
      </div>

      <div className="overflow-y-auto w-full px-2.5 py-3 space-y-1.5">
        {filteredUsers.map((user) => (
          <button
            key={user._id}
            onClick={() => setSelectedUser(user)}
            className={`
              w-full p-2.5 lg:p-3 flex items-center gap-3 rounded-2xl
              border border-transparent hover:border-base-300 hover:bg-base-100/80
              transition-all duration-200
              ${selectedUser?._id === user._id ? "bg-base-100 soft-ring shadow-lg shadow-base-content/5" : ""}
            `}
          >
            <div className="relative mx-auto lg:mx-0">
              <img
                src={user.profilePic || "/avatar.png"}
                alt={user.fullName}
                className="size-11 lg:size-12 object-cover rounded-2xl ring-1 ring-base-300"
              />
              {onlineUsers.includes(user._id) && (
                <span
                  className="absolute -bottom-0.5 -right-0.5 size-3 bg-success 
                  rounded-full ring-2 ring-base-100"
                />
              )}
            </div>

            {/* User info - only visible on larger screens */}
            <div className="hidden lg:block text-left min-w-0 flex-1">
              <div className="font-medium truncate">{user.fullName}</div>
              <div className="text-xs text-base-content/60 mt-0.5">
                {onlineUsers.includes(user._id) ? "Online" : "Offline"}
              </div>
            </div>
          </button>
        ))}

        {filteredUsers.length === 0 && (
          <div className="text-center text-base-content/60 py-10 px-4">
            <p className="font-medium">No matches found</p>
            <p className="text-sm mt-1">Try adjusting your filters or search text.</p>
          </div>
        )}
      </div>
    </aside>
  );
};
export default Sidebar;
