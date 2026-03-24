import React from "react";
import { STYLES } from "../utils/stylesUtil";

const Sidebar = () => {
  return (
    <aside className={STYLES.sidebarContainer}>
      <h2 className={STYLES.sidebarHeading}>Your Projects</h2>
      <div>
        <button className={STYLES.sidebarProjectsButton}>+ Add Project</button>
      </div>
    </aside>
  );
};

export default Sidebar;
