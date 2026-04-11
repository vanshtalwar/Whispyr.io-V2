import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, MessageSquare, User } from "lucide-react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <header className="fixed top-0 z-50 w-full px-3 sm:px-6 pt-3">
      <div className="mx-auto max-w-7xl glass-panel gradient-stroke rounded-2xl h-16 px-4 sm:px-6">
        <div className="flex items-center justify-between h-full">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="size-10 rounded-xl bg-primary/20 grid place-items-center ring-1 ring-primary/30 group-hover:scale-105 transition-transform">
              <MessageSquare className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h1 className="text-lg font-bold leading-5">Whispyr.io</h1>
              <p className="text-xs text-base-content/60 hidden sm:block">Realtime messaging</p>
            </div>
          </Link>

          <div className="flex items-center gap-1.5 sm:gap-2">
            {authUser && (
              <>
                <Link to="/profile" className="btn btn-ghost btn-sm rounded-xl gap-2 px-2 sm:px-3">
                  <div className="avatar">
                    <div className="size-7 rounded-lg ring-1 ring-base-300">
                      <img src={authUser.profilePic || "/avatar.png"} alt={authUser.fullName} />
                    </div>
                  </div>
                  <span className="hidden lg:inline max-w-28 truncate">{authUser.fullName}</span>
                  <User className="size-4 lg:hidden" />
                </Link>

                <button className="btn btn-sm rounded-xl btn-error btn-outline gap-2" onClick={logout}>
                  <LogOut className="size-4" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
