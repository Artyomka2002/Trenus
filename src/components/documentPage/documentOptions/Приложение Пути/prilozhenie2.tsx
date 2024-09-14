import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  TextField
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert"; // Иконка для трёх точек
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import TinyMCEEditor from "../../../TinyTab/tinyMCEWeb";
// import { Link } from "react-router-dom";

const Prilozhenie: React.FC = () => {
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
    {
      field: "status",
      headerName: "Статус",
      flex: 1,
      renderCell: (params) => (
        <StatusMenu
          id={params.row.id}
          status={params.value}
          onDelete={handleDeleteRow}
        />
      ),
    },
  ];

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
      name: "Договор с ООО",
      contractNumber: "№ 74582",
      startDate: "15.10.2023",
      endDate: "15.10.2024",
      customer: "ООО Вектор",
      acts: 2,
      invoices: 1,
      checks: 1,
      status: "В процессе",
    },
  ];

  const [rows, setRows] = useState<RowData[]>(initialRows);
  const [booleanCollapse, setBooleanCollapse] = useState<boolean>(false);

  // Функция для удаления строки по id
  const handleDeleteRow = (id: number) => {
    setRows((prevRows) => prevRows.filter((row) => row.id !== id));
  };

  return (
    <Box>
      <Box
        onClick={() => setBooleanCollapse(!booleanCollapse)}
        sx={{
          marginLeft: "10px",
          textDecoration: "none",
          color: "black",
          cursor: "pointer",
        }}
      >
        + Создать
      </Box>

      {rows.length > 0 ? (
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
      ) : (
        <Typography variant="h6" align="center" sx={{ marginTop: 2 }}>
          Нет информации о партнерах
        </Typography>
      )}
      <Box sx={booleanCollapse ? {display:'block'}: {display:'none'}}>
        <h2>Добавить заказчика</h2>
      <Box sx={{ display: "flex", gap: "20px", marginTop: "50px" }}>
        <TextField id="outlined-basic" value={"№251"} variant="outlined" />
        <TextField
          InputProps={{
            sx: {
              backgroundColor: "white",
            },
          }}
          id="filled-number"
          label="Number"
          type="number"
          variant="filled"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          sx={{ flexGrow: 0.6 }}
          label="Дата начала договора"
          focused
          type="date"
        />
        <TextField sx={{ flexGrow: 0.62 }} label="Сумма сделки" />
      
      </Box>
      <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              width: "100%",
              justifyContent: "space-between",
              gap: "20px",
              marginTop:'40px'
            }}
          >
            <Box sx={{ flexGrow: 1 }}>
              <TinyMCEEditor />
            </Box>
            <TextField
              id="standard-select-currency-native"
              sx={{ flexGrow: 0.5 }}
              label="Native select"
              SelectProps={{
                native: true,
              }}
              helperText="Please select your currency"
              variant="standard"
            />
          </Box>
      </Box>
      
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          margin: "50px",
        }}
      >
        <Button
          sx={{
            backgroundColor: "blue",
            borderRadius: "20px",
            width: "350px",
            color: "white",
          }}
        >
          Сохранить
        </Button>
        <Button
          sx={{
            backgroundColor: "white",
            border: "solid 1px black",
            borderRadius: "20px",
            width: "350px",
            color: "black",
          }}
        >
          Отмена
        </Button>
      </Box>
    </Box>
  );
};

// Компонент StatusMenu с передачей id строки и функцией удаления
const StatusMenu: React.FC<{
  id: number;
  status: string;
  onDelete: (id: number) => void;
}> = ({ id, status, onDelete }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuAction = (action: string) => {
    if (action === "Удалить") {
      onDelete(id); // Удаляем строку по id
    }
    handleClose();
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <span>{status}</span>
      <IconButton onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={() => handleMenuAction("Скачать")}>Скачать</MenuItem>
        <MenuItem onClick={() => handleMenuAction("Отправить")}>
          Отправить
        </MenuItem>
        <MenuItem onClick={() => handleMenuAction("Удалить")}>Удалить</MenuItem>
      </Menu>
    </Box>
  );
};

export default Prilozhenie;
