import { useRef } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import './modal.css';

interface Props {
   isActive: boolean;
   content: string;
}

const Modal = ({ isActive, content }: Props) => {
   const modalRef = useRef<HTMLDivElement>(null);
   return (
      <div className={`modal ${isActive ? 'active' : ''}`} ref={modalRef}>
         <p>{content}</p>
         <button
            type="button"
            onClick={() => {
               modalRef.current?.classList.remove('active');
            }}
         >
            <AiOutlineCloseCircle />
         </button>
      </div>
   );
};

export default Modal;
