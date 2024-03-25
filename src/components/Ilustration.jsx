import React, { useState, useEffect } from 'react';
import leftArrow from '../assets/left-arrow.svg'; // Asegúrate de tener la ruta correcta
import rightArrow from '../assets/right-arrow.svg'; // Asegúrate de tener la ruta correcta

const Ilustration = ({ infoItems, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const maxWidthPercentage = 50; // Porcentaje máximo del ancho de la ventana
  const maxHeightVh = 70; // Máximo alto en unidades vh

  useEffect(() => {
    // Preload images and determine the largest dimensions
    let maxWidth = 0, maxHeight = 0;
    infoItems.forEach((item) => {
      const img = new Image();
      img.src = item.image;
      img.onload = () => {
        const widthRatio = img.width / window.innerWidth;
        const heightRatio = img.height / window.innerHeight;
        const widthPercentage = widthRatio * 100;
        const heightVh = heightRatio * 100;

        // Ajustar en función del máximo especificado
        maxWidth = Math.max(maxWidth, Math.min(widthPercentage, maxWidthPercentage));
        maxHeight = Math.max(maxHeight, Math.min(heightVh, maxHeightVh));
        
        setContainerSize({
          width: `${maxWidth}vw`, // Utilizar vw para el ancho
          height: `${maxHeight}vh` // Utilizar vh para el alto
        });
      };
    });
  }, [infoItems]);

  const hasNext = currentImageIndex < infoItems.length - 1;
  const hasPrev = currentImageIndex > 0;

  const nextImage = () => {
    if (hasNext) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (hasPrev) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 overflow-y-auto h-full w-full z-50 flex items-center justify-center p-4">
      <div className="animate__animated animate__fadeIn bg-header-green-gradient rounded-lg shadow-xl h-auto flex flex-col items-center justify-center">
        <div className="w-full flex justify-between items-center p-4 rounded-t-lg">
          <h2 className="text-2xl text-white font-semibold">{infoItems[currentImageIndex].title}</h2>
          <button onClick={onClose} className="text-sm font-semibold bg-transparent hover:bg-gray-200 rounded-full">
            x
          </button>
        </div>
        <div className="flex justify-center align-center p-4 bg-white rounded-b-lg" style={{ width: containerSize.width, height: containerSize.height }}>
          {hasPrev && (
            <img src={leftArrow} alt="Previous" onClick={prevImage} className="cursor-pointer w-[4%]"/>
          )}
          <div className="mx-2 flex-grow">
            <img src={infoItems[currentImageIndex].image} alt="Ilustration" className='w-full h-full object-contain'/>
          </div>
          {hasNext && (
            <img src={rightArrow} alt="Next" onClick={nextImage} className="cursor-pointer w-[4%]"/>
          )}
        </div>
      </div>
    </div>
  );
};

export default Ilustration;
