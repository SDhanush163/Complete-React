import Button from "./Button";

const Sidebar = ({ onStartProject }) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 rounded-r-xl md:w-72">
      <h2 className="mb-8 font-bold uppercase text-stone-200 md:text-xl">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartProject}>+ Add Project</Button>
      </div>
    </aside>
  );
};

export default Sidebar;
