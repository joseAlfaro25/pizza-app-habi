import React from "react";
import Modal from "../../../common/components/Modal";
import { IOrder } from "../types/product";
import image from "../../../common/image/detall.png";

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
        Más Detalles
      </button>
      <Modal modalIsOpen={modalIsOpen} closeModal={closeModal}>
        <div>
          <img src={image} alt="detalls" height={180} />
          <div className={"title-card-modal"}>
            <h3>Detalles de la compra</h3>
          </div>
          <div className={"div-info"}>
            <div>
              <b>Fecha:</b> {data.date}
            </div>
            <div>
              <b>Pizza:</b> {data.namePizza}
            </div>
            <div>
              <b>Cliente:</b> {data.name}
            </div>
            <div>
              <b>Telefono:</b> {data.phone}
            </div>
          </div>
          <div>
            <b>Ingredientes:</b>
          </div>
          <ul>
            {!!data.ingredients &&
              data.ingredients?.map((e) => (
                <li>
                  {e.name} - {e.price}
                </li>
              ))}
          </ul>
          <div className={"text-total"}>
            <b>Total:</b> {data.price}
          </div>
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
