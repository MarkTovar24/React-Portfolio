import React from "react";
import NavTabs from "../Nav/Nav";

function Header({ currentTab, handleTabChange }) {
  

  return (
    <div>
      <section>
        <header className="flex-row">
          <div>
            <h1>Mark Tovar</h1>
          </div>
          <div>
            <NavTabs
              currentTab={currentTab}
              handleTabChange={handleTabChange}
            ></NavTabs>
          </div>
        </header>
      </section>
    </div>
  );
}

export default Header;