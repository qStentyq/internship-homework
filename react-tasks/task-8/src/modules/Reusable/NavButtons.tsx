import { Link, Outlet } from "react-router-dom";

function NavButtons() {
  return (
    <>
      <div className='nav_container'>
        {" "}
        <Link to={`/`}>Photos</Link> <Link to={`/posts`}>Posts</Link>{" "}
        <Link to={`/todos`}>Todos</Link>
      </div>
      <div className='outlet_container'>
        <Outlet />
      </div>
    </>
  );
}

export default NavButtons;
