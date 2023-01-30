import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { SampleCars } from "../data";
import { Car } from "../types/Car";

export const CarsTable = () => {
  const columnHelper = createColumnHelper<Car>();

  const columns = [
    columnHelper.accessor((row) => row.brand, {
      id: "brand",
      cell: (info) => info.getValue(),
      header: () => "Brand",
    }),
    columnHelper.accessor((row) => row.model, {
      id: "model",
      cell: (info) => info.getValue(),
      header: () => "Model",
    }),
    columnHelper.accessor((row) => row.productionYear, {
      id: "productionYear",
      cell: (info) => info.getValue(),
      header: () => "Production year",
    }),
    columnHelper.accessor((row) => row.isAvailable, {
      id: "isAvailable",
      cell: (info) => (info.getValue().valueOf() === true ? "Yes" : "No"),
      header: () => "Available?",
    }),
  ];

  const table = useReactTable({
    data: SampleCars,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Table striped bordered hover>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => {
          return (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
