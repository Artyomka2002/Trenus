import React from "react";
import { Box, Button, Tab, Tabs, TextField } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import TinyMCEEditor from "../../TinyTab/tinyMCEWeb";
import { NavLink , Outlet } from "react-router-dom";
// import InputAdornment from "@mui/material/InputAdornment";
// import { TextFields } from "@mui/icons-material";

export interface CustomSortHeaderProps {
  column: string;
  sortDirection: "asc" | "desc" | null;
  onSortChange: (newSortDirection: "asc" | "desc") => void;
}

const CustomSortHeader: React.FC<CustomSortHeaderProps> = ({}) => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  

  const currencies = [
    {
      value: "OOO",
      label: "$",
    },
    {
      value: "ИП",
      label: "€",
    },
    {
      value: "ФИЗ.ЛИЦО",
      label: "฿",
    },
  ];

  return (
    <div style={{ marginTop: "40px" }}>
      <TabContext value={value}>
        <Box
          sx={{
            borderColor: "divider",
            padding: "0 120px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            sx={{ width: "100%" }}
            TabIndicatorProps={{
              style: { backgroundColor: "purple" },
            }}
          >
            <Tab
              label="Договор"
              value="1"
              sx={{ flexGrow: 1, textTransform: "none", fontSize: "20px" }}
            />
            <Tab
              label="Приложение"
              value="2"
              sx={{ flexGrow: 1, textTransform: "none", fontSize: "20px" }}
            />
            <Tab
              label="Акт"
              value="3"
              sx={{ flexGrow: 1, textTransform: "none", fontSize: "20px" }}
            />
            <Tab
              label="Счет"
              value="4"
              sx={{ flexGrow: 1, textTransform: "none", fontSize: "20px" }}
            />
            <Tab
              label="Чек"
              value="5"
              sx={{ flexGrow: 1, textTransform: "none", fontSize: "20px" }}
            />
          </TabList>
        </Box>
        <TabPanel sx={{ padding: "10px 120px" }} value="1">
          <Box
            sx={{
              marginTop: "40px",
              display: "flex",
              gap: "20px",
              justifyContent: "space-around",
            }}
          >
            <TextField
              sx={{ flexGrow: 1.5 }}
              id="standard-basic"
              label="Название договора"
              variant="standard"
            />
            <TextField
              sx={{ flexGrow: 1.5 }}
              id="standard-basic"
              label="Номер договора"
              variant="standard"
            />
            <TextField
              sx={{ flexGrow: 0.6 }}
              label="Дата начала договора"
              focused
              type="date"
            />
            <TextField
              sx={{ flexGrow: 0.6 }}
              label="Дата окончания договора"
              focused
              type="date"
            />
          </Box>
          <Box
            sx={{
              marginTop: "40px",
              display: "flex",
              gap: "20px",
            }}
          >
            <TextField
              sx={{ flexGrow: 0.5 }}
              id="standard-basic"
              label="Выбрать шаблон"
              variant="standard"
            />
            <TextField
              sx={{ flexGrow: 0.5 }}
              id="standard-basic"
              label="Выбрать реквизиты"
              variant="standard"
            />
            <TextField sx={{ flexGrow: 0.62 }} label="Сумма сделки" />
          </Box>
          <h2> Данные заказчика </h2>
          <Box sx={{ display: "flex", gap: "20px" }}>
            <TextField
              id="standard-select-currency-native"
              select
              label="Native select"
              defaultValue="EUR"
              SelectProps={{
                native: true,
              }}
              variant="standard"
              sx={{
                width: "25%",
              }}
            >
              {currencies.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.value}
                </option>
              ))}
            </TextField>
            <TextField
              id="standard-select-currency-native"
              sx={{
                width: "25%",
              }}
              label="Native select"
              defaultValue="EUR"
              SelectProps={{
                native: true,
              }}
              helperText="Please select your currency"
              variant="standard"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              width: "100%",
              justifyContent: "space-between",
              gap: "20px",
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
        </TabPanel>
        <TabPanel sx={{ padding: "10px 120px" }} value="2">
          {/* !!! */}
         
         <Outlet/>
        </TabPanel>
        <TabPanel sx={{ padding: "10px 120px" }} value="3">
        <TextField
          id="filled-select-currency"
          select
          label="Select"
          defaultValue="EUR"
          helperText="Please select your currency"
          variant="filled"
        />
        </TabPanel>
        <TabPanel sx={{ padding: "10px 120px" }} value="4">
          Item Four
        </TabPanel>
        <TabPanel sx={{ padding: "10px 120px" }} value="5">
          Item Five
        </TabPanel>
      </TabContext>
    </div>
  );
};

export default CustomSortHeader;
