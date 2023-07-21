import { ReactElement, useRef } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import './modal.css';

interface Props {
   /** State value to know if the modal should be visible or not */
   isActive: boolean;
   /** State function */
   setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
   /** Content to display in the modal */
   content: ReactElement;
}

/** Modal window that appears on top of all other content */
const Modal = ({ isActive, setIsActive, content }: Props) => {
   const modalRef = useRef<HTMLDivElement>(null);
   return (
      <div className={`modal ${isActive ? 'active' : ''}`} ref={modalRef}>
         {content}
         <button
            type="button"
            onClick={() => {
               modalRef.current?.classList.remove('active');
               setIsActive(false);
            }}
         >
            <AiOutlineCloseCircle />
         </button>
      </div>
   );
};

export default Modal;
