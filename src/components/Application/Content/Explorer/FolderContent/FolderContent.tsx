import * as React from 'react';
import Icon from '@icon-park/react/es/all';

import classes from './FolderContent.module.scss';
import Backdrop from '../../../../UI/Backdrop/Backrop';

export interface Props {
   content: JSX.Element | undefined;
   active: boolean;
   width:number | undefined;
   toggleStructure: () => void;
}

const FolderContent: React.FC<Props> = ({ content, toggleStructure, active, width }) => {


   let icon: any = 'MenuUnfold';
   if (active) icon = 'MenuFold';

   return (
      <>
         <div className={classes.FolderContent}>
            {((width && width < 800) && active) && <Backdrop active action={toggleStructure} />}
            <Icon onClick={toggleStructure} type={icon} theme="outline" size={20} style={{ color: '#000', position: 'fixed', mixBlendMode: 'hard-light' }} />
            {content}
         </div>
      </>
   );
}

export default FolderContent;