import { EXAMPLES } from "../../data.js";
import "./TabContent.css";

function TabContent({ selectedTopic }) {
    return (
        <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
        </div>
    );
}

export default TabContent;
