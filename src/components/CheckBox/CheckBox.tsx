import './checkbox.css';

interface Props {
   checkBoxValue: boolean;
   setCheckBoxValue: React.Dispatch<React.SetStateAction<boolean>>;
   name: string;
}

const CheckBox = ({ checkBoxValue, setCheckBoxValue, name }: Props) => {
   return (
      <div className="container-checkbox">
         <label htmlFor={`${name}-checkbox`}>{name.toUpperCase()}</label>
         <input
            type="checkbox"
            name={`${name}-checkbox`}
            id={`${name}-checkbox`}
            checked={checkBoxValue}
            onChange={(e) => {
               setCheckBoxValue(e.currentTarget.checked);
            }}
         />
      </div>
   );
};

export default CheckBox;
