import { CssProperty } from '../../enums';
import { useEffect, useState, useRef } from 'react';
import {
   BsFillClipboard2CheckFill,
   BsFillClipboard2Fill,
} from 'react-icons/bs';
import { AiFillTool } from 'react-icons/ai';
import './demobox.css';
import Modal from '../Modal/Modal';
import SettingsDemoBox from '../SettingsDemoBox/SettingsDemoBox';

interface Props {
   /** Css property to apply to the demo box */
   cssProperty: CssProperty;
   /** Css value to apply to the demo box */
   cssValue: string;
   /** Text to prompt in the demo box */
   text?: string;
   image?: string;
}

/** A demo box to visualize changes made to it with css properties */
const DemoBox = ({ cssProperty, cssValue, text = '', image = '' }: Props) => {
   // Object that will be used to style the demo box
   const [cssObj, setCssObj] = useState({});
   // Strings that will be copied by the user to be used in its css file
   const [cssPrompt, setCssPrompt] = useState<string[]>(['']);
   const [isCopied, setIsCopied] = useState<boolean>(false);

   // States for settings
   const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);
   // const [image, setImage] = useState<string>('');

   const demoBoxRef = useRef<HTMLDivElement>(null);

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
               transform: tranforms.join(' '),
            });

            // Only add values to transform property if their value is different than zero
            // or 1 for scaleX and scaleY
            const transformPrompt: string[] = ['transform: '];
            let noPromptTransform: boolean = true;
            tranforms.forEach((transform) => {
               const i = transform.indexOf('(') + 1;
               if (
                  !(transform[i] === '0' && !transform.startsWith('scale')) &&
                  !(
                     transform.startsWith('scale') &&
                     transform[i] === '1' &&
                     transform[i + 1] !== '.'
                  )
               ) {
                  transformPrompt[0] += transform + ' ';
                  noPromptTransform = false;
               }
            });

            // Default prompt if every properties are default
            if (noPromptTransform) {
               transformPrompt[0] += 'scale(1);';
            } else {
               transformPrompt[0] += ';';
            }

            setCssPrompt(transformPrompt);
            break;

         case CssProperty.color:
            setCssObj({ backgroundColor: cssValue });
            setCssPrompt([cssValue]);

            // Remove default style of the demo box
            demoBoxRef.current?.classList.remove('background-radial');
            break;

         case CssProperty.gradient:
            setCssObj({ background: cssValue });
            setCssPrompt(['background: ' + cssValue + ';']);

            // Remove default style of the demo box
            demoBoxRef.current?.classList.remove('background-radial');
            break;

         case CssProperty.filter:
            const filters: string[] = cssValue.split(';');
            setCssObj({ filter: filters.join(' ') });

            const filterPrompt: string[] = ['filter: '];
            let noPromptFilter = true;

            // Only prompt values that are different of 0
            // (or different of 100 for brightness, contrast, opacity and saturate)
            filters.forEach((filter) => {
               const i = filter.indexOf('(') + 1;
               if (
                  !(filter[i] === '0') &&
                  !(
                     (filter.startsWith('brightness') ||
                        filter.startsWith('contrast') ||
                        filter.startsWith('opacity') ||
                        filter.startsWith('saturate')) &&
                     filter[i] === '1' &&
                     filter[i + 1] === '0' &&
                     filter[i + 2] === '0'
                  )
               ) {
                  filterPrompt[0] += filter + ' ';
                  noPromptFilter = false;
               }
            });

            // Default prompt if every properties are default
            if (noPromptFilter) {
               filterPrompt[0] += 'bightness: 100%;';
            } else {
               filterPrompt[0] += ';';
            }

            setCssPrompt(filterPrompt);
            break;
      }
   }, [cssValue]);

   // Feedback when the user click on the copy button
   useEffect(() => {
      // Wait 2s before reseting the copy button
      const timeOut = setTimeout(() => {
         setIsCopied(false);
      }, 2000);

      return () => {
         clearTimeout(timeOut);
      };
   }, [isCopied]);

   return (
      <>
         <section className="demo-box-container">
            <div
               className={`demo-box ${image === '' ? 'background-radial' : ''}`}
               style={{ ...cssObj, backgroundImage: image }}
               ref={demoBoxRef}
            >
               {text.length > 0 && <p>{text}</p>}
               {/* <button
                  type="button"
                  onMouseDown={(e) => {
                     e.currentTarget.classList.add('active');
                  }}
                  onMouseUp={(e) => {
                     e.currentTarget.classList.remove('active');
                  }}
                  onClick={() => {
                     setIsSettingsOpen(true);
                  }}
               >
                  <AiFillTool />
               </button> */}
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
         {/* <Modal
            isActive={isSettingsOpen}
            setIsActive={setIsSettingsOpen}
            content={
               <SettingsDemoBox
                  backgroundColor={backgroundColor}
                  setBackgroundColor={setBackgroundColor}
                  image={image}
                  setImage={setImage}
               />
            }
         /> */}
      </>
   );
};

export default DemoBox;
