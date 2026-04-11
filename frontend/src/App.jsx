import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";

import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthStore } from "./store/useAuthStore";
import { useThemeStore } from "./store/useThemeStore";
import { useEffect } from "react";

import { Loader } from "lucide-react";
import { Toaster } from "react-hot-toast";

const App = () => {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();
  const { theme } = useThemeStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth && !authUser)
    return (
      <div className="min-h-screen bg-base-200 grid place-items-center px-6">
        <div className="glass-panel rounded-3xl p-10 text-center max-w-sm w-full space-y-4 animate-fade-up">
          <div className="mx-auto size-14 rounded-2xl bg-primary/20 grid place-items-center ring-1 ring-primary/30">
            <Loader className="size-7 animate-spin text-primary" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Booting your workspace</h2>
            <p className="text-sm text-base-content/60 mt-1">
              Syncing chats, contacts, and real-time connections...
            </p>
          </div>
        </div>
      </div>
    );

  return (
    <div data-theme={theme}>
      <Navbar />

      <Routes>
        <Route path="/" element={authUser ? <HomePage /> : <Navigate to="/login" />} />
        <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to="/" />} />
        <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to="/" />} />
        <Route path="/profile" element={authUser ? <ProfilePage /> : <Navigate to="/login" />} />
      </Routes>

      <Toaster
        position="top-right"
        toastOptions={{
          className: "!rounded-2xl !border !border-base-300 !bg-base-100/95 !text-base-content",
        }}
      />
    </div>
  );
};
export default App;
