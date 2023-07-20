import './inputtext.css';

interface Props {
   /** Name of the input label */
   name: string;
   /** State value for the input value */
   inputValue: string;
   /** State function */
   setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

const InputText = ({ inputValue, setInputValue, name }: Props) => {
   return (
      <div className="container-input">
         <label htmlFor={name}>{name.toUpperCase()}</label>
         <input
            type="text"
            name={name}
            id={name}
            value={inputValue}
            onInput={(e) => {
               setInputValue(e.currentTarget.value);
            }}
         />
      </div>
   );
};

export default InputText;
