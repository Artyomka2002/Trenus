import React from "react";
import { Link } from "react-router-dom";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box } from "@mui/material";


// Интерфейс для данных строки
interface RowData {
  id: number;
  name: string;
  contractNumber: string;
  startDate: string;
  endDate: string;
  customer: string;
  acts: number;
  invoices: number;
  checks: number;
  status: string;
}

const columns: GridColDef[] = [
  { field: "name", headerName: "Наименование", flex: 1 },
  { field: "contractNumber", headerName: "Номер договора", flex: 1 },
  { field: "startDate", headerName: "Дата начала", flex: 1 },
  { field: "endDate", headerName: "Дата окончания", flex: 1 },
  { field: "customer", headerName: "Заказчик", flex: 1 },
  { field: "acts", headerName: "Акт", type: "number", flex: 1 },
  { field: "invoices", headerName: "Счет", type: "number", flex: 1 },
  { field: "checks", headerName: "Чек", type: "number", flex: 1 },
  { field: "status", headerName: "Статус", flex: 1 },
];

// Начальные данные
const initialRows: RowData[] = [
  {
    id: 1,
    name: "Договор с ИП",
    contractNumber: "№ 23541",
    startDate: "23.09.2023",
    endDate: "23.09.2024",
    customer: "ИП Кузнецов",
    acts: 0,
    invoices: 0,
    checks: 0,
    status: "Создан",
  },
  {
    id: 2,
    name: "Приложение к договору Договор с ООО",
    contractNumber: "№ 1",
    startDate: "27.06.2023",
    endDate: "",
    customer: "ООО Волга",
    acts: 1,
    invoices: 1,
    checks: 0,
    status: "Действует",
  },
];

// Функция для сортировки строк
const sortByCustomer = (rows: RowData[]): RowData[] => {
  const order = ["ООО", "ИП", "физ.лицо"];
  return rows
    .slice()
    .sort((a, b) => order.indexOf(a.customer) - order.indexOf(b.customer));
};

export default function ContractTable() {
  const [rows, setRows] = React.useState<RowData[]>(
    sortByCustomer(initialRows)
  );

  return (
    <Box
      sx={{
        height: 400,
        width: "100%",
        boxSizing: "border-box",
        borderRadius: "20px",
        padding: "0 118px",
        marginTop: "90px",
      }}
    >
      <Link
        style={{ marginLeft: "10px", textDecoration: "none", color: "black" }}
        to="/layout/documents/createStr"
      >
        + Создать
      </Link>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel: { pageSize: 5 } } }}
        pageSizeOptions={[5, 10, 25]}
        disableRowSelectionOnClick
        sx={{
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#3A3A3E !important",
            color: "#fff !important",
          },
          "& .MuiDataGrid-row--borderBottom": {
            backgroundColor: "#3A3A3E !important",
          },
          "& .MuiDataGrid-columnHeaderTitle": { color: "#fff !important" },
          borderRadius: "20px",
        }}
      />
         </Box>
  );
}
