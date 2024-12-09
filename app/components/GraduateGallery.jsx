// "use client";

// import { AnimatePresence, motion } from "framer-motion";
// import { X } from "lucide-react";
// import Image from "next/image";
// import { useState } from "react";

// const graduateList = [
//   { id: 1, src: "/graduate/1.jpg" },
//   { id: 2, src: "/graduate/2.jpg" },
//   { id: 3, src: "/graduate/3.jpg" },
//   { id: 4, src: "/graduate/4.jpg" },
//   { id: 5, src: "/graduate/5.jpg" },
//   { id: 6, src: "/graduate/6.jpg" },
//   { id: 7, src: "/graduate/7.jpg" },
//   { id: 8, src: "/graduate/8.jpg" },
//   { id: 9, src: "/graduate/9.jpg" },
//   { id: 10, src: "/graduate/10.jpg" },
//   { id: 11, src: "/graduate/11.jpg" },
//   { id: 12, src: "/graduate/12.jpg" },
// ];

// export default function GraduateGallery() {
//   const [selectedGraduate, setSelectedGraduate] = useState(null);

//   const closeModal = () => setSelectedGraduate(null);

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-4xl font-bold text-center mb-8">Our Latest Graduates</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {graduateList.map((graduate) => (
//           <GraduateCard key={graduate.id} graduate={graduate} onClick={() => setSelectedGraduate(graduate)} />
//         ))}
//       </div>
//       <AnimatePresence>{selectedGraduate && <Lightbox graduate={selectedGraduate} onClose={closeModal} />}</AnimatePresence>
//     </div>
//   );
// }

// function GraduateCard({ graduate, onClick }) {
//   return (
//     <motion.div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer" onClick={onClick} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} whileHover={{ scale: 1.05 }}>
//       <Image src={graduate.src} alt={`Graduate ${graduate.id}`} width={400} height={300} className="w-full h-auto object-cover" />
//     </motion.div>
//   );
// }

// function Lightbox({ graduate, onClose }) {
//   return (
//     <motion.div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
//       <motion.div className="relative max-w-4xl w-full h-full flex items-center justify-center" initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} onClick={(e) => e.stopPropagation()}>
//         <Image src={graduate.src} alt={`Graduate ${graduate.id}`} width={1200} height={800} className="max-w-full max-h-full object-contain" />
//         <motion.button className="absolute top-4 right-4 text-white" onClick={onClose} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
//           <X size={24} />
//         </motion.button>
//       </motion.div>
//     </motion.div>
//   );
// }

"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useState } from "react";

const graduateList = [
  { id: 1, src: "/graduate/1.jpg" },
  { id: 2, src: "/graduate/2.jpg" },
  { id: 3, src: "/graduate/3.jpg" },
  { id: 4, src: "/graduate/4.jpg" },
  { id: 5, src: "/graduate/5.jpg" },
  { id: 6, src: "/graduate/6.jpg" },
  { id: 7, src: "/graduate/7.jpg" },
  { id: 8, src: "/graduate/8.jpg" },
  { id: 9, src: "/graduate/9.jpg" },
  { id: 10, src: "/graduate/10.jpg" },
  { id: 11, src: "/graduate/11.jpg" },
  { id: 12, src: "/graduate/12.jpg" },
];

export default function GraduateGallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const closeModal = () => setSelectedIndex(null);

  const navigate = useCallback((direction) => {
    setSelectedIndex((prevIndex) => {
      if (prevIndex === null) return null;
      const newIndex = direction === "next" ? (prevIndex + 1) % graduateList.length : (prevIndex - 1 + graduateList.length) % graduateList.length;
      return newIndex;
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Our Latest Graduates</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {graduateList.map((graduate, index) => (
          <GraduateCard key={graduate.id} graduate={graduate} onClick={() => setSelectedIndex(index)} />
        ))}
      </div>
      <AnimatePresence>{selectedIndex !== null && <Lightbox graduate={graduateList[selectedIndex]} onClose={closeModal} onNavigate={navigate} />}</AnimatePresence>
    </div>
  );
}

function GraduateCard({ graduate, onClick }) {
  return (
    <motion.div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer" onClick={onClick} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} whileHover={{ scale: 1.05 }}>
      <Image src={graduate.src} alt={`Graduate ${graduate.id}`} width={400} height={300} className="w-full h-auto object-cover" />
    </motion.div>
  );
}

function Lightbox({ graduate, onClose, onNavigate }) {
  return (
    <motion.div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div className="relative max-w-4xl w-full h-full flex items-center justify-center" initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} onClick={(e) => e.stopPropagation()}>
        <Image src={graduate.src} alt={`Graduate ${graduate.id}`} width={1200} height={800} className="max-w-full max-h-full object-contain" />
        <motion.button className="absolute top-4 right-4 text-white" onClick={onClose} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <X size={48} className="text-blue-600" />
        </motion.button>
        <motion.button className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white" onClick={() => onNavigate("prev")} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <ChevronLeft size={40} />
        </motion.button>
        <motion.button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white" onClick={() => onNavigate("next")} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <ChevronRight size={40} />
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
