interface Props {
   name: string;
   valueInput: string;
   setValueInput: React.Dispatch<React.SetStateAction<string>>;
}

const Input = ({ name, valueInput, setValueInput }: Props) => {
   return (
      <div className="container-input">
         <label htmlFor={name}>{name.toUpperCase()}</label>
         <input
            type="text"
            name={name}
            id={name}
            value={valueInput}
            onInput={(e) => {
               setValueInput(e.currentTarget.value);
            }}
         />
      </div>
   );
};

export default Input;
