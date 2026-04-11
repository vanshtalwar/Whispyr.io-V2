const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200/50 p-10 xl:p-14 relative overflow-hidden">
      <div className="animated-bg-orb bg-primary/40 size-72 top-0 -right-24" />
      <div
        className="animated-bg-orb bg-secondary/40 size-64 -bottom-12 -left-20"
        style={{ animationDelay: "1.4s" }}
      />

      <div className="max-w-lg w-full relative z-10">
        <div className="glass-panel gradient-stroke rounded-3xl p-8 mb-8 space-y-4 animate-fade-up">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <div className="h-2 w-20 rounded-full bg-primary/40" />
              <div className="h-2 w-14 rounded-full bg-secondary/40" />
            </div>
            <div className="size-10 rounded-xl bg-primary/15 ring-1 ring-primary/30" />
          </div>

          <div className="space-y-3">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-2xl border border-base-300/70 bg-base-100/60 p-3"
              >
                <div className="size-10 rounded-xl bg-base-300 animate-pulse" />
                <div className="flex-1 space-y-2">
                  <div className="h-2.5 rounded-full bg-base-300/70 w-2/3" />
                  <div className="h-2 rounded-full bg-base-300/50 w-1/2" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center px-6">
          <h2 className="text-3xl font-bold mb-3 tracking-tight">{title}</h2>
          <p className="text-base-content/65 leading-relaxed">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default AuthImagePattern;
