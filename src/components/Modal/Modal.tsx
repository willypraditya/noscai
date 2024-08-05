import { XMarkIcon } from '@heroicons/react/24/outline';

import React from 'react';

import { ModalProps } from './types';

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onOk,
  okText,
  title,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-1/2 rounded-lg bg-white shadow-lg">
        <div className="flex items-center justify-between rounded-t-lg border-b bg-blue-600 p-4">
          <h2 className="text-xl font-semibold text-white">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <XMarkIcon className="size-5 text-white" />
          </button>
        </div>
        <div className="p-4">{children}</div>
        <div className="flex justify-end border-t p-4">
          <button
            onClick={onClose}
            className="mr-2 rounded bg-gray-500 px-4 py-2 font-semibold text-white hover:bg-gray-700"
          >
            Close
          </button>
          {onOk && (
            <button
              onClick={onOk}
              className="rounded bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700"
            >
              {okText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
