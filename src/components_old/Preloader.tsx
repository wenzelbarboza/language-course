// components/Preloader.js
const Preloader = () => {
  return (
    <div
      id="js-preloader"
      className="fixed inset-0 flex items-center justify-center bg-white z-50"
    >
      <div className="text-center">
        <span className="block bg-blue-500 w-4 h-4 rounded-full mx-auto animate-bounce"></span>
        <div className="flex justify-center space-x-1 mt-2">
          <span className="block bg-blue-500 w-2 h-2 rounded-full animate-pulse"></span>
          <span className="block bg-blue-500 w-2 h-2 rounded-full animate-pulse"></span>
          <span className="block bg-blue-500 w-2 h-2 rounded-full animate-pulse"></span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
