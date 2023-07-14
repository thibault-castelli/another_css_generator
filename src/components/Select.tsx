interface Props {
   options: string[];
   name: string;
   selectValue: string;
   setSelectValue: React.Dispatch<React.SetStateAction<string>>;
}

const Select = ({ options, name, selectValue, setSelectValue }: Props) => {
   return (
      <div className="select-container">
         <label htmlFor={name}>{name.toUpperCase()}</label>
         <select
            name={name}
            id={name}
            value={selectValue}
            onChange={(e) => {
               setSelectValue(e.currentTarget.value);
            }}
         >
            {options.map((option) => {
               return (
                  <option value={option} key={option}>
                     {option.toUpperCase()}
                  </option>
               );
            })}
         </select>
      </div>
   );
};

export default Select;
