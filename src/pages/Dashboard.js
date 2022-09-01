import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Content from "../components/Content";
import Sidebar from "../components/Sidebar";

class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard">
        <Header />
        <Sidebar />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default Dashboard;
