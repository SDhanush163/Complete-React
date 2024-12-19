import { EXAMPLES } from "../../data.js";
import "./TabContent.css";

function TabContent({ selectedTopic }) {
    let tabContent = (
        <div id="tab-content">
            <p>Please Select a topic.</p>
        </div>
    );
    if (selectedTopic) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>
        );
    }

    return <div>{tabContent}</div>;
}

export default TabContent;
