import './resetbtn.css';

interface Props {
   /** Function to execute when clicking the reset button */
   handleReset(): void;
   /** Name of the reset button */
   name?: string;
}

const ResetBtn = ({ handleReset, name = 'Reset' }: Props) => {
   return (
      <button
         type="reset"
         onClick={(e) => {
            handleReset();
            e.currentTarget.blur();
         }}
         onMouseDown={(e) => {
            e.currentTarget.classList.add('active');
         }}
         onMouseUp={(e) => {
            e.currentTarget.classList.remove('active');
         }}
      >
         {name}
      </button>
   );
};

export default ResetBtn;
