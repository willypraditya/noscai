// src/components/Table/columns.ts
import { ColumnDef } from '@tanstack/react-table';
import dayjs from 'dayjs';

import AnamnesisForm from '@/types/AnamnesisForm';

const columns: ColumnDef<AnamnesisForm>[] = [
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
    cell: () => (
      <div>
        <button>View</button>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    ),
  },
];

export default columns;
