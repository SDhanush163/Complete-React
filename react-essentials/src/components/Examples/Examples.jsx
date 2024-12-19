import TabContent from "../TabContent/TabContent.jsx";
import TabButton from "../TabButton/TabButton.jsx";
import { useState } from "react";
import "./Examples.css";

function Examples() {
    const [selectedTopic, setSelectedTopic] = useState("components");
    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton);
    }

    return (
        <section id="examples">
            <h2>Examples</h2>
            <menu>
                <TabButton onSelect={() => handleSelect("components")}>
                    Components
                </TabButton>
                <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
                <TabButton onSelect={() => handleSelect("props")}>
                    Props
                </TabButton>
                <TabButton onSelect={() => handleSelect("state")}>
                    State
                </TabButton>
            </menu>
            <TabContent selectedTopic={selectedTopic} />
        </section>
    );
}

export default Examples;
