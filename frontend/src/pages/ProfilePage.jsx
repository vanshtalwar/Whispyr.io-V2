import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Camera, Mail, User } from "lucide-react";

const ProfilePage = () => {
  const { authUser, isUpdatingProfile, updateProfile } = useAuthStore();
  const [selectedImg, setSelectedImg] = useState(null);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      await updateProfile({ profilePic: base64Image });
    };
  };

  return (
    <main className="min-h-screen pt-24 pb-10 px-4 relative overflow-hidden">
      <div className="animated-bg-orb bg-primary/40 size-72 -top-16 -left-10" />
      <div
        className="animated-bg-orb bg-accent/40 size-72 bottom-10 right-0"
        style={{ animationDelay: "1.3s" }}
      />

      <div className="max-w-3xl mx-auto animate-fade-up">
        <div className="glass-panel gradient-stroke rounded-3xl p-6 sm:p-8 space-y-8 relative z-10">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight">Profile</h1>
            <p className="mt-2 text-base-content/65">Your personal details and account settings</p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <img
                src={selectedImg || authUser.profilePic || "/avatar.png"}
                alt="Profile"
                className="size-32 rounded-3xl object-cover border border-base-300 shadow-xl"
              />
              <label
                htmlFor="avatar-upload"
                className={`
                  absolute bottom-0 right-0 
                  bg-primary text-primary-content hover:scale-105
                  p-2 rounded-xl cursor-pointer 
                  transition-all duration-200
                  ${isUpdatingProfile ? "animate-pulse pointer-events-none" : ""}
                `}
              >
                <Camera className="w-5 h-5" />
                <input
                  type="file"
                  id="avatar-upload"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={isUpdatingProfile}
                />
              </label>
            </div>
            <p className="text-sm text-base-content/60">
              {isUpdatingProfile ? "Uploading..." : "Click the camera icon to update your photo"}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-base-300/70 bg-base-100/60 p-4 space-y-2">
              <div className="text-xs text-base-content/60 uppercase tracking-wide flex items-center gap-2">
                <User className="w-3.5 h-3.5" />
                Full name
              </div>
              <p className="font-medium text-lg">{authUser?.fullName}</p>
            </div>

            <div className="rounded-2xl border border-base-300/70 bg-base-100/60 p-4 space-y-2">
              <div className="text-xs text-base-content/60 uppercase tracking-wide flex items-center gap-2">
                <Mail className="w-3.5 h-3.5" />
                Email address
              </div>
              <p className="font-medium text-lg break-all">{authUser?.email}</p>
            </div>
          </div>

          <div className="mt-2 rounded-2xl border border-base-300/70 bg-base-100/60 p-6">
            <h2 className="text-lg font-semibold mb-4">Account information</h2>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between py-2 border-b border-base-300/70">
                <span>Member Since</span>
                <span>{authUser.createdAt?.split("T")[0]}</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span>Account Status</span>
                <span className="text-success font-medium">Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default ProfilePage;
