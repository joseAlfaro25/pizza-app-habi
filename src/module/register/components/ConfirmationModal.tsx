import React from 'react'
import Modal from '../../../common/components/Modal';
import './css/modalConfirmation.css'
import image from '../../../common/image/add.png';


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
        <button onClick={()=>{openModal();submitInfo()}} className={'button-register'}><b>Registrar</b></button>
        <Modal modalIsOpen={modalIsOpen} closeModal={closeModal}>
           <div>
               <img src={image} alt={'comfimacion'} height={150}/>
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