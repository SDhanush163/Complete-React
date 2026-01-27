import TabContent from "../TabContent/TabContent.jsx";
import TabButton from "../TabButton/TabButton.jsx";
import { useState } from "react";
import "./ExampleSection.css";
import Tabs from "../Tabs/Tabs.jsx";

const ExampleSection = () => {
    const [selectedTopic, setSelectedTopic] = useState();
    const handleClick = (selectedButton) => setSelectedTopic(selectedButton);

    return (
        <section id="examples">
            <h2>Examples</h2>
            <Tabs
                buttons={
                    <>
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
                    </>
                }
            >
                <TabContent selectedTopic={selectedTopic} id="tab-content" />
            </Tabs>
        </section>
    );
};

export default ExampleSection;
