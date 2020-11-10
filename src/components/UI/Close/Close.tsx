import Icon from '@icon-park/react/es/all';
import React from 'react'

interface CloseProps {
   action:() => void;
   position?:'left' | 'right';
}

const Close: React.FC<CloseProps> = ({ action, position = 'left' }) => {
   return (
      <div style={{ width: '100%', textAlign: position, color: '#fff'}}>
         <Icon style={{ cursor:'pointer' }} onClick={action} type='CloseOne' theme="outline" size={25} />
      </div>
   );
}

export default Close;