import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-glow delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-400/5 rounded-full blur-2xl"></div>
      </div>
      
      {/* Main content area */}
      <div className="container mx-auto px-4 flex-grow relative z-10">
        <div className="backdrop-blur-sm bg-white/5 rounded-2xl border border-white/10 shadow-2xl overflow-hidden min-h-[calc(100vh-8rem)] mt-4 mb-4">
          <Outlet />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Layout;