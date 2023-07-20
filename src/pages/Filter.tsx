import DemoBox from '../components/DemoBox/DemoBox';
import ResetBtn from '../components/ResetBtn/ResetBtn';
import Slider from '../components/Slider/Slider';
import { CssProperty } from '../enums';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Filter = () => {
   const [blur, setBlur] = useState<string>('0');
   const [brightness, setBirghtness] = useState<string>('100');
   const [contrast, setContrast] = useState<string>('100');
   const [grayscale, setGrayscale] = useState<string>('0');
   const [hueRotate, setHueRotate] = useState<string>('0');
   const [invert, setInvert] = useState<string>('0');
   const [opacity, setOpacity] = useState<string>('100');
   const [saturate, setSaturate] = useState<string>('100');
   const [sepia, setSepia] = useState<string>('0');
   const [cssValue, setCssValue] = useState<string>('');

   const handleReset = () => {
      setBlur('0');
      setBirghtness('100');
      setContrast('100');
      setGrayscale('0');
      setHueRotate('0');
      setInvert('0');
      setOpacity('100');
      setSaturate('100');
      setSepia('0');
   };

   useEffect(() => {
      setCssValue(
         `blur(${blur}px);brightness(${brightness}%);contrast(${contrast}%);grayscale(${grayscale}%);hue-rotate(${hueRotate}deg);invert(${invert}%);opacity(${opacity}%);saturate(${saturate}%);sepia(${sepia}%)`
      );
   }, [
      blur,
      brightness,
      contrast,
      grayscale,
      hueRotate,
      invert,
      opacity,
      saturate,
      sepia,
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
         <h2>filter</h2>
         <section className="col-2 container">
            <form>
               <Slider
                  maxSlider={30}
                  minSlider={0}
                  name="blur"
                  sliderValue={blur}
                  setSliderValue={setBlur}
                  unit="px"
               />
               <Slider
                  maxSlider={200}
                  minSlider={0}
                  name="brightness"
                  sliderValue={brightness}
                  setSliderValue={setBirghtness}
                  unit="%"
                  defaultValue="100"
               />
               <Slider
                  maxSlider={200}
                  minSlider={0}
                  name="contrast"
                  sliderValue={contrast}
                  setSliderValue={setContrast}
                  unit="%"
                  defaultValue="100"
               />
               <Slider
                  maxSlider={100}
                  minSlider={0}
                  name="grayscale"
                  sliderValue={grayscale}
                  setSliderValue={setGrayscale}
                  unit="%"
               />
               <Slider
                  maxSlider={360}
                  minSlider={0}
                  name="hue-rotate"
                  sliderValue={hueRotate}
                  setSliderValue={setHueRotate}
                  unit="deg"
               />
               <Slider
                  maxSlider={100}
                  minSlider={0}
                  name="invert"
                  sliderValue={invert}
                  setSliderValue={setInvert}
                  unit="%"
               />
               <Slider
                  maxSlider={100}
                  minSlider={0}
                  name="opacity"
                  sliderValue={opacity}
                  setSliderValue={setOpacity}
                  unit="%"
                  defaultValue="100"
               />
               <Slider
                  maxSlider={200}
                  minSlider={0}
                  name="saturate"
                  sliderValue={saturate}
                  setSliderValue={setSaturate}
                  unit="%"
                  defaultValue="100"
               />
               <Slider
                  maxSlider={100}
                  minSlider={0}
                  name="sepia"
                  sliderValue={sepia}
                  setSliderValue={setSepia}
                  unit="%"
               />

               <ResetBtn handleReset={handleReset} />
            </form>
            <DemoBox cssProperty={CssProperty.filter} cssValue={cssValue} />
         </section>
      </motion.main>
   );
};

export default Filter;
