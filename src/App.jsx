import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
const asimLogo =
  'https://media.licdn.com/dms/image/D4E03AQGZkaB1m3cvtw/profile-displayphoto-shrink_800_800/0/1678393234752?e=2147483647&v=beta&t=nykAY5G8Jngb6S2VuoD6PQIaPI4JrpYlCQfez38OWSM';
// 'https://picallow.com/wp-content/uploads/2023/02/2023-02-22_63f60662d0e21_Me.jpg';
// 'https://media.licdn.com/dms/image/D4D03AQE3gKZVImJ-9g/profile-displayphoto-shrink_800_800/0/1668982928470?e=2147483647&v=beta&t=KyzQuvgV_CbzaZwaycA1wepzxVB8mdLqaGpyH-g4IS4';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a> */}
        <a
          href="https://pk.linkedin.com/in/muhammad-asim-703839203"
          target="_blank"
        >
          <img
            src={asimLogo}
            className="logo react"
            alt="Muhammad Asim Fullstack .Net Developer"
          />
        </a>
      </div>
      <h1 style={{ color: '#fff', userSelect: 'none' }}>I'm Muhammad Asim</h1>
      <p className="my-intro" style={{ color: '#fff', userSelect: 'none' }}>
        A Fullstack .Net Developer with experience in developing web
        applications using C#, ASP.Net, and SQL Server. I have a strong
        background in both front-end and back-end development, with expertise in
        HTML, CSS, JavaScript, and jQuery for creating responsive and
        user-friendly interfaces. I am also well-versed in using frameworks such
        as ReactJS, and have experience in integrating APIs and third-party
        tools to enhance application functionality. My passion for programming
        and desire to constantly learn and improve drives me to create
        high-quality, efficient, and scalable solutions for any project I work
        on.
      </p>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <p></p>
      </div>
      <p className="read-the-docs">
        {/* Click on the Vite and React logos to learn more */}
      </p>
    </div>
  );
}

export default App;
