import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import Sidebar from "./components/Sidebar";

function App() {
  const [projectState, setProjectState] = useState({
    projectId: undefined,
    projects: [],
  });
  let content;

  const handleAddProject = () => {
    setProjectState((prev) => {
      return { ...prev, projectId: null };
    });
  };

  if (projectState.projectId === null) content = <NewProject />;
  else if (projectState.projectId === undefined)
    content = <NoProjectSelected onStartProject={handleAddProject} />;

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onStartProject={handleAddProject} />
      {content}
    </main>
  );
}

export default App;
