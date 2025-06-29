// src/components/MainLayout.jsx
function MainLayout({ children }) {
    return (
      <div
        className="relative min-h-screen text-white bg-gradient-to-br from-black via-zinc-900 to-black 
                   bg-[length:400%_400%] animate-gradient-x overflow-hidden"
      >
        {/* 🔶 Orange Animated Glow Blobs */}
        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-orange-500 opacity-20 blur-3xl rounded-full animate-ping-slow"></div>
        <div className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-orange-400 opacity-15 blur-2xl rounded-full animate-ping-slow"></div>
  
        {/* Main Content */}
        <div className="relative z-10">{children}</div>
      </div>
    );
  }
  
  export default MainLayout;
  