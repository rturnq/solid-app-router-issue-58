import { Routes, Route, NavLink, Link, useNavigate } from "solid-app-router";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Home</h1>
      <Link href="/page1">Go to page1</Link>
      <button onClick={() => navigate("/page1")}>Go home</button>
    </>
  );
}

function Page1() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Page1</h1>
      <Link href="/">Go home</Link>
      <button onClick={() => navigate("/")}>Go home</button>
    </>
  );
}

export default function App() {
  const navigate = useNavigate();
  return (
    <>
      <nav>
        <NavLink href="/">Home</NavLink>
        {" | "}
        <NavLink href="/page1">Page1</NavLink>
        {" | "}
        <button onClick={() => navigate("/")}>Home</button>
        {" | "}
        <button onClick={() => navigate("/page1")}>Page1</button>
      </nav>
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/page1" component={Page1} />
      </Routes>
    </>
  );
}
