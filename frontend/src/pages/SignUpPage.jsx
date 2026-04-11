import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare, User } from "lucide-react";
import { Link } from "react-router-dom";

import AuthImagePattern from "../components/AuthImagePattern";
import toast from "react-hot-toast";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { signup, isSigningUp } = useAuthStore();

  const validateForm = () => {
    if (!formData.fullName.trim()) return toast.error("Full name is required");
    if (!formData.email.trim()) return toast.error("Email is required");
    if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Invalid email format");
    if (!formData.password) return toast.error("Password is required");
    if (formData.password.length < 6) return toast.error("Password must be at least 6 characters");

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const success = validateForm();

    if (success === true) signup(formData);
  };

  return (
    <main className="min-h-screen grid lg:grid-cols-2 pt-20 lg:pt-0">
      <section className="flex flex-col justify-center items-center p-4 sm:p-8 lg:p-12 relative overflow-hidden">
        <div className="animated-bg-orb bg-primary/40 size-56 -top-10 -left-10" />
        <div
          className="animated-bg-orb bg-accent/40 size-56 bottom-8 right-10"
          style={{ animationDelay: "1.2s" }}
        />

        <div className="w-full max-w-md glass-panel gradient-stroke rounded-3xl p-6 sm:p-8 space-y-6 animate-fade-up relative z-10">
          <div className="text-center space-y-2">
            <div className="mx-auto size-14 rounded-2xl bg-primary/15 ring-1 ring-primary/30 grid place-items-center">
              <MessageSquare className="size-7 text-primary" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight">Create your account</h1>
            <p className="text-base-content/60 text-sm">Start chatting in seconds.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-control">
              <label className="label pb-1">
                <span className="label-text font-medium">Full Name</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="size-4 text-base-content/45" />
                </div>
                <input
                  type="text"
                  className="input input-bordered w-full pl-10 rounded-xl bg-base-100/70"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label pb-1">
                <span className="label-text font-medium">Email</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="size-4 text-base-content/45" />
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
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="size-4 text-base-content/45" />
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

            <button type="submit" className="btn btn-primary w-full rounded-xl premium-btn" disabled={isSigningUp}>
              {isSigningUp ? (
                <>
                  <Loader2 className="size-5 animate-spin" />
                  Loading...
                </>
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          <div className="text-center">
            <p className="text-base-content/60 text-sm">
              Already have an account?{" "}
              <Link to="/login" className="link link-primary font-medium">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </section>

      <AuthImagePattern
        title="Join our community"
        subtitle="Connect with friends, share moments, and stay in touch with your loved ones."
      />
    </main>
  );
};
export default SignUpPage;
