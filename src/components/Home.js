import React, { useState } from "react";
import model from "../model1.jpg";
import Modal from "../helpers/Modal";
import ShowBlog from "./ShowBlog";

const Home = (props) => {
  const [open, setOpen] = useState(false);
  const [blogOpen, setBlogOpen] = useState(false);
  const [displayBlog, setDisplayBlog] = useState(null);

  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [msg, setMsg] = useState(null);

  const { blog, truncate } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      name,
      email,
      phone,
      msg,
    });
  };

  const skill = [
    {
      id: 1,
      text: "Html",
      percent: 90,
      stroke: "#aa74d6",
    },
    ,
    {
      id: 2,
      text: "Css",
      percent: 75,
      stroke: "#22c7a3",
    },
    {
      id: 3,
      text: "JavaScript",
      percent: 60,
      stroke: "#e2f553",
    },
    {
      id: 4,
      text: "Python",
      percent: 70,
      stroke: "#f55391",
    },
  ];

  return (
    <div className="home">
      <section className="section1">
        <div className="sidebar">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-linkedin"></i>
        </div>
        <div className="left">
          <div className="content">
            <h1>Raunak Shaw</h1>
            <p>- Web Developer</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Provident, at error quod laboriosam officiis accusamus soluta a
              repudiandae facilis adipisci!
            </p>
            <div className="button">
              <button>Download CV</button>
              <button onClick={() => setOpen(true)}>Send Message</button>
            </div>
          </div>
        </div>
        <div className="right">
          <img src={model} alt="Model" />
        </div>
      </section>
      <section className="section2">
        {/* About Section */}
        <div className="about" id="about">
          <h1>About me</h1>
          <div className="content">
            <div className="model">
              <img src={model} alt="Model" />
            </div>
            <div className="info">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Recusandae saepe, consequatur doloremque similique ducimus
                delectus doloribus voluptatum omnis quibusdam earum repudiandae,
                dolor cumque, officiis quidem officia excepturi nihil cupiditate
                harum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolore dolores doloremque doloribus quibusdam tempora
                perferendis itaque vel cum modi eligendi. Temporibus libero
                culpa doloribus a, fugit itaque laudantium porro iste!
              </p>
              <div className="contact">
                <h3>
                  <i className="fas fa-envelope-open-text"></i> abc@gmail.com
                </h3>
                <h3>
                  <i className="fas fa-phone"></i> 12345677890
                </h3>
                <h3>
                  <i className="fas fa-home"></i> Lorem ipsum dolor sit amet.
                </h3>
                <h3>
                  <i className="fab fa-facebook-f"></i>
                  <i className="fab fa-instagram"></i>
                  <i className="fab fa-twitter"></i>
                  <i className="fab fa-linkedin"></i>
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="skills" id="skills">
          <h1>Skill Proficiency</h1>
          <ul>
            {skill.map((sk) => (
              <li key={sk.id}>
                <div className="card">
                  <div className="box">
                    <div className="percent">
                      <svg>
                        <circle cx="70" cy="70" r="70"></circle>
                        <circle
                          cx="70"
                          cy="70"
                          r="70"
                          style={{
                            stroke: sk.stroke,
                            strokeDashoffset: `calc(440 - (440 * ${sk.percent}) / 100)`,
                          }}
                        ></circle>
                      </svg>
                      <div className="number">
                        <h2>
                          {sk.percent}
                          <span>%</span>
                        </h2>
                      </div>
                      <h3 className="text">{sk.text}</h3>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Blogs Section */}
        <div className="blogs" id="blogs">
          <h1>Blogs</h1>
          <div className="inner">
            <div className="blog">
              {blog.map((bl) => (
                <div className="blog-card" key={bl.id}>
                  <div
                    className="image"
                    style={{
                      background: `url(${bl.imgUrl})`,
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                  ></div>
                  <div className="content">
                    <h2>{bl.title}</h2>
                    <p>{truncate(bl.body, 40)}</p>
                    <br />
                    <button
                      onClick={() => {
                        setDisplayBlog(bl);
                        setBlogOpen(true);
                      }}
                    >
                      Read
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="readMore">
              <a href="/blog">
                <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Show Blog */}
      <Modal open={blogOpen}>
        <ShowBlog blog={displayBlog} setOpen={setBlogOpen} />
      </Modal>

      {/* Message form */}
      <Modal open={open}>
        <div className="message">
          <div className="inner">
            <div className="close">
              <button onClick={() => setOpen(false)}>x</button>
            </div>
            <h1>Message Me</h1>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="phone">Phone</label>
              <input
                type="phone"
                name="phone"
                id="phone"
                onChange={(e) => setPhone(e.target.value)}
              />
              <label htmlFor="msg">Message</label>
              <textarea
                name="msg"
                id="msg"
                cols="30"
                rows="7"
                onChange={(e) => setMsg(e.target.value)}
              ></textarea>
              <div className="buttons">
                <button type="button" onClick={() => setOpen(false)}>
                  Cancel
                </button>
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Home;
