import { EXAMPLES } from "../../data.js";
import "./TabContent.css";

function TabContent({ selectedTopic, ...props }) {
    let tabContent = (
        <div {...props}>
            <p>Please Select a topic.</p>
        </div>
    );
    if (selectedTopic) {
        tabContent = (
            <div {...props}>
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>
        );
    }

    return <>{tabContent}</>;
}

export default TabContent;
