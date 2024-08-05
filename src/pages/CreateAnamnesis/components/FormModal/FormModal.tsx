import React, { useEffect, useState } from 'react';

import Modal from '@/components/Modal/Modal';

import { FormFieldType, FormType } from '../../types';

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOk: (label: string, type: FormFieldType, choices?: string[]) => void;
  isEdit?: boolean;
  form?: FormType;
}

const FormModal: React.FC<FormModalProps> = ({
  isOpen,
  onClose,
  onOk,
  isEdit = false,
  form,
}) => {
  const [formLabel, setFormLabel] = useState('');
  const [formType, setFormType] = useState<FormFieldType>(
    FormFieldType.ShortText,
  );
  const [formChoices, setFormChoices] = useState<string[] | undefined>(
    undefined,
  );

  const handleSave = () => {
    onOk(
      formLabel,
      formType,
      formType === 'multipleChoice' ? formChoices : undefined,
    );
    setFormLabel('');
    setFormType(FormFieldType.ShortText);
    setFormChoices([]);
  };

  useEffect(() => {
    if (isOpen && isEdit && form) {
      console.log('masuk');
      setFormLabel(form?.label);
      setFormType(form?.type);
      setFormChoices(form?.choices);
    }
  }, [isOpen, isEdit, form]);

  if (!isOpen) return null;

  return (
    <Modal
      title={`${isEdit ? 'Edit' : 'Add'} Form Item`}
      isOpen={isOpen}
      onClose={onClose}
      onOk={handleSave}
      okText="Save"
    >
      <div className="flex flex-col gap-4">
        <input
          className="w-full rounded border border-black px-3 py-2 shadow"
          type="text"
          placeholder="Form Label"
          value={formLabel}
          onChange={(e) => setFormLabel(e.target.value)}
        />

        <select
          className="w-full rounded border border-black px-3 py-2 shadow"
          value={formType}
          onChange={(e) => setFormType(e.target.value as FormFieldType)}
        >
          <option value="shortText">Short Text</option>
          <option value="longText">Long Text</option>
          <option value="multipleChoice">Multiple Choice</option>
          <option value="time">Time</option>
        </select>

        {formType === 'multipleChoice' && (
          <input
            className="w-full rounded border border-black px-3 py-2 shadow"
            type="text"
            placeholder="Choices (comma-separated)"
            value={formChoices?.join(',')}
            onChange={(e) => setFormChoices(e.target.value.split(','))}
          />
        )}
      </div>
    </Modal>
  );
};

export default FormModal;
