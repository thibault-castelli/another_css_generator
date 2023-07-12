interface Props {
   colorValue: string;
   setColorValue: React.Dispatch<React.SetStateAction<string>>;
   name: string;
}

const ColorPicker = ({ colorValue, setColorValue, name }: Props) => {
   return (
      <div className="color-container">
         <label htmlFor={`${name}-color`}>{name.toUpperCase()}</label>
         <input
            type="color"
            name={`${name}-color`}
            id={`${name}-color`}
            value={colorValue}
            onChange={(e) => {
               setColorValue(e.currentTarget.value);
            }}
         />
      </div>
   );
};

export default ColorPicker;
