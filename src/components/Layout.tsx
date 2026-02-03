import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Global modern dark background with waves and curves */}
      <div className="fixed inset-0 -z-10 overflow-hidden bg-background">
        {/* Animated wave layers */}
        <svg 
          className="absolute bottom-0 left-0 w-full h-[60%] opacity-[0.04]"
          viewBox="0 0 1440 600" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,400 C320,500 420,300 720,350 C1020,400 1200,250 1440,300 L1440,600 L0,600 Z" 
            fill="hsl(var(--foreground))"
          />
        </svg>
        
        <svg 
          className="absolute bottom-0 left-0 w-full h-[50%] opacity-[0.03]"
          viewBox="0 0 1440 500" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,300 C240,400 480,200 720,280 C960,360 1200,180 1440,250 L1440,500 L0,500 Z" 
            fill="hsl(var(--foreground))"
          />
        </svg>
        
        {/* Curved lines - top section */}
        <svg 
          className="absolute top-0 right-0 w-[80%] h-[60%] opacity-[0.06]"
          viewBox="0 0 800 600" 
          preserveAspectRatio="none"
        >
          <path 
            d="M800,0 Q600,150 800,300" 
            stroke="hsl(var(--foreground))" 
            strokeWidth="1" 
            fill="none"
          />
          <path 
            d="M800,50 Q550,200 800,350" 
            stroke="hsl(var(--foreground))" 
            strokeWidth="0.5" 
            fill="none"
          />
          <path 
            d="M800,100 Q500,250 800,400" 
            stroke="hsl(var(--foreground))" 
            strokeWidth="0.5" 
            fill="none"
          />
        </svg>
        
        {/* Flowing curves - left section */}
        <svg 
          className="absolute top-1/4 left-0 w-[60%] h-[50%] opacity-[0.05]"
          viewBox="0 0 600 400" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,200 Q150,100 300,200 T600,200" 
            stroke="hsl(var(--foreground))" 
            strokeWidth="1" 
            fill="none"
          />
          <path 
            d="M0,250 Q150,150 300,250 T600,250" 
            stroke="hsl(var(--foreground))" 
            strokeWidth="0.5" 
            fill="none"
          />
        </svg>
        
        {/* Large ambient curve */}
        <div 
          className="absolute -top-[30%] -right-[20%] w-[80%] h-[80%] rounded-full opacity-[0.02]"
          style={{
            background: 'radial-gradient(ellipse at center, hsl(var(--foreground)) 0%, transparent 60%)',
            filter: 'blur(60px)',
          }}
        />
        
        {/* Bottom ambient glow */}
        <div 
          className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full opacity-[0.02]"
          style={{
            background: 'radial-gradient(ellipse at center, hsl(var(--foreground)) 0%, transparent 60%)',
            filter: 'blur(80px)',
          }}
        />
      </div>
      
      <Header />
      <main className="flex-1 pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
