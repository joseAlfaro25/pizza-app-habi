import React from 'react'
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};



interface Props {
    modalIsOpen:boolean,
    closeModal:()=>void,
    children: React.ReactChild;
}

const Modals = ({modalIsOpen,closeModal,children}: Props) => {
  return (
    <div>
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
        
      {children}
    </Modal>
  </div>
  )
}

export default Modals