import { DndContext, DragOverlay } from '@dnd-kit/core';
import { SortableContext } from '@dnd-kit/sortable';

import { createPortal } from 'react-dom';

import Layout from '@/components/Layout/Layout';

import AnamnesisContainer from './components/AnamnesisContainer/AnamnesisContainer';
import AnamnesisItem from './components/AnamnesisItem/AnamnesisItem';
import useCreateAnamnesisHooks from './useCreateAnamnesisHooks';

const CreateAnamnesis: React.FC = () => {
  const {
    containers,
    containersIds,
    activeContainer,
    forms,
    formsIds,
    activeForm,
    sensors,
    createNewContainer,
    updateContainer,
    deleteContainer,
    addForm,
    updateForm,
    deleteForm,
    onDragStart,
    onDragEnd,
    onDragOver,
  } = useCreateAnamnesisHooks();

  return (
    <Layout>
      <button
        className="rounded-xl bg-blue-600 p-4 text-white hover:bg-blue-700"
        onClick={createNewContainer}
      >
        Add New Form Container
      </button>

      <div className="mt-5">
        <DndContext
          sensors={sensors}
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
          onDragOver={onDragOver}
        >
          <div className="flex flex-col gap-4">
            <SortableContext items={containersIds}>
              {containers.map((container) => (
                <AnamnesisContainer
                  key={container.id}
                  container={container}
                  updateContainer={updateContainer}
                  deleteContainer={deleteContainer}
                  forms={forms.filter(
                    (form) => form.containerId === container.id,
                  )}
                  formsIds={formsIds}
                  addForm={addForm}
                  updateForm={updateForm}
                  deleteForm={deleteForm}
                />
              ))}
            </SortableContext>
          </div>

          {/* Drag Overlay Portal */}
          {createPortal(
            <DragOverlay>
              {activeContainer && (
                <AnamnesisContainer
                  container={activeContainer}
                  updateContainer={updateContainer}
                  deleteContainer={deleteContainer}
                  forms={forms.filter(
                    (form) => form.containerId === activeContainer.id,
                  )}
                  formsIds={formsIds}
                  addForm={addForm}
                  updateForm={updateForm}
                  deleteForm={deleteForm}
                />
              )}

              {activeForm && (
                <AnamnesisItem
                  form={activeForm}
                  updateForm={updateForm}
                  deleteForm={deleteForm}
                />
              )}
            </DragOverlay>,
            document.body,
          )}
        </DndContext>
      </div>
    </Layout>
  );
};

export default CreateAnamnesis;
