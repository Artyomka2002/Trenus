import { Box, TextField } from "@mui/material";
import { FC } from "react";
import { IndividualCustomerInputData } from "../../../shared/utils/customerInputData";

export const IndividualPerson: FC = () => {
  return (
    <>
      <Box sx={{ maxWidth: "1740px" }}>
        <Box sx={{ maxWidth: "1500px", margin: "40px auto" }}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
              justifyContent: "center",
            }}
          >
            {IndividualCustomerInputData.map((item, index) => (
              <TextField
                key={index}
                sx={{ width: item.width }}
                label={item.label}
                variant="standard"
              />
            ))}

            <Box sx={{ display: "flex", gap: "20px" }}>
              <TextField sx={{ width: 243 }} label="ИНН" variant="standard" />
              <TextField
                sx={{ width: 243 }}
                label="ОГРНИП"
                variant="standard"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
// commit add