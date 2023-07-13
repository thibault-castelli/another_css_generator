import { CssProperty } from '../enums';
import { useState, useEffect } from 'react';
import Slider from '../components/Slider';
import CheckBox from '../components/CheckBox';
import DemoBox from '../components/DemoBox';
import { motion, backOut } from 'framer-motion';

const BorderRadius = () => {
   const [isDetailBorder, setIsDetailBorder] = useState<boolean>(false);
   const [isPercentage, setIsPercentage] = useState<boolean>(false);
   const [topLeft, setTopLeft] = useState<string>('0');
   const [topRight, setTopRight] = useState<string>('0');
   const [bottomRight, setbottomRight] = useState<string>('0');
   const [bottomLeft, setbottomLeft] = useState<string>('0');
   const [all, setAll] = useState<string>('0');
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
         initial={{ opacity: 0, x: -1000 }}
         animate={{ opacity: 1, x: 0 }}
         transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
         }}
      >
         <h2>border-radius</h2>
         <section className="container col-2">
            <form>
               {isDetailBorder ? (
                  <>
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
                  </>
               ) : (
                  <Slider
                     minSlider={0}
                     maxSlider={100}
                     name="all-border"
                     sliderValue={all}
                     setSliderValue={setAll}
                  />
               )}
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
