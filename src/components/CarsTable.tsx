import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Table } from "react-bootstrap";
import { SampleCars } from "../data";
import { Car } from "../types/Car";
import { CarRowContextMenu } from "./CarRowContextMenu";

type CarsTableProps = {
  selectedCar: Car | null;
  onCarSelected: (car: Car) => void;
};
export const CarsTable = (props: CarsTableProps) => {
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
            {/* placeholder header for context menu */}
            <th></th>
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => {
          const isActive = row.original.id === props.selectedCar?.id;
          return (
            <tr
              key={row.id}
              style={
                isActive === true ? { backgroundColor: "#3a7a11" } : undefined
              }
              onClick={() => {
                props.onCarSelected(row.original);
              }}
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
              <td>
                <CarRowContextMenu carRow={row.original} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
