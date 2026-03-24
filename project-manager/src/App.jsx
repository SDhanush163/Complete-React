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

  const handleStartProject = () => {
    setProjectState((prev) => {
      return { ...prev, projectId: null };
    });
  };

  const handleAddProject = (project) =>
    setProjectState((prev) => {
      const projectId = Math.random();
      const newProject = {
        ...project,
        id: projectId,
      };
      return {
        ...prev,
        projectId: undefined,
        projects: [...prev.projects, newProject],
      };
    });

  if (projectState.projectId === null)
    content = <NewProject onAddProject={handleAddProject} />;
  else if (projectState.projectId === undefined)
    content = <NoProjectSelected onStartProject={handleStartProject} />;

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        onStartProject={handleStartProject}
        projects={projectState.projects}
      />
      {content}
    </main>
  );
}

export default App;
