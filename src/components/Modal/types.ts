export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  okText?: string;
  onOk: () => void;
  title: string;
  children: React.ReactNode;
}
