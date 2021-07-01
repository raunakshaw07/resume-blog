import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Login from "./components/Login";
import Admin from "./components/Admin";
import CreateBlog from "./components/CreateBlog";

function App() {
  const message = [];
  let blog = [
    {
      id: 1,
      title: "Blog title",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel nibh magna. Vestibulum varius libero ut posuere pellentesque. Aliquam lacinia maximus nisl. Integer hendrerit interdum nibh et ornare. Nullam rutrum felis vel arcu rutrum aliquet. Praesent feugiat magna sapien, id lobortis nisi interdum quis. Pellentesque vulputate accumsan justo nec molestie. Suspendisse porta dui elit, ut varius est finibus ac. Cras ullamcorper diam tellus. Ut eu tincidunt lectus. Vivamus commodo diam quis orci pretium imperdiet.Donec eu lectus tellus.Sed vehicula lacus sit amet ligula cursus pretium.Donec pulvinar suscipit orci, quis ullamcorper dui rhoncus ut.Duis mattis ante metus, nec suscipit leo auctor eget.Nam augue elit, tristique in sem nec, volutpat eleifend dolor.Aenean sit amet nulla nisl.Maecenas consequat dui sed lorem ultrices, eu ornare nisi lobortis.Donec sollicitudin sagittis gravida. vel arcu rutrum aliquet. Praesent feugiat magna sapien, id lobortis nisi interdum quis. Pellentesque vulputate accumsan justo nec molestie. Suspendisse porta dui elit, ut varius est finibus ac. Cras ullamcorper diam tellus. Ut eu tincidunt lectus. Vivamus commodo diam quis orci pretium imperdiet.Donec eu lectus tellus.Sed vehicula lacus sit amet ligula cursus pretium.Donec pulvinar suscipit orci, quis ullamcorper dui rhoncus ut.Duis mattis ante metus, nec suscipit leo auctor eget.Nam augue elit, tristique in sem nec, volutpat eleifend dolor.Aenean sit amet nulla nisl.Maecenas consequat dui sed lorem ultrices, eu ornare nisi lobortis.Donec ",
      imgUrl:
        "https://images.unsplash.com/photo-1624622434252-5cebd4a99458?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      link: "#",
      createdAt: "2021-05-18T05:33:00.612+00:00",
    },
    {
      id: 2,
      title: "Blog title",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit Laudantium, accusamus.",
      imgUrl:
        "https://images.unsplash.com/photo-1547194936-28214bd75193?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDYyfEo5eXJQYUhYUlFZfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      link: "#",
      createdAt: "2021-05-18T05:33:00.612+00:00",
    },
    {
      id: 3,
      title: "Blog title",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit Laudantium, accusamus.",
      imgUrl:
        "https://images.unsplash.com/photo-1547194936-28214bd75193?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDYyfEo5eXJQYUhYUlFZfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      link: "#",
      createdAt: "2021-05-18T05:33:00.612+00:00",
    },
    {
      id: 4,
      title: "Blog title",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit Laudantium, accusamus.",
      imgUrl:
        "https://images.unsplash.com/photo-1547194936-28214bd75193?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDYyfEo5eXJQYUhYUlFZfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      link: "#",
      createdAt: "2021-05-18T05:33:00.612+00:00",
    },
  ];

  const addBlog = (newBlog) => {
    console.log("New Blog Added...");
    blog.unshift(newBlog);
    console.log(blog.length);
  };

  const truncate = (str, len) => {
    if (str.length > len && str.length > 0) {
      let new_str = str + "";
      new_str = str.substr(0, len);
      new_str = str.substr(0, new_str.lastIndexOf(" "));
      new_str = new_str.length > 0 ? new_str : str.substr(0, len);
      return new_str + "...";
    }
    return str;
  };

  const [resNav, setResNav] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div className="App">
        <div className="navbar">
          <ul>
            <li>
              <h3>
                <a href="/">Resume-Blog</a>
              </h3>
            </li>
            <li>
              <i
                className="fas fa-bars fa-2x"
                onClick={() => setResNav(!resNav)}
              ></i>
            </li>
          </ul>
          <ul
            className="menu-options"
            style={{
              display: resNav ? "block" : "none",
            }}
          >
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/blog">Blogs</a>
            </li>
            <li>
              <a href="/admin">Admin</a>
            </li>
            {isAuthenticated ? (
              <li>
                <button
                  onClick={() => setIsAuthenticated(false)}
                  style={{
                    border: "none",
                    outline: "none",
                    background: "#000000",
                    color: "#ffffff",
                    padding: "0.5rem 1rem",
                    cursor: "pointer",
                  }}
                >
                  Logout
                </button>
              </li>
            ) : null}
          </ul>

          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/blog">Blogs</a>
            </li>
            <li>
              <a href="/admin">Admin</a>
            </li>
            {isAuthenticated ? (
              <li>
                <button
                  onClick={() => setIsAuthenticated(false)}
                  style={{
                    border: "none",
                    outline: "none",
                    background: "#000000",
                    color: "#ffffff",
                    padding: "0.5rem 1rem",
                    transform: "translateY(-7px)",
                    cursor: "pointer",
                  }}
                >
                  Logout
                </button>
              </li>
            ) : null}
          </ul>
        </div>
        <Route
          path="/"
          exact
          render={(props) => <Home blog={blog} truncate={truncate} />}
        />
        <Route
          path="/blog"
          exact
          render={() => (
            <Blog
              blog={blog}
              truncate={truncate}
              isAuthenticated={isAuthenticated}
            />
          )}
        />
        <Route
          path="/admin"
          exact
          render={() =>
            isAuthenticated ? (
              <Admin truncate={truncate} blogs={blog} message={message} />
            ) : (
              <Login
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
              />
            )
          }
        />
        <Route
          path="/admin/create"
          exact
          render={() =>
            isAuthenticated ? (
              <CreateBlog addBlog={addBlog} />
            ) : (
              <Redirect to="/admin" />
            )
          }
        />
      </div>
    </Router>
  );
}

export default App;
