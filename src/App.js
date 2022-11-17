import './css/style.css';

//components
import List from './components/list/List';
import Seeker from './components/seeker/Seeker';
import Create from './components/create/Create';

function App() {
  return (
    <div className="layout">

      <header className="header">

        <div className="logo">
          <div className="play-logo"></div>
        </div>

        <h1>Movies v2</h1>

      </header>

      <nav className="navbar">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">Movies</a></li>
          <li><a href="/">Blog</a></li>
          <li><a href="/">Contact</a></li>
        </ul>
      </nav>


      <section className="content">
        {/*movies here*/}
        <List />
      </section>




      {/*Aside*/}
      <aside className="aside">
        <Seeker />
        <Create />
      </aside>

      {/*Aside />*/}



      <footer className="footer">
        &copy; Master in JavaScript E12 and React - <a href="https://portfolio-eder-gamma.vercel.app"
          target="_blank" rel='noreferrer'>Eder's Portfolio</a>
      </footer>

    </div>

  );
}

export default App;
