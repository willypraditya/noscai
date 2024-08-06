// src/components/Table/columns.ts
import { EyeIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import { ColumnDef } from '@tanstack/react-table';
import dayjs from 'dayjs';

import { NavigateFunction } from 'react-router-dom';

import AnamnesisForm from '@/types/AnamnesisForm';

const columns = (navigate: NavigateFunction): ColumnDef<AnamnesisForm>[] => {
  return [
    {
      accessorKey: 'title',
      header: 'Title',
    },
    {
      accessorKey: 'description',
      header: 'Description',
    },
    {
      accessorKey: 'creationDate',
      header: 'Creation Date',
      cell: ({ getValue }) => {
        const value = getValue() as string;
        const date = new Date(value);

        return dayjs(date).format('D MMMM YYYY');
      },
    },
    {
      accessorKey: 'id',
      header: 'Actions',
      cell: ({ getValue }) => {
        const id = getValue() as string;

        return (
          <div className="flex items-center gap-3">
            <button onClick={() => navigate(`/view/${id}`)}>
              <EyeIcon className="size-5" />
            </button>
            <button onClick={() => navigate(`/edit/${id}`)}>
              <PencilIcon className="size-5" />
            </button>
            <button>
              <TrashIcon className="size-5" />
            </button>
          </div>
        );
      },
    },
  ];
};

export default columns;
