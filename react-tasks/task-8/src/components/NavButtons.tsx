import { Link } from "react-router-dom";

function NavButtons() {
  return (
    <>
      <button>
        {" "}
        <Link to={`/`}>Photos</Link>
      </button>
      <button>
        {" "}
        <Link to={`/posts`}>Posts</Link>{" "}
      </button>
      <button>
        <Link to={`/todos`}>Todos</Link>
      </button>
    </>
  );
}

export default NavButtons;
