import { Box, Button,  TextField } from "@mui/material";
// import { TabContext, TabList, TabPanel } from "@mui/lab";
import TinyMCEEditor from "../../../TinyTab/tinyMCEWeb";
import { NavLink } from "react-router-dom";
// import InputAdornment from "@mui/material/InputAdornment";
// import { TextFields } from "@mui/icons-material";
import React from "react";

const PageAdd: React.FC = () => {
  return (
    <>
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
          gap: "20px",
          marginTop: "25px",
        }}
      >
        <Box sx={{ flexGrow: 2 }}>
          <TinyMCEEditor />
        </Box>
        <Box sx={{ flexGrow: 0.5 }}>
          <TextField
            sx={{ width: "100%" }}
            id="standard-select-currency-native"
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
          gap: "20px",
          alignItems: "center",
          marginTop: "50px",
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
          <NavLink to="prilozenie2">Сохранить</NavLink>
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
     ;
    </>
  );
};

export default PageAdd;
