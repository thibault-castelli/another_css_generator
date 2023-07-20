import { useRef } from 'react';
import './checkbox.css';

interface Props {
   /** State value for the checkbox to keep track of the check value */
   checkBoxValue: boolean;
   /** State function */
   setCheckBoxValue: React.Dispatch<React.SetStateAction<boolean>>;
   /** Name of the checkbox label */
   name: string;
}

/**
 * Checkbox with 'on' and 'off' visual.
 */
const CheckBox = ({ checkBoxValue, setCheckBoxValue, name }: Props) => {
   // Use ref to make the checkbox focusable
   const checkboxRef = useRef<HTMLInputElement>(null);

   return (
      <div className="container-checkbox">
         <label htmlFor={`${name}-checkbox`}>{name.toUpperCase()}</label>
         <div className="checkbox-wrapper">
            <input
               className="tgl tgl-skewed"
               type="checkbox"
               name={`${name}-checkbox`}
               id={`${name}-checkbox`}
               checked={checkBoxValue}
               onChange={(e) => {
                  setCheckBoxValue(e.currentTarget.checked);
               }}
               ref={checkboxRef}
            />
            <label
               className="tgl-btn"
               data-tg-off="OFF"
               data-tg-on="ON"
               htmlFor={`${name}-checkbox`}
               tabIndex={0}
               onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                     setCheckBoxValue(!checkboxRef.current?.checked);
                  }
               }}
            ></label>
         </div>
      </div>
   );
};

export default CheckBox;
