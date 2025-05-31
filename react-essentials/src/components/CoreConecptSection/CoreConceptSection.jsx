import CoreConcept from "../CoreConcept/CoreConcept.jsx";
import { CORE_CONCEPTS } from "../../data.js";

function CoreConceptSection() {
    return (
        <section id="core-concepts">
            <h2>Core Concepts</h2>
            <ul>
                {CORE_CONCEPTS.map((conceptItem) => (
                    <CoreConcept
                        key={conceptItem.title}
                        {...conceptItem}
                    />
                ))}
            </ul>
        </section>
    );
}
export default CoreConceptSection;

/* Non dynamic list
<CoreConcept
    title={CORE_CONCEPTS[0].title}
    description={CORE_CONCEPTS[0].description}
    image={CORE_CONCEPTS[0].image}
/>
<CoreConcept {...CORE_CONCEPTS[1]} />
<CoreConcept {...CORE_CONCEPTS[2]} />
<CoreConcept {...CORE_CONCEPTS[3]} /> */
