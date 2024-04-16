import React, { useState, useEffect } from 'react';

const ImageGrid: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
        const data = await response.json();
        const categoryImages = data.categories.map((category: any) => category.strCategoryThumb);
        shuffleArray(categoryImages);
        setImages(categoryImages);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    const intervalId = setInterval(fetchImages, 10000);
    fetchImages();

    return () => clearInterval(intervalId);
  }, []);

  const shuffleArray = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  return (
    <div className="image-grid-container">
    <div className="image-grid">
      {images.map((image, index) => (
        <div key={index} className="image-card">
          <img src={image} alt={`Image ${index}`} />
        </div>
      ))}
    </div>
  </div>
  );
};

export default ImageGrid;
