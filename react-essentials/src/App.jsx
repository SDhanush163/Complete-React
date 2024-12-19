import Header from "./components/Header/Header.jsx";
import CoreConceptSection from "./components/CoreConecptSection/CoreConceptSection.jsx";
import Examples from "./components/Examples/Examples.jsx";

function App() {
    return (
        <div>
            <Header />
            <main>
                <CoreConceptSection />
                <Examples />
            </main>
        </div>
    );
}

export default App;
