import { isNumber } from '../utlis';

interface Props {
   minSlider: number;
   maxSlider: number;
   sliderValue: string;
   setSliderValue: React.Dispatch<React.SetStateAction<string>>;
   name: string;
   step?: string;
}

const Slider = ({
   minSlider,
   maxSlider,
   sliderValue,
   setSliderValue,
   name,
   step = '1',
}: Props) => {
   const handleInputNumber = (e: React.ChangeEvent<HTMLInputElement>): void => {
      let value = e.currentTarget.value;
      if (isNumber(value)) {
         const nb = parseFloat(value);

         if (nb > maxSlider) {
            value = maxSlider.toString();
         } else if (nb < minSlider) {
            value = minSlider.toString();
         }

         setSliderValue(value);
      } else {
         setSliderValue('');
      }
   };

   return (
      <div className="slider-container">
         <div className="label-container">
            <label htmlFor={`${name}-number`}>{name.toUpperCase()}</label>
            <input
               type="text"
               name={`${name}-number`}
               id={`${name}-number`}
               min={minSlider}
               max={maxSlider}
               value={sliderValue}
               onChange={(e) => {
                  handleInputNumber(e);
               }}
               onBlur={(e) => {
                  if (e.currentTarget.value === '') {
                     setSliderValue('0');
                  }
               }}
            />
         </div>
         <label htmlFor={`${name}-slider`} className="visually-hidden">
            {name}
         </label>
         <input
            type="range"
            name={`${name}-slider`}
            id={`${name}-slider`}
            min={minSlider}
            max={maxSlider}
            value={sliderValue}
            step={step}
            onInput={(e) => {
               setSliderValue(e.currentTarget.value);
            }}
            onMouseLeave={(e) => {
               e.currentTarget.blur();
            }}
            onDoubleClick={() => {
               setSliderValue('0');
            }}
         />
      </div>
   );
};

export default Slider;
