import React from "react";
import MainInfo from "pages/main-info";
import Container from "ui/Container";
import Header from "common/Header";
import Footer from "common/Footer";

function App() {
  return (
    <>
      <Header />
      <Container>
        <MainInfo />
      </Container>
      <Footer />
    </>
  );
}

export default App;
