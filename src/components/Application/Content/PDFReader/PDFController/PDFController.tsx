import * as React from 'react';
import Icon from '@icon-park/react/es/all';

import classes from './PDFController.module.scss';

export interface Props {
   zoomIn: () => void;
   zoomOut: () => void;
   zoomState:number;
}

const PDFController: React.FC<Props> = ({zoomIn, zoomOut, zoomState}) => {
   return (
      <div className={classes.PDFController}>
         <Icon style={{ padding: '0 5px', cursor: 'pointer' }} type='ZoomOut' theme="outline" size="20" onClick={zoomOut} />
         <span>{(zoomState * 100).toFixed(0)}%</span>
         <Icon style={{ padding: '0 5px', cursor: 'pointer' }} type='ZoomIn' theme="outline" size="20" onClick={zoomIn} />
      </div>
   );
}

export default PDFController;