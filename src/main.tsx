import { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link, useRoutes } from "react-router-dom";

import routes from "~react-pages";

const Layout: React.FC = ({ children }) => {
    const List = ({ name }: { name: string }) => (
        <li>
            <Link to={name}>{name}</Link>
        </li>
    );
    const links = ["modern-normalize", "normalize", "eric-meyer", "tailwind"];
    return (
        <>
            <nav>
                <ul style={{ display: "flex", gap: "2rem", padding: "1rem" }}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    {links.map((name) => (
                        <List key={name} name={name} />
                    ))}
                </ul>
            </nav>
            {children}
        </>
    );
};

const App = () => {
    return (
        <Layout>
            <Suspense fallback={<p>Loading...</p>}>
                {useRoutes(routes)}
            </Suspense>
        </Layout>
    );
};

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById("root")
);
