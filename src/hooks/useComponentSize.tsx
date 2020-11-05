
import { useState, useEffect, useRef, useCallback } from 'react';

const useComponentResize = () => {
   const ref = useRef<HTMLInputElement | null>(null);

   const [boundingBox, setBoundingBox] = useState<DOMRect>(new DOMRect());


   const setRef = useCallback(node => {
      if (ref.current) {
         ref.current = null;
      }

      if (node) {
         setBoundingBox(node.getBoundingClientRect())
      }

      ref.current = node

   }, [])


   useEffect(() => {
      const handleResize = () => {
         if (ref.current) {
            setBoundingBox(ref.current.getBoundingClientRect());
         }
      }

      window.addEventListener('resize', handleResize);

      handleResize();

      return () => window.removeEventListener('resize', handleResize);
   }, [ref])


   const result: { setRef: (node: any) => void, boundingBox: DOMRect } = { setRef, boundingBox }
   return result;
}

export default useComponentResize;