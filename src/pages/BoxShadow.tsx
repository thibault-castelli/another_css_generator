import { useState, useEffect } from 'react';
import { hexToRgb, Rgb } from '../utlis';
import { CssProperty } from '../enums';
import Slider from '../components/Slider';
import CheckBox from '../components/CheckBox';
import ColorPicker from '../components/ColorPicker';
import DemoBox from '../components/DemoBox';
import { motion } from 'framer-motion';

const BoxShadow = () => {
   const [offsetX, setOffsetX] = useState<string>('5');
   const [offsetY, setOffsetY] = useState<string>('5');
   const [blurRadius, setBlurRadius] = useState<string>('5');
   const [spreadRadius, setSpreadRadius] = useState<string>('5');
   const [inset, setInset] = useState<boolean>(false);
   const [color, setColor] = useState<string>('#333333');
   const [opacity, setOpacity] = useState<string>('0.8');
   const [cssValue, setCssValue] = useState<string>('10px 10px 0px 0px #333');

   let colorRgb: Rgb = hexToRgb(color);

   useEffect(() => {
      setCssValue(
         `${offsetX}px ${offsetY}px ${blurRadius}px ${spreadRadius}px rgba(${
            colorRgb.r
         }, ${colorRgb.g}, ${colorRgb.b}, ${opacity}) ${inset ? 'inset' : ''}`
      );
   }, [offsetX, offsetY, blurRadius, spreadRadius, inset, color, opacity]);

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
         <h2>box-shadow</h2>
         <section className="container col-2">
            <form
               onSubmit={(e) => {
                  e.preventDefault();
               }}
            >
               <Slider
                  minSlider={-50}
                  maxSlider={50}
                  sliderValue={offsetX}
                  setSliderValue={setOffsetX}
                  name="offset-x"
               />
               <Slider
                  minSlider={-50}
                  maxSlider={50}
                  sliderValue={offsetY}
                  setSliderValue={setOffsetY}
                  name="offset-y"
               />
               <Slider
                  minSlider={0}
                  maxSlider={40}
                  sliderValue={blurRadius}
                  setSliderValue={setBlurRadius}
                  name="blur-radius"
               />
               <Slider
                  minSlider={0}
                  maxSlider={50}
                  sliderValue={spreadRadius}
                  setSliderValue={setSpreadRadius}
                  name="spread-radius"
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
                  name="color"
                  colorValue={color}
                  setColorValue={setColor}
               />
               <CheckBox
                  checkBoxValue={inset}
                  setCheckBoxValue={setInset}
                  name="inset"
               />
            </form>

            <DemoBox cssProperty={CssProperty.boxShadow} cssValue={cssValue} />
         </section>
      </motion.main>
   );
};

export default BoxShadow;
