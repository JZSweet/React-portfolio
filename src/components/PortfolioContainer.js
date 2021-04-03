import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Header from "./Header";
import Home from "./pages/Project";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";


class Portfolio extends Component {
  state = {
    currentPage: "Project"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Project") {
      return <Home />;
    } else if (this.state.currentPage === "About") {
      return <About />;
    } else if (this.state.currentPage === "Blog") {
      return <Blog />;
    } else {
      return <Contact />;
    }
  };

  render() {
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
      </div>
    );
  }
}

export default Portfolio;
