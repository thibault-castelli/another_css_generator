import { CssProperty } from '../../enums';
import { useEffect, useState } from 'react';
import {
   BsFillClipboard2CheckFill,
   BsFillClipboard2Fill,
} from 'react-icons/bs';
import './demobox.css';

interface Props {
   cssProperty: CssProperty;
   cssValue: string;
}

const DemoBox = ({ cssProperty, cssValue }: Props) => {
   const [cssObj, setCssObj] = useState({});
   const [cssPrompt, setCssPrompt] = useState<string>('');
   const [isCopied, setIsCopied] = useState<boolean>(false);

   useEffect(() => {
      switch (cssProperty) {
         case CssProperty.boxShadow:
            setCssObj({ boxShadow: cssValue });
            setCssPrompt('box-shadow: ' + cssValue + ';');
      }
   }, [cssValue]);

   useEffect(() => {
      const timeOut = setTimeout(() => {
         setIsCopied(false);
      }, 2000);

      return () => {
         clearTimeout(timeOut);
      };
   }, [isCopied]);

   return (
      <div className="demo-box-container">
         <div className="demo-box" style={cssObj}></div>
         <div className="copy-container">
            <p>{cssPrompt}</p>
            <div
               className="copy-btn-container"
               onClick={() => {
                  navigator.clipboard.writeText(cssPrompt);
                  setIsCopied(true);
               }}
            >
               <button type="button">
                  {isCopied ? (
                     <BsFillClipboard2CheckFill />
                  ) : (
                     <BsFillClipboard2Fill />
                  )}
               </button>
               <span>{isCopied ? 'copied' : 'click to copy'}</span>
            </div>
         </div>
      </div>
   );
};

export default DemoBox;
