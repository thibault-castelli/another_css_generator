import DemoBox from '../components/DemoBox';
import { CssProperty } from '../enums';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Select from '../components/Select';
import Slider from '../components/Slider';
import ColorPicker from '../components/ColorPicker';
import { Rgb, hexToRgb } from '../utlis';
import CheckBox from '../components/CheckBox';

const borderStyles = [
   'solid',
   'dotted',
   'dashed',
   'double',
   'groove',
   'ridge',
   'inset',
   'outset',
   'none',
   'hidden',
];

const Border = () => {
   const [borderWidth, setBorderWidth] = useState<string>('5');
   const [borderStyle, setBorderStyle] = useState<string>('solid');
   const [color, setColor] = useState<string>('#333333');
   const [isDetailed, setIsDetailed] = useState<boolean>(false);
   const [borderWidthTop, setBorderWidthTop] = useState<string>('10');
   const [borderWidthRight, setBorderWidthRight] = useState<string>('0');
   const [borderWidthBottom, setBorderWidthBottom] = useState<string>('10');
   const [borderWidthLeft, setBorderWidthLeft] = useState<string>('0');
   const [cssValue, setCssValue] = useState<string>('5px solid #333');

   const handleReset = () => {
      setBorderWidth('5');
      setBorderStyle('solid');
      setColor('#333333');
      setIsDetailed(false);
      setBorderWidthTop('10');
      setBorderWidthRight('0');
      setBorderWidthBottom('10');
      setBorderWidthLeft('0');
   };

   let colorRgb: Rgb = hexToRgb(color);

   useEffect(() => {
      setCssValue(
         isDetailed
            ? `${borderWidthTop}px ${borderStyle} rgb(${colorRgb.r}, ${colorRgb.g}, ${colorRgb.b});${borderWidthRight}px ${borderStyle} rgb(${colorRgb.r}, ${colorRgb.g}, ${colorRgb.b});${borderWidthBottom}px ${borderStyle} rgb(${colorRgb.r}, ${colorRgb.g}, ${colorRgb.b});${borderWidthLeft}px ${borderStyle} rgb(${colorRgb.r}, ${colorRgb.g}, ${colorRgb.b})`
            : `${borderWidth}px ${borderStyle} rgb(${colorRgb.r}, ${colorRgb.g}, ${colorRgb.b})`
      );
   }, [
      borderWidth,
      borderStyle,
      color,
      isDetailed,
      borderWidthTop,
      borderWidthRight,
      borderWidthBottom,
      borderWidthLeft,
   ]);

   useEffect(() => {
      colorRgb = hexToRgb(color);
   }, [color]);

   return (
      <motion.main
         initial={{ opacity: 0.5, x: -500 }}
         animate={{ opacity: 1, x: 0 }}
         transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
         }}
      >
         <h2>border</h2>
         <section className="container col-2">
            <form>
               <AnimatePresence>
                  {isDetailed ? (
                     <motion.div
                        initial={{ scale: 0.5 }}
                        animate={{ scale: 1 }}
                        exit={{ height: 0, opacity: 0, scale: 0 }}
                        key="1"
                     >
                        <Slider
                           minSlider={0}
                           maxSlider={100}
                           name="border-width-top"
                           sliderValue={borderWidthTop}
                           setSliderValue={setBorderWidthTop}
                           unit="px"
                        />
                        <Slider
                           minSlider={0}
                           maxSlider={100}
                           name="border-width-right"
                           sliderValue={borderWidthRight}
                           setSliderValue={setBorderWidthRight}
                           unit="px"
                        />
                        <Slider
                           minSlider={0}
                           maxSlider={100}
                           name="border-width-bottom"
                           sliderValue={borderWidthBottom}
                           setSliderValue={setBorderWidthBottom}
                           unit="px"
                        />
                        <Slider
                           minSlider={0}
                           maxSlider={100}
                           name="border-width-left"
                           sliderValue={borderWidthLeft}
                           setSliderValue={setBorderWidthLeft}
                           unit="px"
                        />
                     </motion.div>
                  ) : (
                     <motion.div
                        initial={{ scale: 0.5 }}
                        animate={{ scale: 1 }}
                        exit={{ height: 0, opacity: 0, scale: 0 }}
                     >
                        <Slider
                           minSlider={0}
                           maxSlider={100}
                           name="border-width"
                           sliderValue={borderWidth}
                           setSliderValue={setBorderWidth}
                           key="2"
                           unit="px"
                        />
                     </motion.div>
                  )}
               </AnimatePresence>

               <CheckBox
                  checkBoxValue={isDetailed}
                  setCheckBoxValue={setIsDetailed}
                  name="detailed-borders"
               />
               <Select
                  options={borderStyles}
                  name="border-style"
                  selectValue={borderStyle}
                  setSelectValue={setBorderStyle}
               />
               <ColorPicker
                  colorValue={color}
                  setColorValue={setColor}
                  name="border-color"
               />
               <button type="reset" onClick={handleReset}>
                  Reset
               </button>
            </form>
            {isDetailed ? (
               <DemoBox
                  cssProperty={CssProperty.borderDetailed}
                  cssValue={cssValue}
               />
            ) : (
               <DemoBox cssProperty={CssProperty.border} cssValue={cssValue} />
            )}
         </section>
      </motion.main>
   );
};

export default Border;
