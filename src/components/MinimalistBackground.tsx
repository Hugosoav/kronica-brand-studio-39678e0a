import { useTheme } from "@/hooks/use-theme";

const MinimalistBackground = () => {
  const { theme } = useTheme();
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: theme === "dark" 
            ? `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
               linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`
            : `linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px),
               linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />
      
      {/* Subtle gradient orbs */}
      <div 
        className={`absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full blur-3xl ${
          theme === "dark" 
            ? "bg-white/[0.02]" 
            : "bg-black/[0.015]"
        }`}
      />
      <div 
        className={`absolute top-1/2 -left-40 w-[500px] h-[500px] rounded-full blur-3xl ${
          theme === "dark" 
            ? "bg-white/[0.015]" 
            : "bg-black/[0.01]"
        }`}
      />
      <div 
        className={`absolute -bottom-40 right-1/4 w-[400px] h-[400px] rounded-full blur-3xl ${
          theme === "dark" 
            ? "bg-white/[0.02]" 
            : "bg-black/[0.012]"
        }`}
      />
      
      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.3]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />
    </div>
  );
};

export default MinimalistBackground;
