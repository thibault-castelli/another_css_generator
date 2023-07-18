export const isNumber = (input: string): boolean => {
   if (input.length === 0) {
      return false;
   }

   let numberPart = input;
   if (input[0] === '-') {
      numberPart = input.slice(1);
   }

   // 0 = 48; 9 = 57; a = 97; f = 102
   for (let i = 0; i < numberPart.length; i++) {
      const char = numberPart.charCodeAt(i);

      if (char < 48 || char > 57) {
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

   // 0 = 48; 9 = 57; a = 97; f = 102
   for (let i = 0; i < hexValue.length; i++) {
      const char = hexValue.charCodeAt(i);

      if (char < 48 || char > 102) {
         return false;
      }
      if (char > 57 && char < 97) {
         return false;
      }
   }

   return true;
};
