import { CssProperty } from '../enums';
import { useState, useEffect } from 'react';
import Slider from '../components/Slider';
import CheckBox from '../components/CheckBox';
import DemoBox from '../components/DemoBox';
import { AnimatePresence, motion } from 'framer-motion';

const BorderRadius = () => {
   const [isDetailBorder, setIsDetailBorder] = useState<boolean>(false);
   const [isPercentage, setIsPercentage] = useState<boolean>(false);
   const [topLeft, setTopLeft] = useState<string>('10');
   const [topRight, setTopRight] = useState<string>('10');
   const [bottomRight, setbottomRight] = useState<string>('10');
   const [bottomLeft, setbottomLeft] = useState<string>('10');
   const [all, setAll] = useState<string>('10');
   const [cssValue, setCssValue] = useState<string>('0px');

   useEffect(() => {
      const unit: string = isPercentage ? '%' : 'px';
      setCssValue(
         isDetailBorder
            ? `${topLeft}${unit} ${topRight}${unit} ${bottomRight}${unit} ${bottomLeft}${unit}`
            : `${all}${unit}`
      );
   }, [
      topLeft,
      topRight,
      bottomLeft,
      bottomRight,
      isDetailBorder,
      isPercentage,
      all,
   ]);

   return (
      <motion.main
         initial={{ opacity: 0.5, x: -1000 }}
         animate={{ opacity: 1, x: 0 }}
         transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
         }}
      >
         <h2>border-radius</h2>
         <section className="container col-2">
            <form>
               <AnimatePresence>
                  {isDetailBorder ? (
                     <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ height: 0, opacity: 0, scale: 0 }}
                        key="1"
                     >
                        <Slider
                           minSlider={0}
                           maxSlider={100}
                           name="top-left"
                           sliderValue={topLeft}
                           setSliderValue={setTopLeft}
                        />
                        <Slider
                           minSlider={0}
                           maxSlider={100}
                           name="top-right"
                           sliderValue={topRight}
                           setSliderValue={setTopRight}
                        />
                        <Slider
                           minSlider={0}
                           maxSlider={100}
                           name="bottom-left"
                           sliderValue={bottomLeft}
                           setSliderValue={setbottomLeft}
                        />
                        <Slider
                           minSlider={0}
                           maxSlider={100}
                           name="bottom-right"
                           sliderValue={bottomRight}
                           setSliderValue={setbottomRight}
                        />
                     </motion.div>
                  ) : (
                     <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ height: 0, opacity: 0, scale: 0 }}
                        key="2"
                     >
                        <Slider
                           minSlider={0}
                           maxSlider={100}
                           name="all-border"
                           sliderValue={all}
                           setSliderValue={setAll}
                        />
                     </motion.div>
                  )}
               </AnimatePresence>
               <CheckBox
                  name="detailed-borders"
                  checkBoxValue={isDetailBorder}
                  setCheckBoxValue={setIsDetailBorder}
               />
               <CheckBox
                  name="use-percentage"
                  checkBoxValue={isPercentage}
                  setCheckBoxValue={setIsPercentage}
               />
            </form>

            <DemoBox
               cssProperty={CssProperty.borderRadius}
               cssValue={cssValue}
            />
         </section>
      </motion.main>
   );
};

export default BorderRadius;
