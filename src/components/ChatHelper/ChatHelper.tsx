import React, { useEffect, useState, useRef, ReactText } from 'react';

import classes from './ChatHelper.module.scss';
import Message from './Message/Message';

import { DATA } from './DATA';
import { motion } from 'framer-motion';
import Close from '../UI/Close/Close';

export interface MessageInt {
   id: number;
   text: JSX.Element;
   question: boolean;
   clicked: boolean;
}

interface Props {
   displayChatHelper: () => void;
}

const ChatHelper: React.FC<Props> = ({ displayChatHelper }) => {
   const dataLength = DATA.length;
   const [questionOrder, setQuestionOrder] = useState<number[]>([]);
   const [message, setMessages] = useState<MessageInt[]>([]);
   const [restart, setRestart] = useState(false);

   const chatEndRef = useRef<HTMLDivElement>(null);

   useEffect(() => {

      let lastClicked = questionOrder[questionOrder.length - 1];

      let response: MessageInt[] = [];
      let question: MessageInt[] = [];

      DATA.forEach((message, index) => {
         //REPONSES
         if (index === lastClicked) {
            message.responses.forEach(res => {
               response.push({ id: message.id, text: res, question: false, clicked: false });
            });
         }

         //QUESTIONS
         if (!questionOrder.includes(index)) {
            question.push({ id: message.id, text: message.question, question: true, clicked: false });
         }
      });

      const result = [...response, ...question];

      setMessages(messages => {

         const clickedMessages = messages ? messages.filter(mess => mess.id === lastClicked || !mess.question || mess.clicked) : [];

         for (let i in clickedMessages) {
            clickedMessages[i].clicked = true;
         }

         return [...clickedMessages, ...result]
      });

      setRestart(true);

   }, [questionOrder]);

   const clickedQuestionHandler = (id: number) => {
      setQuestionOrder(q => [...q, id]);
      setRestart(false);
   }

   /**** Animation ****/

   const delay = .8;

   const containerMotion = {
      hidden: { opacity: 1 },
      show: {
         opacity: 1,
         transition: {
            staggerChildren: delay
         },
         scrollTop: 10000,
      }
   }

   const itemMotion = {
      hidden: { y: -100, scale: 0, opacity: 0 },
      show: { y: 0, opacity: 1, scale: 1 },
   }

   const showMenu = {
      hidden: { x: 510 },
      show: { x: 0 }
   }

   /**** Scroll bottom ****/

   const scrollToBottom = () => {
      if (chatEndRef.current !== null) {
         chatEndRef.current.scrollIntoView({ behavior: "smooth" })
      }
   }

   useEffect(scrollToBottom, [message]);

   const test = (latest: { [key: string]: ReactText }) => {
      console.log(latest.opacity);
      if (latest.opacity === 1) scrollToBottom();
   }

   return (
      <motion.div variants={showMenu} initial="hidden" animate="show" exit="hidden" className={classes.ChatHelper}>
         <Close action={displayChatHelper} position="left" />
         <h2>Chat</h2>
         <div className={classes.Scroll}>
            {restart ?
               <motion.div variants={containerMotion} initial="hidden" animate="show" className={classes.Chat}>
                  <motion.div>
                     <Message id={-1} clicked > Bonjour et bienvenue ! </Message>
                     <Message id={-1} clicked > Ce projet sous la forme d'un OS t'invite à découvrir mon univers de développeur.</Message>
                     <Message id={-1} clicked > Que puis-je faire pour toi ?</Message>
                  </motion.div>
                  {message.map((mess, index) => {
                     return (
                        <motion.div onUpdate={test} variants={!mess.clicked ? itemMotion : undefined} key={mess.id + '-' + index}>
                           <Message
                              question={mess.question}
                              clicked={mess.clicked}
                              click={clickedQuestionHandler}
                              id={mess.id}>
                              {mess.text}
                           </Message>
                        </motion.div>
                     )
                  })}
                  {questionOrder.length === dataLength &&
                     <motion.div variants={itemMotion}>
                        <Message id={-1} clicked > Merci et bonne visite ! </Message>
                     </motion.div>}
                  <div ref={chatEndRef}></div>
               </motion.div>
               : null}
         </div>
      </motion.div>
   );
}

export default React.memo(ChatHelper);