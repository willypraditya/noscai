import { SortableContext, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { PlusCircleIcon, TrashIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

import { useState } from 'react';

import { ContainerType, FormFieldType, FormType, Id } from '../../types';
import AnamnesisItem from '../AnamnesisItem/AnamnesisItem';
import FormModal from '../FormModal/FormModal';

interface AnamnesisContainerProps {
  container: ContainerType;
  updateContainer: (id: Id, title: string) => void;
  deleteContainer: (id: Id) => void;
  forms: FormType[];
  formsIds: Id[];
  addForm: (
    containerId: Id,
    label: string,
    type: FormFieldType,
    choices?: string[],
  ) => void;
  updateForm: (
    formId: Id,
    label: string,
    type: FormFieldType,
    choices?: string[],
  ) => void;
  deleteForm: (formId: Id) => void;
}

const AnamnesisContainer = ({
  container,
  updateContainer,
  deleteContainer,
  forms,
  formsIds,
  addForm,
  updateForm,
  deleteForm,
}: AnamnesisContainerProps) => {
  const [isEditMode, setIsEditMode] = useState(false);

  const [isAddFormModalOpen, setIsAddFormModalOpen] = useState(false);

  const handleAddForm = (
    label: string,
    type: FormFieldType,
    choices?: string[],
  ) => {
    addForm(container.id, label, type, choices);
    setIsAddFormModalOpen(false);
  };

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: container.id,
    data: {
      type: 'Container',
      container,
    },
    disabled: isEditMode,
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
        className="flex min-h-[500px] w-full flex-col rounded bg-blue-200 opacity-40"
      />
    );
  }

  return (
    <>
      <div
        ref={setNodeRef}
        style={style}
        className="flex min-h-[500px] w-full flex-col rounded bg-blue-200"
      >
        {/* Header */}
        <div
          {...attributes}
          {...listeners}
          className="flex cursor-grab items-center justify-between rounded bg-blue-600 p-4"
        >
          {/* Title */}
          <div
            className={clsx('text-md cursor-text', {
              'text-white': !isEditMode,
            })}
            onClick={() => setIsEditMode(true)}
          >
            {!isEditMode ? (
              container.title
            ) : (
              <input
                autoFocus
                value={container.title}
                onBlur={() => setIsEditMode(false)}
                onChange={(e) => updateContainer(container.id, e.target.value)}
                onKeyDown={(e) => {
                  if (e.key !== 'Enter') return;

                  setIsEditMode(false);
                }}
              />
            )}
          </div>

          {/* Delete */}
          <div className="flex gap-4">
            <div
              className="cursor-pointer"
              onClick={() => setIsAddFormModalOpen(true)}
            >
              <PlusCircleIcon className="size-5 text-white" />
            </div>
            <div
              className="cursor-pointer"
              onClick={() => deleteContainer(container.id)}
            >
              <TrashIcon className="size-5 text-white" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-grow flex-col gap-4 p-4">
          <SortableContext items={formsIds}>
            {forms.map((form) => (
              <AnamnesisItem
                key={form.id}
                form={form}
                updateForm={updateForm}
                deleteForm={deleteForm}
              />
            ))}
          </SortableContext>
        </div>
      </div>

      {/* Add Form Modal */}
      <FormModal
        isOpen={isAddFormModalOpen}
        onClose={() => setIsAddFormModalOpen(false)}
        onOk={handleAddForm}
      />
    </>
  );
};

export default AnamnesisContainer;
