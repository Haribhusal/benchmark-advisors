import Meta from "./Meta";
import Header from "../components/Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
