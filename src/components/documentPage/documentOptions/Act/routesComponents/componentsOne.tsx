

import React from 'react';
import { Box, Button,  TextField } from "@mui/material";
import { NavLink } from 'react-router-dom';
import TinyMCEEditor from '../../../../TinyTab/tinyMCEWeb';
const Act: React.FC = () => {
  return (
    <>
    <Box
    sx={{
      display: "flex",
      width: "100%",
      gap: "10px",
      alignItems: "center",
    }}
    >
    <TextField
      id="filled-select-currency"
      select
      label="Select"
      sx={{ flexGrow: 0.6 }}
      defaultValue="EUR"
      // helperText="Please select your currency"
      variant="filled"
    />
    <TextField
      id="standard-number"
      label="Number"
      type="number"
      sx={{ flexGrow: 0.6 }}
      variant="standard"
      slotProps={{
        inputLabel: {
          shrink: true,
        },
      }}
    />
    <TextField
      id="standard-number"
      sx={{ flexGrow: 0.6 }}
      label="Номер Акта"
      type="number"
      variant="standard"
      slotProps={{
        inputLabel: {
          shrink: true,
        },
      }}
    />
    <TextField
      sx={{ flexGrow: 0.6 }}
      label="Дата начала договора"
      focused
      type="date"
    />
    </Box>
    <Box sx={{ width: "100%", display: "flex", marginTop: "40px" }}>
    <TextField
      id="filled-select-currency"
      select
      label="Select"
      sx={{ flexGrow: 0.2 }}
      defaultValue="EUR"
      // helperText="Please select your currency"
      variant="filled"
    />
    </Box>
    <Box sx={{ marginTop: "60px", fontSize: "32px" }}>
    Данные Заказчика
    </Box>
    <Box sx={{ display: "flex" }}>
    <TextField
      id="standard-number"
      label="Number"
      type="number"
      sx={{ flexGrow: 0.2 }}
      variant="standard"
      slotProps={{
        inputLabel: {
          shrink: true,
        },
      }}
    />
    </Box>
    <Box sx={{marginTop:'20px'}}>
    <TinyMCEEditor/>
    </Box>
    <Box sx={{display:'flex' , marginTop:'20px'}}>
    <TextField
      id="standard-number"
      label="Number"
      sx={{ flexGrow: 0.2 }}
      variant="standard"
      slotProps={{
        inputLabel: {
          shrink: true,
        },
      }}
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
    <NavLink to='/'> Сохранить</NavLink > 
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
    </>
  );
};

export default Act;
