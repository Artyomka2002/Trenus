import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthPage } from "./pages/auth/auth";
import { RegisterPage } from "./pages/register/register";
import { RecPasswordPage } from "./pages/pass-rec/recpass";
import { ProfilePage } from "./components/profilePage/profile";
import { LayoutPage } from "./layout";
import { CustomersPage } from "./components/customerPage/customers";
import { DealPage } from "./components/dealPage/deal";
import { AddDealPage } from "./components/dealPage/dealOptions/addDeal";
import { PaymentPage } from "./components/paymentPage/payments";
import { AddPayments } from "./components/paymentPage/paymentOptions/addPayments";
import { MainPage } from "./mainPage/mainPage";
import { DocumentsPage } from "./components/documentPage/documents";
import CustomSortHeader from "./components/documentPage/documentOptions/customSortHeader";
import ContractTable from "./components/documentPage/documentOptions/documentMainInfo";
import Prilozhenie from "./components/documentPage/documentOptions/Приложение Пути/prilozhenie2";
import PageAdd from "./components/documentPage/documentOptions/Приложение Пути/pageAdd";

function App() {
  const [sortDirection, setSortDirection] = useState<"asc" | "desc" | null>(
    null
  );

  const handleSortChange = (newSortDirection: "asc" | "desc") => {
    setSortDirection(newSortDirection);
  };

  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/recpass" element={<RecPasswordPage />} />
      <Route path="/layout" element={<LayoutPage />}>
        <Route index element={<ProfilePage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="documents" element={<DocumentsPage />}>
          <Route
            path="createStr"
            element={
              <CustomSortHeader
                column="Name"
                sortDirection={sortDirection}
                onSortChange={handleSortChange}
              />
            }
          >
            <Route path="prilozenie2" element={<Prilozhenie />} />
            <Route index element={<PageAdd />} />
          </Route>
          <Route index element={<ContractTable />} />
        </Route>
        <Route path="main" element={<MainPage />} />
        <Route path="customers" element={<CustomersPage />} />
        <Route path="transactions" element={<DealPage />} />
        <Route path="add_transactions" element={<AddDealPage />} />
        <Route path="payments" element={<PaymentPage />} />
        <Route path="add_payments" element={<AddPayments />} />
      </Route>
    </Routes>
  );
}

export default App;
