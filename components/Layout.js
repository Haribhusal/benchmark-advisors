import Meta from "./Meta";
import Header from '../components/Header'

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Header />
      {children}
    </>
  );
};

export default Layout;
