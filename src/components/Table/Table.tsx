import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useDebounce } from 'use-debounce';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Spinner from '../Spinner/Spinner';
import { TableProps } from './types';

const Table = <T extends object>({ data, columns }: TableProps<T>) => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [filteredData, setFilteredData] = useState<T[]>(data);

  const [search, setSearch] = useState<string>('');
  const [debouncedSearch] = useDebounce(search, 300);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setFilteredData(
        data.filter((item) =>
          Object.values(item).some((value) =>
            value
              .toString()
              .toLowerCase()
              .includes(debouncedSearch.toLowerCase()),
          ),
        ),
      );
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [debouncedSearch, data]);

  const table = useReactTable({
    data: filteredData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    state: {
      globalFilter: search,
    },
  });

  return (
    <div className="overflow-x-auto">
      <div className="mb-4 flex flex-col-reverse justify-between gap-4 lg:flex-row">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="rounded border border-gray-300 p-2"
        />

        <div>
          <button
            className="w-full rounded-xl bg-blue-600 p-3 text-white hover:bg-blue-700 lg:w-auto"
            onClick={() => navigate('create')}
          >
            Create New Anamthesis Form
          </button>
        </div>
      </div>

      <div className="relative">
        {isLoading && (
          <div className="absolute flex h-full w-full items-center justify-center rounded bg-black bg-opacity-20">
            <Spinner />
          </div>
        )}

        <table className="min-w-full table-auto border-collapse overflow-hidden rounded-lg">
          {/* Header */}
          <thead className="bg-blue-600">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header, index) => (
                  <th
                    key={header.id}
                    className={`border-b px-4 py-2 text-left font-semibold text-white ${
                      index === 0 ? 'rounded-tl-lg' : ''
                    } ${index === headerGroup.headers.length - 1 ? 'rounded-tr-lg' : ''}`}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          {/* Body */}
          <tbody>
            {table.getRowModel().rows.map((row, rowIndex) => (
              <tr
                key={row.id}
                className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-blue-100'}
              >
                {row.getVisibleCells().map((cell, cellIndex) => (
                  <td
                    key={cell.id}
                    className={`border-b px-4 py-2 text-gray-700 ${
                      rowIndex === table.getRowModel().rows.length - 1 &&
                      cellIndex === 0
                        ? 'rounded-bl-lg'
                        : ''
                    } ${
                      rowIndex === table.getRowModel().rows.length - 1 &&
                      cellIndex === row.getVisibleCells().length - 1
                        ? 'rounded-br-lg'
                        : ''
                    }`}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
