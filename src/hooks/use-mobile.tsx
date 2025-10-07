
import { useState, useEffect } from 'react';

export const useWindowHeight = () => {
  const [height, setHeight] = useState(0);
  useEffect(() => {
    const onResize = () => setHeight(window.innerHeight);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return height;
};
