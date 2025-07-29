import Image from "next/image";

export const SimplePreLoader = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
    <div className="text-center">
      <Image
        src="/textures/solaria_logo.png" 
        className="w-32 mx-auto mb-4 animate-spin-slow"
        alt="Loading"
         width={128}    
        height={128} 
      />
      <p className="text-orange-400 font-orbitron">Initializing universe...</p>
    </div>
  </div>
);