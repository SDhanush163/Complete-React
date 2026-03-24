import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import Sidebar from "./components/Sidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    projectId: undefined,
    projects: [],
  });

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

  const handleCancelStartProject = () =>
    setProjectState((prev) => {
      return { ...prev, projectId: undefined };
    });

  const handleSelectProject = (id) =>
    setProjectState((prev) => {
      return { ...prev, projectId: id };
    });

  const handleDeleteProject = () =>
    setProjectState((prev) => {
      return {
        ...prev,
        projectId: undefined,
        projects: prev.projects.filter(
          (project) => project.id !== prev.projectId,
        ),
      };
    });

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.projectId,
  );
  let content = (
    <SelectedProject project={selectedProject} onDelete={handleDeleteProject} />
  );

  if (projectState.projectId === null)
    content = (
      <NewProject
        onAdd={handleAddProject}
        onCancel={handleCancelStartProject}
      />
    );
  else if (projectState.projectId === undefined)
    content = <NoProjectSelected onStartProject={handleStartProject} />;

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        onStartProject={handleStartProject}
        projects={projectState.projects}
        onSelect={handleSelectProject}
      />
      {content}
    </main>
  );
}

export default App;
