import { Link } from "react-router-dom";

function Home({ members }) {
  return (
    <div>
      {members.map((element) =>
        element.type === "pj" ? (
          <Link className="tags" to={`/company/${element.id}`}>
            {element.name}
          </Link>
        ) : (
          <Link className="tags" to={`/customer/${element.id}`}>
            {element.name}
          </Link>
        )
      )}
    </div>
  );
}

export default Home;
