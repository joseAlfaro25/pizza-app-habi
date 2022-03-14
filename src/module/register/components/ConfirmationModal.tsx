import React from 'react'
import Modal from '../../../common/components/Modal';
import './css/modalConfirmation.css'


interface Props{
    submitInfo:()=>void;
    handleSubmit:()=>void
}

const ConfirmationModal = ({submitInfo, handleSubmit}:Props) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
      setIsOpen(true);
    }
    function closeModal() {
      setIsOpen(false);
    }
  return (
    <div className={'modal-container'}>
        <button onClick={()=>{openModal();submitInfo()}} className={'button-register'}>Registrar</button>
        <Modal modalIsOpen={modalIsOpen} closeModal={closeModal}>
           <div>
               <h3>Desea guardas la información</h3>
               <div className={'div-button'}>
               <button onClick={()=>{handleSubmit();closeModal()}}>Aceptar</button>
               <button onClick={()=>{closeModal()}}>Cancelar</button>
               </div>
           </div>
        </Modal>
    </div>
  )
}

export default ConfirmationModal