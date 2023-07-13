import DemoBox from '../components/DemoBox';
import Slider from '../components/Slider';
import { CssProperty } from '../enums';
import { useState, useEffect } from 'react';
import { Rgb, hexToRgb } from '../utlis';
import ColorPicker from '../components/ColorPicker';

const TextShadow = () => {
   const [offsetX, setOffsetX] = useState<string>('5');
   const [offsetY, setOffsetY] = useState<string>('5');
   const [blur, setBlur] = useState<string>('5');
   const [color, setColor] = useState<string>('#333333');
   const [opacity, setOpacity] = useState<string>('0.8');
   const [cssValue, setCssValue] = useState<string>('5px 5px 5px #333');

   let colorRgb: Rgb = hexToRgb(color);

   useEffect(() => {
      setCssValue(
         `${offsetX}px ${offsetY}px ${blur}px rgba(${colorRgb.r}, ${colorRgb.g}, ${colorRgb.b}, ${opacity})`
      );
   }, [offsetX, offsetY, blur, color, opacity]);

   useEffect(() => {
      colorRgb = hexToRgb(color);
   }, [color]);

   return (
      <main>
         <h2>text-shadow</h2>
         <section className="container col-2">
            <form>
               <Slider
                  minSlider={-50}
                  maxSlider={50}
                  name="offset-x"
                  sliderValue={offsetX}
                  setSliderValue={setOffsetX}
               />
               <Slider
                  minSlider={-50}
                  maxSlider={50}
                  name="offset-y"
                  sliderValue={offsetY}
                  setSliderValue={setOffsetY}
               />
               <Slider
                  minSlider={0}
                  maxSlider={30}
                  name="blur-radius"
                  sliderValue={blur}
                  setSliderValue={setBlur}
               />
               <Slider
                  minSlider={0}
                  maxSlider={1}
                  name="shadow-opacity"
                  sliderValue={opacity}
                  setSliderValue={setOpacity}
                  step="0.01"
               />
               <ColorPicker
                  colorValue={color}
                  setColorValue={setColor}
                  name="color"
               />
            </form>
            <DemoBox
               cssProperty={CssProperty.textShadow}
               cssValue={cssValue}
               text="This is the preview text."
            />
         </section>
      </main>
   );
};

export default TextShadow;
