import React from 'react';
import ReactDOM from 'react-dom';
// import * as React from 'react';
import './style.css';

// export default function App() {
//   return (
//     <div>
//       <h1>Hello StackBlitz!</h1>
//       <p>Start editing to see some magic happen :)</p>
//     </div>
//   );
// }

export function App() {
  return (
    <div>
      <header>
        <h1>Software Development Portfolio</h1>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="hero">
          <h2>Welcome to my portfolio website!</h2>
          <p>
            I am an undergraduate student studying software development and this
            website is a showcase of my projects and skills.
          </p>
          <button>View My Projects</button>
        </section>
        <section id="projects">
          <h2>Projects</h2>
          <div className="project-card">
            <h3>Project 1</h3>
            <p>A brief description of the project goes here.</p>
            <button>View Project Details</button>
          </div>
          <div className="project-card">
            <h3>Project 2</h3>
            <p>A brief description of the project goes here.</p>
            <button>View Project Details</button>
          </div>
          <div className="project-card">
            <h3>Project 3</h3>
            <p>A brief description of the project goes here.</p>
            <button>View Project Details</button>
          </div>
        </section>
        <section id="about">
          <h2>About Me</h2>
          <p>A short bio of yourself goes here.</p>
          <ul>
            <li>
              <strong>Name:</strong> John Doe
            </li>
            <li>
              <strong>Location:</strong> Anytown, USA
            </li>
            <li>
              <strong>Education:</strong> Bachelor's in Software Development
              (expected graduation: May 2023)
            </li>
          </ul>
        </section>
        <section id="contact">
          <h2>Contact Me</h2>
          <form>
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit">Send</button>
          </form>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 John Doe</p>
      </footer>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));
