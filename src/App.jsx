import React, { useState } from 'react';
import { motion } from 'framer-motion';

function App() {
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });

  // Hàm làm nút "Không" chạy trốn
  const moveNoButton = () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    setNoButtonPos({ x, y });
  };

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-center p-4 overflow-hidden">
      {/* Hiệu ứng trái tim bay lượn (Floating Hearts) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="animate-bounce absolute top-10 left-10 text-red-400 text-3xl">❤️</div>
        <div className="animate-pulse absolute bottom-20 right-20 text-pink-400 text-4xl">💖</div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-8 rounded-2xl shadow-xl text-center z-10 max-w-md"
      >
        <h1 className="text-3xl font-bold text-pink-600 mb-4">Gửi [Tên bạn gái] ❤️</h1>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Mỗi ngày bên em đều là một món quà. Anh đã dành chút thời gian code trang web này chỉ để nói rằng...
        </p>
        
        <h2 className="text-2xl font-semibold mb-6">Em sẽ mãi bên cạnh anh chứ?</h2>

        <div className="flex gap-4 justify-center items-center">
          <button 
            onClick={() => alert("Anh biết mà! Yêu em nhất! 😍")}
            className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-2 rounded-full font-bold transition-all transform hover:scale-110"
          >
            Đồng ý
          </button>

          <button
            onMouseEnter={moveNoButton}
            style={{ position: 'fixed', left: noButtonPos.x, top: noButtonPos.y, transition: '0.2s' }}
            className="bg-gray-300 text-gray-700 px-8 py-2 rounded-full font-bold cursor-not-allowed"
          >
            Không
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default App;