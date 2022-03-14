import React from "react";
import Modal from "../../../common/components/Modal";
import { IOrder } from "../types/product";

interface Props {
  data: IOrder;
}

const CardModal = ({ data }: Props) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className={"card-modal"}>
      <button
        onClick={() => {
          openModal();
        }}
        className={"button-register"}
      >
        Detalles
      </button>
      <Modal modalIsOpen={modalIsOpen} closeModal={closeModal}>
        <div>
          <h4>Detalles de la compra</h4>
          <ul>
            {data.ingredients?.map((e) => (
              <li>{e.name} - {e.price}</li>
            ))}
          </ul>
          <div className={"div-button"}>
            <button
              onClick={() => {
                closeModal();
              }}
            >
              Cancelar
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CardModal;
