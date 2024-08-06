import { DndContext, DragOverlay } from '@dnd-kit/core';
import { SortableContext } from '@dnd-kit/sortable';

import { createPortal } from 'react-dom';

import Layout from '@/components/Layout/Layout';

import AnamnesisContainer from './components/AnamnesisContainer/AnamnesisContainer';
import AnamnesisItem from './components/AnamnesisItem/AnamnesisItem';
import useAnamnesisHooks from './useAnamnesisHooks';

interface AnamnesisProps {
  isView?: boolean;
  isEdit?: boolean;
}

const Anamnesis: React.FC<AnamnesisProps> = ({
  isView = false,
  isEdit = false,
}) => {
  const {
    anamnesisTitle,
    setAnamnesisTitle,
    anamnesisDescription,
    setAnamnesisDescription,
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
    saveAnamnesisForm,
    onDragStart,
    onDragEnd,
    onDragOver,
  } = useAnamnesisHooks(isView, isEdit);

  return (
    <Layout>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label>Anamnesis Title</label>
          <input
            value={anamnesisTitle}
            onChange={(e) => setAnamnesisTitle(e.target.value)}
            className="rounded-md border-2 border-solid p-2"
            placeholder="Enter anamnesis title"
            disabled={isView}
          />
        </div>

        <div className="flex flex-col">
          <label>Anamnesis Descriptions</label>
          <input
            value={anamnesisDescription}
            onChange={(e) => setAnamnesisDescription(e.target.value)}
            className="rounded-md border-2 border-solid p-2"
            placeholder="Enter anamnesis description"
            disabled={isView}
          />
        </div>
      </div>

      {!isView && (
        <div className="mt-5 flex items-center justify-between">
          <button
            className="rounded-xl bg-blue-600 p-4 text-white hover:bg-blue-700"
            onClick={createNewContainer}
          >
            Add New Form Container
          </button>

          <button
            className="rounded-xl bg-blue-600 p-4 text-white hover:bg-blue-700"
            onClick={saveAnamnesisForm}
          >
            Save Anamnesis Form
          </button>
        </div>
      )}

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
                  isView={isView}
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
                  isView={isView}
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
                  isView={isView}
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

export default Anamnesis;
