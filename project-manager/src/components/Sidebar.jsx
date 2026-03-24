const STYLES = {
  container: "w-1/3 px-8 py-16 bg-stone-900 text-stone-50 rounded-r-xl md:w-72",
  heading: "mb-8 font-bold uppercase text-stone-200 md:text-xl",
  button: "px-4 py-2 text-xs rounded-md bg-stone-700 text-stone-400",
  buttonHover: "hover:bg-stone-600 hover:text-stone-100",
};

const Sidebar = () => {
  return (
    <aside className={STYLES.container}>
      <h2 className={STYLES.heading}>Your Projects</h2>
      <div>
        <button className={`${STYLES.button} ${STYLES.buttonHover}`}>
          + Add Project
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
