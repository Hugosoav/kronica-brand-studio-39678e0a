import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Global modern minimalist background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Deep black base */}
        <div className="absolute inset-0 bg-[#0a0a0a]" />
        
        {/* Gradient mesh - top */}
        <div 
          className="absolute -top-[40%] -right-[20%] w-[80%] h-[80%] rounded-full"
          style={{
            background: 'radial-gradient(ellipse, rgba(30,30,30,0.8) 0%, transparent 60%)',
            filter: 'blur(60px)',
          }}
        />
        
        {/* Gradient mesh - bottom left */}
        <div 
          className="absolute -bottom-[30%] -left-[20%] w-[70%] h-[70%] rounded-full"
          style={{
            background: 'radial-gradient(ellipse, rgba(25,25,25,0.6) 0%, transparent 55%)',
            filter: 'blur(80px)',
          }}
        />
        
        {/* Center subtle glow */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[60%]"
          style={{
            background: 'radial-gradient(ellipse, rgba(40,40,40,0.3) 0%, transparent 50%)',
            filter: 'blur(100px)',
          }}
        />
        
        {/* Noise texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
        
        {/* Vignette effect */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 100%)',
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
