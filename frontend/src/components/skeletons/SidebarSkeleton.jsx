import { Users } from "lucide-react";

const SidebarSkeleton = () => {
  // Create 8 skeleton items
  const skeletonContacts = Array(8).fill(null);

  return (
    <aside
      className="h-full w-20 lg:w-80 border-r border-base-300/70 bg-base-100/40
    backdrop-blur-md flex flex-col transition-all duration-200"
    >
      {/* Header */}
      <div className="border-b border-base-300/70 w-full p-5">
        <div className="flex items-center gap-2">
          <div className="size-9 rounded-xl bg-primary/15 grid place-items-center">
            <Users className="w-5 h-5 text-primary" />
          </div>
          <span className="font-medium hidden lg:block">Conversations</span>
        </div>
      </div>

      {/* Skeleton Contacts */}
      <div className="overflow-y-auto w-full px-2.5 py-3 space-y-1.5">
        {skeletonContacts.map((_, idx) => (
          <div key={idx} className="w-full p-3 flex items-center gap-3 rounded-2xl border border-base-300/50">
            {/* Avatar skeleton */}
            <div className="relative mx-auto lg:mx-0">
              <div className="skeleton size-12 rounded-2xl" />
            </div>

            {/* User info skeleton - only visible on larger screens */}
            <div className="hidden lg:block text-left min-w-0 flex-1">
              <div className="skeleton h-4 w-32 mb-2 rounded-full" />
              <div className="skeleton h-3 w-16 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default SidebarSkeleton;
