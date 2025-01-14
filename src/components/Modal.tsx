import { Button } from "./Button";

interface ModalProps {
  title: string;
  msg: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ title, msg, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-5">
      <div className="bg-white rounded-lg p-6 shadow-lg text-center">
        <h1 className="text-md font-bold mb-4">{title}</h1>
        <p className="text-sm mb-4">{msg}</p>
        <Button
          onClick={onClose}
          size="sm"
          variant="default"
          outline={true}
          textColor="text-blue-500"
        >
          닫기
        </Button>
      </div>
    </div>
  );
};

export default Modal;
