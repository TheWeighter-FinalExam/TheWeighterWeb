import { useState } from "react";
import Header from "./components/screen/header/Header";
import Footer from "./components/screen/footer/Footer";
import Router from "./router/Router";

function App() {
  const [isLogined, setIsLogined] = useState(true);
  return (
    <>
      <Header isLogined={isLogined} />
      <Router />
      <Footer />
    </>
  );
}

export default App;
