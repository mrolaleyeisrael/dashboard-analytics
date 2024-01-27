import { useModalStore } from "../store/store";
import Modal from 'react-modal'

// Assuming that your useModalStore hook returns an object with these properties
interface ModalStore {
  isOpen: boolean;
  toggleModal: () => void;
}

const ModalComponent: React.FC = () => {
  const { isOpen, toggleModal } = useModalStore() as ModalStore;
  return (
    <Modal isOpen={isOpen} onRequestClose={toggleModal}>

      <h2>Your Modal Content Goes Here</h2>
      <button onClick={toggleModal}>Close Modal</button>
    </Modal>
  );
};

export default ModalComponent;
