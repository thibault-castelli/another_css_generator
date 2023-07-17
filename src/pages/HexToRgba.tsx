import DemoBox from '../components/DemoBox';
import { CssProperty } from '../enums';
import { useState, useEffect } from 'react';
import { hexToRgb } from '../utlis';
import { Rgb } from '../interfaces';
import Slider from '../components/Slider';
import { motion } from 'framer-motion';
import ColorPicker from '../components/ColorPicker';

const HexToRgba = () => {
   const [color, setColor] = useState<string>('#333333');
   const [opacity, setOpacity] = useState<string>('1');
   const [cssValue, setCssValue] = useState<string>('rgba(0, 0, 0, 1)');

   const handleReset = () => {
      setColor('#333333');
      setOpacity('1');
   };

   let colorRgb: Rgb;

   useEffect(() => {
      colorRgb = hexToRgb(color);
      setCssValue(
         `rgba(${colorRgb.r}, ${colorRgb.g}, ${colorRgb.b}, ${opacity})`
      );
   }, [color, opacity]);

   return (
      <motion.main
         initial={{ opacity: 0.5, x: -500 }}
         animate={{ opacity: 1, x: 0 }}
         transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
         }}
      >
         <h2>hex-to-rgba</h2>
         <section className="container col-2">
            <form>
               <Slider
                  maxSlider={1}
                  minSlider={0}
                  name="opacity"
                  sliderValue={opacity}
                  setSliderValue={setOpacity}
                  step="0.01"
               />
               <ColorPicker
                  colorValue={color}
                  setColorValue={setColor}
                  name="hex-color"
               />
               <button type="reset" onClick={handleReset}>
                  Reset
               </button>
            </form>
            <DemoBox cssProperty={CssProperty.color} cssValue={cssValue} />
         </section>
      </motion.main>
   );
};

export default HexToRgba;
