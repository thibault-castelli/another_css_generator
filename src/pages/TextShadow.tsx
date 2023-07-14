import DemoBox from '../components/DemoBox';
import Slider from '../components/Slider';
import { CssProperty } from '../enums';
import { useState, useEffect } from 'react';
import { Rgb, hexToRgb } from '../utlis';
import ColorPicker from '../components/ColorPicker';
import { motion } from 'framer-motion';

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
      <motion.main
         initial={{ opacity: 0.5, x: -1000 }}
         animate={{ opacity: 1, x: 0 }}
         transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
         }}
      >
         <h2>text-shadow</h2>
         <section className="container col-2">
            <form>
               <Slider
                  minSlider={-50}
                  maxSlider={50}
                  name="offset-x"
                  sliderValue={offsetX}
                  setSliderValue={setOffsetX}
                  unit="px"
               />
               <Slider
                  minSlider={-50}
                  maxSlider={50}
                  name="offset-y"
                  sliderValue={offsetY}
                  setSliderValue={setOffsetY}
                  unit="px"
               />
               <Slider
                  minSlider={0}
                  maxSlider={30}
                  name="blur-radius"
                  sliderValue={blur}
                  setSliderValue={setBlur}
                  unit="px"
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
      </motion.main>
   );
};

export default TextShadow;
