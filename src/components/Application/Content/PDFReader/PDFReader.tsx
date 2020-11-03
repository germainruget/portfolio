import React, { Fragment, useState } from 'react';
import { Document, Page, pdfjs } from "react-pdf";

import classes from './PDFReader.module.scss';

import useWindoSize from '../../../../hooks/useWindowSize';
// import { useGesture } from 'react-use-gesture';

import CV from '../../../../assets/PDF/CV_Germain_Ruget.pdf';

import PDFController from './PDFController/PDFController';

export interface Props {
   loadApp?: (appLoaded: boolean) => void;
}


const PDFReader: React.FC<Props> = ({ loadApp }) => {
   pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

   const windowSize = useWindoSize();

   const [zoom, setZoom] = useState(1);

   const onDocumentLoadSuccess = () => {
      if (loadApp) loadApp(false);
   }

   const zoomIn = () => {
      if(zoom >= 2.0) return;
      setZoom(zoom + 0.1);
   }
   const zoomOut = () => {
      if(zoom < .6) return;
      setZoom(zoom - 0.1);
   }

   const width = windowSize.width !== undefined && windowSize.width < 800 ? windowSize.width : undefined;
   // const height = windowSize.height !== undefined ? (windowSize.height - 195) : 700;

   return (
      <Fragment>
         <div className={classes.PDFReader} style={{ height: 'auto', width: width }}>
            <Document file={CV} onLoadSuccess={onDocumentLoadSuccess} renderMode="svg" >
               <Page pageNumber={1} renderTextLayer={false} scale={zoom} /*height={'100%'}*/ width={width} />
            </Document>
         </div>
         <PDFController zoomIn={zoomIn} zoomOut={zoomOut} zoomState={zoom} />
      </Fragment>
   );
}

export default PDFReader;