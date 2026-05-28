import Header from "./components/Header.jsx";
import Singup from "./components/Singup.jsx";
// import Login from "./components/Login.jsx";
import Login from "./components/StateLogin.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <Login />
        {/* <Singup /> */}
      </main>
    </>
  );
}

export default App;
