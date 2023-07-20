/**
 * Check if a string can be a number.
 * @param input Value to check if it's a number.
 * @returns True if the parameter is a number, otherwise false.
 */
export const isNumber = (input: string): boolean => {
   // Prevent error from empty string
   if (input.length === 0) {
      return false;
   }

   // Remove the negative sign if there is one
   let numberPart = input;
   if (input[0] === '-') {
      numberPart = input.slice(1);
   }

   // ASCII: 0 = 48 | 9 = 57
   for (let i = 0; i < numberPart.length; i++) {
      const char = numberPart.charCodeAt(i);

      // If a char is something else than a number is ASCII table
      if (char < 48 || char > 57) {
         return false;
      }
   }

   return true;
};

import { Rgb } from './interfaces';

/**
 * Transform a hex value to an rgb object.
 * @param hex Hex value to transform.
 * @returns An object with red (r), green (g) and blue (b) properites.
 */
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

/**
 * Check if a string can be a hex value.
 * @param hex Value to check if it's a hex value.
 * @returns True if the parameter is a hex value, otherwise false.
 */
export const isHex = (hex: string): boolean => {
   if (hex.length > 7 || hex.length < 6) {
      return false;
   }

   // Remove the # if there is one
   let hexValue: string = hex;
   if (hex.length === 7 && hex[0] === '#') {
      hexValue = hex.slice(1);
   }

   // ASCII: 0 = 48 | 9 = 57 | a = 97 | f = 102
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
