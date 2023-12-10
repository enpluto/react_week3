import data from "./data";
import { Copyright } from "./styled";

const Footer = () => {
  const { title, address, phone, copyright } = data;

  return (
    <>
      <Copyright>{copyright}</Copyright>
    </>
  );
};

export default Footer;
