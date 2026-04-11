import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import AuthImagePattern from "../components/AuthImagePattern";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare } from "lucide-react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <main className="min-h-screen grid lg:grid-cols-2 pt-20 lg:pt-0">
      <section className="flex flex-col justify-center items-center p-4 sm:p-8 lg:p-12 relative overflow-hidden">
        <div className="animated-bg-orb bg-primary/40 size-56 -top-10 -left-10" />
        <div
          className="animated-bg-orb bg-secondary/40 size-56 bottom-8 right-10"
          style={{ animationDelay: "1s" }}
        />

        <div className="w-full max-w-md glass-panel gradient-stroke rounded-3xl p-6 sm:p-8 space-y-6 animate-fade-up relative z-10">
          <div className="text-center space-y-2">
            <div className="mx-auto size-14 rounded-2xl bg-primary/15 ring-1 ring-primary/30 grid place-items-center">
              <MessageSquare className="w-7 h-7 text-primary" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight">Welcome back</h1>
            <p className="text-base-content/60 text-sm">Sign in to continue your conversations</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-control">
              <label className="label pb-1">
                <span className="label-text font-medium">Email</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/45">
                  <Mail className="size-4" />
                </div>
                <input
                  type="email"
                  className="input input-bordered w-full pl-10 rounded-xl bg-base-100/70"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label pb-1">
                <span className="label-text font-medium">Password</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/45">
                  <Lock className="size-4" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  className="input input-bordered w-full pl-10 rounded-xl bg-base-100/70"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-base-content/45"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="size-4" />
                  ) : (
                    <Eye className="size-4" />
                  )}
                </button>
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-full rounded-xl premium-btn" disabled={isLoggingIn}>
              {isLoggingIn ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Loading...
                </>
              ) : (
                "Sign in"
              )}
            </button>
          </form>

          <div className="text-center">
            <p className="text-base-content/60 text-sm">
              Don&apos;t have an account?{" "}
              <Link to="/signup" className="link link-primary font-medium">
                Create account
              </Link>
            </p>
          </div>
        </div>
      </section>

      <AuthImagePattern
        title={"Welcome back!"}
        subtitle={"Sign in to continue your conversations and catch up with your messages."}
      />
    </main>
  );
};
export default LoginPage;
