import { Outlet } from "react-router-dom";
import Nav from "./nav/nav";

function Layout() {
  return (
    <div>
      <Nav />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
