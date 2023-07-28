import DemoBox from '../components/DemoBox/DemoBox';
import { CssProperty } from '../enums';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Select from '../components/Select/Select';
import ColorPicker from '../components/ColorPicker/ColorPicker';
import Slider from '../components/Slider/Slider';
import CheckBox from '../components/CheckBox/CheckBox';
import ResetBtn from '../components/ResetBtn/ResetBtn';
import DoubleBtn from '../components/DoubleBtn/DoubleBtn';

const positions = [
   'top left',
   'top center',
   'top right',
   'center left',
   'center center',
   'center right',
   'bottom left',
   'bottom center',
   'bottom right',
];

const Gradient = () => {
   const [position, setPosition] = useState<string>('center center');
   const [angle, setAngle] = useState<string>('90');
   const [startColor, setStartColor] = useState<string>('#333333');
   const [endColor, setEndColor] = useState<string>('#888888');
   const [stopStartColor, setStopStartColor] = useState<string>('10');
   const [stopEndColor, setStopEndColor] = useState<string>('90');
   const [isLinear, setIsLinear] = useState<boolean>(true);
   const [isElliptical, setIsElliptical] = useState<boolean>(false);
   const [isFarthestCorner, setIsFarthestCorner] = useState<boolean>(false);
   const [cssValue, setCssValue] = useState<string>('');

   const handleReset = () => {
      setPosition('center center');
      setAngle('90');
      setStartColor('#333333');
      setEndColor('#888888');
      setStopStartColor('10');
      setStopEndColor('90');
      setIsLinear(true);
      setIsElliptical(false);
      setIsFarthestCorner(false);
   };

   useEffect(() => {
      isLinear
         ? setCssValue(
              `linear-gradient(${angle}deg, ${startColor} ${stopStartColor}%, ${endColor} ${stopEndColor}%)`
           )
         : setCssValue(
              `radial-gradient(${isElliptical ? 'ellipse' : 'circle'} ${
                 isFarthestCorner ? 'farthest-corner' : 'farthest-side'
              } at ${position}, ${startColor} ${stopStartColor}%, ${endColor} ${stopEndColor}%)`
           );
   }, [
      position,
      angle,
      startColor,
      endColor,
      stopStartColor,
      stopEndColor,
      isLinear,
      isElliptical,
      isFarthestCorner,
   ]);

   return (
      <motion.main
         initial={{ opacity: 0.5, x: -500 }}
         animate={{ opacity: 1, x: 0 }}
         transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
         }}
      >
         <h2>gradient</h2>
         <section className="container col-2">
            <form style={{ minHeight: '705px' }}>
               <AnimatePresence>
                  {isLinear ? (
                     <motion.div
                        initial={{ scale: 0.5 }}
                        animate={{ scale: 1 }}
                        exit={{ height: 0, opacity: 0, scale: 0 }}
                        key="1"
                     >
                        <Slider
                           maxSlider={360}
                           minSlider={0}
                           name="angle"
                           sliderValue={angle}
                           setSliderValue={setAngle}
                           unit="deg"
                        />
                     </motion.div>
                  ) : (
                     <motion.div
                        initial={{ scale: 0.5 }}
                        animate={{ scale: 1 }}
                        exit={{ height: 0, opacity: 0, scale: 0 }}
                        key="2"
                     >
                        <Select
                           name="position"
                           options={positions}
                           selectValue={position}
                           setSelectValue={setPosition}
                        />
                        <CheckBox
                           checkBoxValue={isElliptical}
                           setCheckBoxValue={setIsElliptical}
                           name="elliptical"
                        />
                        <CheckBox
                           checkBoxValue={isFarthestCorner}
                           setCheckBoxValue={setIsFarthestCorner}
                           name="farthest-corner"
                        />
                     </motion.div>
                  )}
               </AnimatePresence>

               <DoubleBtn
                  nameBtn1="linear"
                  nameBtn2="radial"
                  setDoubleBtnValue={setIsLinear}
                  doubleBtnValue={isLinear}
               />
               <ColorPicker
                  colorValue={startColor}
                  setColorValue={setStartColor}
                  name="start-color"
               />
               <ColorPicker
                  colorValue={endColor}
                  setColorValue={setEndColor}
                  name="end-color"
               />

               <Slider
                  maxSlider={100}
                  minSlider={0}
                  name="stop-start-color"
                  sliderValue={stopStartColor}
                  setSliderValue={setStopStartColor}
                  unit="%"
               />
               <Slider
                  maxSlider={100}
                  minSlider={0}
                  name="stop-end-color"
                  sliderValue={stopEndColor}
                  setSliderValue={setStopEndColor}
                  unit="%"
                  defaultValue="100"
               />

               <ResetBtn handleReset={handleReset} />
            </form>
            <DemoBox cssProperty={CssProperty.gradient} cssValue={cssValue} />
         </section>
      </motion.main>
   );
};

export default Gradient;
