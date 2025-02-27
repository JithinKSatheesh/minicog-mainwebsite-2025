import React from "react";
import PageHead from "../Head";
import Context from "@/context/Context";
import HeaderDashboard from "@/components/Header/HeaderDashboard";
import PopupMobileMenu from "@/components/Header/PopUpMobileMenu";
import LeftDashboardSidebar from "@/components/Header/LeftDashboardSidebar";
import ChatExport from "@/components/ChatExport/ChatExport";

const ChatExportPage = () => {
  return (
    <>
      <PageHead title="Chat Export" />

      <main className="page-wrapper rbt-dashboard-page">
        <Context>
          <div className="rbt-panel-wrapper">
            <HeaderDashboard display="d-none" />
            <PopupMobileMenu />
            <LeftDashboardSidebar />

            <ChatExport />
          </div>
        </Context>
      </main>
    </>
  );
};

export default ChatExportPage;
