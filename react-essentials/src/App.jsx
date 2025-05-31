import Header from "./components/Header/Header.jsx";
import CoreConceptSection from "./components/CoreConecptSection/CoreConceptSection.jsx";
import ExampleSection from "./components/ExampleSection/ExampleSection.jsx";
// import { Fragment } from "react";

function App() {
    return (
        <>
            <Header />
            <main>
                <CoreConceptSection />
                <ExampleSection />
            </main>
        </>
    );
    //<></> can be replaced by <Fragment></Fragment> for older projects
}

export default App;
