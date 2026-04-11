import { MessageSquare, Sparkles } from "lucide-react";

const NoChatSelected = () => {
  return (
    <div className="w-full flex flex-1 flex-col items-center justify-center p-6 sm:p-10 bg-base-100/25 relative overflow-hidden">
      <div className="animated-bg-orb bg-primary/40 size-64 -top-20 right-20" />
      <div
        className="animated-bg-orb bg-secondary/40 size-56 bottom-4 left-10"
        style={{ animationDelay: "1.6s" }}
      />

      <div className="max-w-lg w-full text-center space-y-6 glass-panel gradient-stroke rounded-3xl p-10 relative z-10 animate-fade-up">
        <div className="flex justify-center gap-3 mb-2">
          <div className="size-16 rounded-2xl bg-primary/15 ring-1 ring-primary/30 flex items-center justify-center animate-pulse">
            <MessageSquare className="w-8 h-8 text-primary" />
          </div>
          <div className="size-16 rounded-2xl bg-secondary/15 ring-1 ring-secondary/30 flex items-center justify-center">
            <Sparkles className="w-8 h-8 text-secondary" />
          </div>
        </div>

        <h2 className="text-3xl font-bold tracking-tight">Welcome to your messaging lounge</h2>
        <p className="text-base-content/65 text-sm sm:text-base leading-relaxed">
          Pick a contact from the left to start chatting in real time. Share text, send images, and
          stay connected with a polished, modern experience.
        </p>
      </div>
    </div>
  );
};

export default NoChatSelected;
