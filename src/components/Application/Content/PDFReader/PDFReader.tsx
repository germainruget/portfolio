import React, { useState, useRef, useEffect } from 'react';

import useWindoSize from '../../../../hooks/windowSize';
import { useGesture } from 'react-use-gesture';
import { Document, Page, pdfjs } from "react-pdf";

import CV from '../../../../assets/PDF/CV_Germain_Ruget.pdf';

export interface Props {
   loadApp?:(appLoaded:boolean) => void;
}

document.addEventListener('gesturestart', (e) => e.preventDefault());
document.addEventListener('gesturechange', (e) => e.preventDefault());

const PDFReader: React.FC<Props> = ({loadApp}) => {
   pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

   const windowSize = useWindoSize();
   const domTarget = useRef<HTMLDivElement>(null);

   const [zoom, setZoom] = useState(1);

   const onDocumentLoadSuccess = () => {
      if(loadApp) loadApp(false);
   }

   const bind = useGesture(
      {
         onPinch: ({ direction: [d] }) => {
            console.log(d);
            console.log(zoom);
            let zoomBonus = 0;
            if(d > 0 && zoom <= 3){
               //Zoom IN
               zoomBonus = 0.1;
               console.log("IN")
            }
            else if(d < 0 && zoom >= 1){
               //Zoom OUT
               console.log("OUT")
               zoomBonus = -0.1;
            }
            setZoom(zoom + zoomBonus);
         }
      },
      { domTarget, eventOptions: { passive: false } }
   )

   useEffect(() => {
      bind();
   }, [bind]);

   const width = windowSize.width !== undefined && windowSize.width < 700 ? windowSize.width : 700;
   console.log(width);
   return (
      <div ref={domTarget}>
         <Document file={CV} onLoadSuccess={onDocumentLoadSuccess} renderMode="svg" loading={<div style={{width:width, minHeight:'100%'}}></div>}>
            <Page pageNumber={1} renderTextLayer={false} scale={zoom} width={width} />
         </Document>
      </div>
   );
}

export default PDFReader;