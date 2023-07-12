import { useState, useEffect } from 'react';
import { CssProperty } from './enums';
import Slider from './components/Slider';
import CheckBox from './components/CheckBox';
import ColorPicker from './components/ColorPicker';
import DemoBox from './components/DemoBox';
import './style/index.css';
import { hexToRgb, Rgb } from './utlis';

function App() {
   const [offsetX, setOffsetX] = useState<string>('5');
   const [offsetY, setOffsetY] = useState<string>('5');
   const [blurRadius, setBlurRadius] = useState<string>('5');
   const [spreadRadius, setSpreadRadius] = useState<string>('5');
   const [inset, setInset] = useState<boolean>(false);
   const [color, setColor] = useState<string>('#333333');
   const [colorAlpha, setColorAlpha] = useState<string>('1');
   const [cssValue, setCssValue] = useState<string>('10px 10px 0px 0px #333');

   useEffect(() => {
      const rgb: Rgb = hexToRgb(color);
      setCssValue(
         `${offsetX}px ${offsetY}px ${blurRadius}px ${spreadRadius}px rgba(${
            rgb.r
         }, ${rgb.g}, ${rgb.b}, ${colorAlpha}) ${inset ? 'inset' : ''}`
      );
   }, [offsetX, offsetY, blurRadius, spreadRadius, inset, color, colorAlpha]);

   return (
      <>
         <h1>css generator</h1>

         <div className="container col-2">
            <form
               onSubmit={(e) => {
                  e.preventDefault();
               }}
               className="container"
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
                  sliderValue={colorAlpha}
                  setSliderValue={setColorAlpha}
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
         </div>
      </>
   );
}

export default App;
