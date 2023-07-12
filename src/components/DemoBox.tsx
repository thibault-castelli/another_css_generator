import { CssProperty } from '../enums';
import { useEffect, useState } from 'react';
import {
   BsFillClipboard2CheckFill,
   BsFillClipboard2Fill,
} from 'react-icons/bs';

interface Props {
   cssProperty: CssProperty;
   cssValue: string;
   text?: string;
}

const DemoBox = ({ cssProperty, cssValue, text = '' }: Props) => {
   const [cssObj, setCssObj] = useState({});
   const [cssPrompt, setCssPrompt] = useState<string>('');
   const [isCopied, setIsCopied] = useState<boolean>(false);

   useEffect(() => {
      switch (cssProperty) {
         case CssProperty.boxShadow:
            setCssObj({ boxShadow: cssValue });
            setCssPrompt('box-shadow: ' + cssValue + ';');
            break;
         case CssProperty.textShadow:
            setCssObj({ textShadow: cssValue });
            setCssPrompt('text-shadow: ' + cssValue + ';');
            break;
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
      <section className="demo-box-container">
         <div className="demo-box" style={cssObj}>
            {text.length > 0 && <p>{text}</p>}
         </div>
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
      </section>
   );
};

export default DemoBox;
