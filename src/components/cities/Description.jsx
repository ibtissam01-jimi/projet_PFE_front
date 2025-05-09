
import React from 'react';

const Description = () => {
  return (
    <div className="relative w-full py-20 group">
     
      <div className="absolute inset-0 bg-white from-amber-50 to-white shadow-xl transform rotate-1 group-hover:rotate-0 transition duration-500"></div>
      
     
      <div className="relative z-10 max-w-7xl mx-auto px-8">
       
        <div className="border-l-4 border-amber-400 pl-8 py-4">
          <p className="text-gray-800 text-xl leading-relaxed font-medium italic max-w-5xl">
            "Tangier, located in northern Morocco, is a historic port city where the Mediterranean Sea meets the Atlantic Ocean. Known as the 'Gateway to Africa,' it boasts a rich cultural heritage influenced by Arab, Berber, and European civilizations. The city is famous for its Medina, the Kasbah, and the Caves of Hercules, offering a mix of history and natural beauty. Tangier's vibrant atmosphere and proximity to Europe have long attracted artists, writers, and travelers. Today, it is a thriving hub blending tradition with modernity."
          </p>
        </div>
        
       
        <div className="mt-8 flex justify-end pr-12">
          <div className="text-amber-600 font-serif text-lg uppercase tracking-widest border-t-2 border-amber-300 pt-3">
            Your Compass
          </div>
        </div>
      </div>
    </div>
  );
}

export default Description;