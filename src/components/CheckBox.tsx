import { useRef } from 'react';

interface Props {
   checkBoxValue: boolean;
   setCheckBoxValue: React.Dispatch<React.SetStateAction<boolean>>;
   name: string;
}

const CheckBox = ({ checkBoxValue, setCheckBoxValue, name }: Props) => {
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
