import React from 'react';

import classes from './ChatHelper.module.scss';

interface ChatHelperProps {
   showChat: boolean;
}

const ChatHelper: React.FC<ChatHelperProps> = ({ showChat }) => {

   const helperClass = [classes.ChatHelper];
   if (showChat) {
      helperClass.push(classes.Active);
   }

   return (
      <div className={helperClass.join(' ')}>
         <h2>Chat</h2>
         <hr />
      </div>
   );
}

export default ChatHelper;