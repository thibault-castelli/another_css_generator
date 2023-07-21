import ColorPicker from '../ColorPicker/ColorPicker';
import './settingsdemobox.css';

interface Props {
   backgroundColor: string;
   setBackgroundColor: React.Dispatch<React.SetStateAction<string>>;
   image: string;
   setImage: React.Dispatch<React.SetStateAction<string>>;
}

const SettingsDemoBox = () => {
   return (
      <div>
         <h2>Settings</h2>
         <form>
            {/* <ColorPicker
               colorValue={backgroundColor}
               setColorValue={setBackgroundColor}
               name="background-color"
            /> */}
         </form>
      </div>
   );
};

export default SettingsDemoBox;
