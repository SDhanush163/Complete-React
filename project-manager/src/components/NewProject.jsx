import Input from "./Input";

const STYLES = {
  container: "w-[35rem] mt-16",
  menu: "flex items-center justify-end gap-4 my-4",
  cancel: "text-stone-800 hover:text-stone-950",
  save: "px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950",
};

const NewProject = () => {
  return (
    <div className={STYLES.container}>
      <menu className={STYLES.menu}>
        <li>
          <button className={STYLES.cancel}>Cancel</button>
        </li>
        <li>
          <button className={STYLES.save}>Save</button>
        </li>
      </menu>
      <div>
        <Input label="Title" />
        <Input label="Description" textArea />
        <Input label="Due Date" />
      </div>
    </div>
  );
};

export default NewProject;
