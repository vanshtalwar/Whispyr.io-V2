import { THEMES } from "../constants";
import { useThemeStore } from "../store/useThemeStore";
import { Send } from "lucide-react";

const PREVIEW_MESSAGES = [
  { id: 1, content: "Hey! How's it going?", isSent: false },
  { id: 2, content: "I'm doing great! Just working on some new features.", isSent: true },
];

const SettingsPage = () => {
  const { theme, setTheme } = useThemeStore();

  return (
    <main className="min-h-screen pt-24 pb-10 px-4 relative overflow-hidden">
      <div className="animated-bg-orb bg-primary/40 size-72 -top-16 -left-10" />
      <div
        className="animated-bg-orb bg-secondary/40 size-72 bottom-10 right-0"
        style={{ animationDelay: "1.4s" }}
      />

      <div className="max-w-6xl mx-auto space-y-8 animate-fade-up relative z-10">
        <div className="glass-panel gradient-stroke rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-bold tracking-tight">Theme Lab</h2>
            <p className="text-sm text-base-content/70">
              Choose a visual style and instantly preview your chat interface.
            </p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-8 gap-2.5 sm:gap-3">
            {THEMES.map((t) => (
              <button
                key={t}
                className={`
                  group flex flex-col items-center gap-1.5 p-2.5 rounded-2xl border transition-all duration-200
                  ${theme === t ? "bg-base-100 border-primary shadow-lg shadow-primary/20" : "bg-base-100/40 border-base-300 hover:bg-base-100 hover:border-base-content/30"}
                `}
                onClick={() => setTheme(t)}
              >
                <div className="relative h-9 w-full rounded-lg overflow-hidden" data-theme={t}>
                  <div className="absolute inset-0 grid grid-cols-4 gap-px p-1">
                    <div className="rounded bg-primary"></div>
                    <div className="rounded bg-secondary"></div>
                    <div className="rounded bg-accent"></div>
                    <div className="rounded bg-neutral"></div>
                  </div>
                </div>
                <span className="text-[11px] font-medium truncate w-full text-center">
                  {t.charAt(0).toUpperCase() + t.slice(1)}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="glass-panel gradient-stroke rounded-3xl overflow-hidden">
          <div className="px-6 py-4 border-b border-base-300/70 bg-base-100/70">
            <h3 className="text-lg font-semibold">Live preview</h3>
          </div>
          <div className="p-4 sm:p-6 bg-base-200/30">
            <div className="max-w-lg mx-auto">
              <div className="bg-base-100 rounded-2xl shadow-xl overflow-hidden border border-base-300/70">
                <div className="px-4 py-3 border-b border-base-300 bg-base-100/90">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-primary-content font-medium">
                      J
                    </div>
                    <div>
                      <h3 className="font-medium text-sm">John Doe</h3>
                      <p className="text-xs text-base-content/70">Online</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 space-y-4 min-h-[220px] max-h-[220px] overflow-y-auto bg-base-100">
                  {PREVIEW_MESSAGES.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.isSent ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`
                          max-w-[80%] rounded-2xl p-3 shadow-sm border
                          ${message.isSent ? "bg-primary text-primary-content border-primary/40" : "bg-base-200 border-base-300"}
                        `}
                      >
                        <p className="text-sm">{message.content}</p>
                        <p
                          className={`
                            text-[10px] mt-1.5
                            ${message.isSent ? "text-primary-content/70" : "text-base-content/70"}
                          `}
                        >
                          12:00 PM
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 border-t border-base-300 bg-base-100">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      className="input input-bordered flex-1 text-sm h-10 rounded-xl"
                      placeholder="Type a message..."
                      value="This is a preview"
                      readOnly
                    />
                    <button className="btn btn-primary h-10 min-h-0 rounded-xl">
                      <Send size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default SettingsPage;
