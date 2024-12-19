import TabContent from "../TabContent/TabContent.jsx";
import TabButton from "../TabButton/TabButton.jsx";
import { useState } from "react";
import "./ExampleSection.css";

function ExampleSection() {
    const [selectedTopic, setSelectedTopic] = useState();
    function handleClick(selectedButton) {
        setSelectedTopic(selectedButton);
    }

    return (
        <section id="examples">
            <h2>Examples</h2>
            <menu>
                <TabButton
                    isSelected={selectedTopic === "components"}
                    onClick={() => handleClick("components")}
                >
                    Components
                </TabButton>
                <TabButton
                    isSelected={selectedTopic === "jsx"}
                    onClick={() => handleClick("jsx")}
                >
                    JSX
                </TabButton>
                <TabButton
                    isSelected={selectedTopic === "props"}
                    onClick={() => handleClick("props")}
                >
                    Props
                </TabButton>
                <TabButton
                    isSelected={selectedTopic === "state"}
                    onClick={() => handleClick("state")}
                >
                    State
                </TabButton>
            </menu>
            <TabContent
                selectedTopic={selectedTopic}
                id="tab-content"
            />
        </section>
    );
}

export default ExampleSection;