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
