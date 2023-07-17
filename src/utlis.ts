export const isNumber = (input: string): boolean => {
   if (input.length === 0) {
      console.warn('An empty string cannot be a number.');
      return false;
   }

   const numberPart = input.slice(1);
   if (numberPart.includes('-')) {
      console.warn('The negative sign must be placed in front of the number');
      return false;
   }

   for (let c of input) {
      if (
         c !== '-' &&
         c !== '0' &&
         c !== '1' &&
         c !== '2' &&
         c !== '3' &&
         c !== '4' &&
         c !== '5' &&
         c !== '6' &&
         c !== '7' &&
         c !== '8' &&
         c !== '9'
      ) {
         return false;
      }
   }

   return true;
};

import { Rgb } from './interfaces';

export const hexToRgb = (hex: string): Rgb => {
   let startIndex = 0;
   let slicedHex = [];
   if (hex[0] === '#') {
      startIndex = 1;
   }
   for (let i = startIndex; i < hex.length; i += 2) {
      slicedHex.push(hex.slice(i, i + 2));
   }
   return {
      r: parseInt(slicedHex[0], 16),
      g: parseInt(slicedHex[1], 16),
      b: parseInt(slicedHex[2], 16),
   };
};

export const isHex = (hex: string): boolean => {
   if (hex.length > 7 || hex.length < 6) {
      return false;
   }

   let hexValue: string = hex;
   if (hex.length === 7 && hex[0] === '#') {
      hexValue = hex.slice(1);
   }

   return isNumber(hexValue);
};
