import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';

import { useState } from 'react';

import { FormFieldType, FormType, Id } from '../../types';
import FormModal from '../FormModal/FormModal';

interface AnamnesisItemProps {
  form: FormType;
  updateForm: (
    formId: Id,
    label: string,
    type: FormFieldType,
    choices?: string[],
  ) => void;
  deleteForm: (id: Id) => void;
}

const AnamnesisItem = ({
  form,
  updateForm,
  deleteForm,
}: AnamnesisItemProps) => {
  const [isEditFormModalOpen, setIsEditFormModalOpen] = useState(false);

  const handleUpdateForm = (
    label: string,
    type: FormFieldType,
    choices?: string[],
  ) => {
    updateForm(form.id, label, type, choices);
    setIsEditFormModalOpen(false);
  };

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: form.id,
    data: {
      type: 'Form',
      form,
    },
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="flex min-h-[100px] w-full cursor-grab items-start justify-between rounded bg-blue-400 p-4 opacity-40"
      />
    );
  }

  const renderFormInput = () => {
    switch (form.type) {
      case 'shortText':
        return (
          <input
            type="text"
            className="w-full rounded border border-black px-3 py-2 shadow"
          />
        );
      case 'longText':
        return (
          <textarea className="w-full rounded border border-black px-3 py-2 shadow" />
        );
      case 'multipleChoice':
        return (
          <div className="flex flex-col gap-2">
            {form.choices?.map((choice, index) => (
              <label key={index} className="flex items-center gap-2 text-white">
                <input
                  type="checkbox"
                  value={choice}
                  className="form-checkbox"
                />
                {choice}
              </label>
            ))}
          </div>
        );
      case 'time':
        return (
          <input
            type="datetime-local"
            className="w-full rounded border border-black px-3 py-2 shadow"
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        className="flex w-full cursor-grab items-start justify-between rounded bg-blue-600 p-4"
      >
        <div className="flex w-full flex-col gap-2">
          <div className="flex w-full justify-between">
            <div className="font-semibold text-white">{form.label}</div>
            <div className="flex items-center gap-4">
              <button onClick={() => setIsEditFormModalOpen(true)}>
                <PencilIcon className="size-5 text-white" />
              </button>

              <button onClick={() => deleteForm(form.id)}>
                <TrashIcon className="size-5 text-white" />
              </button>
            </div>
          </div>

          <div>{renderFormInput()}</div>
        </div>
      </div>

      {/* Edit Form Modal */}
      <FormModal
        isOpen={isEditFormModalOpen}
        onClose={() => setIsEditFormModalOpen(false)}
        onOk={handleUpdateForm}
        isEdit={true}
        form={form}
      />
    </>
  );
};

export default AnamnesisItem;
