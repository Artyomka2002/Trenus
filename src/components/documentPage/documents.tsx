import { FC } from "react";
import { Box } from "@mui/material";
import { NavLink, Outlet, Route } from "react-router-dom";
import ContractTable from "./documentOptions/documentMainInfo";



export const DocumentsPage: FC = () => {
  return (
    <>
      <Box sx={{ maxWidth: "1740px" }}>
        <Box sx={{ maxWidth: "1500px", margin: "20px auto" }}>
          <p>Главная / Документы</p>
          <Box sx={{ display: "flex", gap: "200px", marginTop: "42px" }}>
            <NavLink
              to="/layout/documents"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline blue" : "none",
                textUnderlineOffset: isActive ? "7px" : "0px",
                fontSize: 32,
                fontWeight: 400,
                color: "#000",
              })}
            >
              Документы
            </NavLink>
            <NavLink
              to="/layout/template"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline blue" : "none",
                textUnderlineOffset: isActive ? "7px" : "0px",
                fontSize: 32,
                fontWeight: 400,
                color: "#000",
              })}
            >
              Шаблоны
            </NavLink>
            <NavLink
              to="/layout/history"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline blue" : "none",
                textUnderlineOffset: isActive ? "7px" : "0px",
                fontSize: 32,
                fontWeight: 400,
                color: "#000",
              })}
            >
              История
            </NavLink>
          </Box>
        </Box>
      </Box>
      <Box>
        <Outlet/>
      </Box>
    </>
  );
};
