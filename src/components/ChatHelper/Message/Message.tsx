import React, { useEffect, useState } from 'react'
import LoadingIndicator from '../../UI/Loader/Loader';
import classes from './Message.module.scss';

interface MessageProps {
   question?: boolean;
   click?: (id: number) => void;
   clicked?: boolean;
   id: number;
}

const Message: React.FC<MessageProps> = ({ question = false, click, id, clicked, children }) => {


   /** Style **/
   let style = [classes.Message]
   if (question) style.push(classes.Question);
   if (clicked && question) style.push(classes.QuestionClicked);

   /** Content **/

   let content = (
      <div className={style.join(' ')} onClick={question && !clicked && click ? () => click(id) : undefined}>
         {children}
      </div>
   )
   return content;
}

export default Message;