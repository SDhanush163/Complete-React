import Sidebar from "./components/Sidebar";
import { STYLES } from "./utils/stylesUtil";

function App() {
  return (
    <main className={STYLES.container}>
      <Sidebar />
    </main>
  );
}

export default App;
