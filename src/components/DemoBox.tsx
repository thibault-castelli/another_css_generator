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
   const [cssPrompt, setCssPrompt] = useState<string[]>(['']);
   const [isCopied, setIsCopied] = useState<boolean>(false);

   useEffect(() => {
      switch (cssProperty) {
         case CssProperty.boxShadow:
            setCssObj({ boxShadow: cssValue });
            setCssPrompt(['box-shadow: ' + cssValue + ';']);
            break;
         case CssProperty.textShadow:
            setCssObj({ textShadow: cssValue });
            setCssPrompt(['text-shadow: ' + cssValue + ';']);
            break;
         case CssProperty.borderRadius:
            setCssObj({ borderRadius: cssValue });
            setCssPrompt(['border-radius: ' + cssValue + ';']);
            break;
         case CssProperty.border:
            setCssObj({ border: cssValue });
            setCssPrompt(['border: ' + cssValue + ';']);
            break;
         case CssProperty.borderDetailed:
            const borders = cssValue.split(';');
            setCssObj({
               borderTop: borders[0],
               borderRight: borders[1],
               borderBottom: borders[2],
               borderLeft: borders[3],
            });

            // Only prompt borders with a value different than 0px
            const bordersPrompt: string[] = [];
            let allStartWithZero = true;

            if (!borders[0].startsWith('0')) {
               bordersPrompt.push(`border-top: ${borders[0]};`);
               allStartWithZero = false;
            }
            if (!borders[1].startsWith('0')) {
               bordersPrompt.push(`border-right: ${borders[1]};`);
               allStartWithZero = false;
            }
            if (!borders[2].startsWith('0')) {
               bordersPrompt.push(`border-bottom: ${borders[2]};`);
               allStartWithZero = false;
            }
            if (!borders[3].startsWith('0')) {
               bordersPrompt.push(`border-left: ${borders[3]};`);
               allStartWithZero = false;
            }
            if (allStartWithZero) {
               bordersPrompt.push(`border: ${borders[0]}`);
            }
            setCssPrompt(bordersPrompt);
            break;

         case CssProperty.transform:
            const tranforms = cssValue.split(';');
            setCssObj({
               transform: `${tranforms[0]} ${tranforms[1]} ${tranforms[2]} ${tranforms[3]} ${tranforms[4]} ${tranforms[5]} ${tranforms[6]}`,
            });

            // Only add values to transform property if their value is different than zero
            // scaleX and scaleY are always added
            const transformPrompt: string[] = ['transform: '];
            tranforms.forEach((transform) => {
               const i = transform.indexOf('(') + 1;
               if (!(transform[i] === '0') || transform.startsWith('scale')) {
                  transformPrompt[0] += transform + ' ';
               }
            });

            transformPrompt[0] += ';';
            setCssPrompt(transformPrompt);
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
            <p>
               {cssPrompt.map((prompt) => {
                  return <span key={prompt}>{prompt}</span>;
               })}
            </p>
            <div
               className="copy-btn-container"
               onClick={() => {
                  navigator.clipboard.writeText(cssPrompt.join('\n'));
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
