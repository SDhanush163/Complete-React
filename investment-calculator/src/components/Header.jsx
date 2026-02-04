import logo from "../assets/investment-calculator-logo.png";

// Static header component
const Header = () => {
  return (
    <header id="header">
      <img src={logo} alt="invesment-logo" />
      <h1>Investment Calculator</h1>
    </header>
  );
};

export default Header;
