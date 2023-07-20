import { useRef, useEffect } from 'react';
import './doublebtn.css';

interface Props {
   /** State value to keep track of which button is active */
   doubleBtnValue: boolean;
   /** State function */
   setDoubleBtnValue: React.Dispatch<React.SetStateAction<boolean>>;
   /** Name of the left button */
   nameBtn1: string;
   /** Name of the right button */
   nameBtn2: string;
}

/** Two buttons working like radio buttons */
const DoubleBtn = ({
   doubleBtnValue,
   setDoubleBtnValue,
   nameBtn1,
   nameBtn2,
}: Props) => {
   const btn1Ref = useRef<HTMLButtonElement>(null);
   const btn2Ref = useRef<HTMLButtonElement>(null);

   useEffect(() => {
      // If first button is active
      if (doubleBtnValue) {
         btn1Ref.current?.classList.add('active');
         btn2Ref.current?.classList.remove('active');
      }
      // If second button is active
      else {
         btn1Ref.current?.classList.remove('active');
         btn2Ref.current?.classList.add('active');
      }
   }, [doubleBtnValue]);

   return (
      <div className="double-btn-container">
         <button
            type="button"
            className="active"
            onClick={() => {
               setDoubleBtnValue(true);
            }}
            ref={btn1Ref}
         >
            {nameBtn1.toUpperCase()}
         </button>
         <button
            type="button"
            onClick={() => {
               setDoubleBtnValue(false);
            }}
            ref={btn2Ref}
         >
            {nameBtn2.toUpperCase()}
         </button>
      </div>
   );
};

export default DoubleBtn;
