import React from "react";
import { AdminNavbar } from "./AdminNavbar";
import DonationHistoryTable from "./DonationHistoryTable";

export default function DonationHistory() {
  return (
    <div className="flex h-[100vh]">
      <AdminNavbar />

      <DonationHistoryTable />
    </div>
  );
}
