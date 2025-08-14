import 'ldrs/react/Ring.css'





import { grid } from 'ldrs'
grid.register()

// Default values shown



const Loading = () => (
  <div className="w-full h-screen flex justify-center items-center bg-gray-50">
    <h1 className="text-6xl font-bold animate-pulse text-blue-600"><l-grid
  size="60"
  speed="1.5" 
  color="black" 
></l-grid></h1>
  </div>
);

export default Loading;
