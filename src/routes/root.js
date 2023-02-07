import Footer1 from '../components/footer/Footer1';
import App from '../App';
import Login from "../Login/Login";
import { Link } from 'react-router-dom';
import Heros from '../components/Hero/Hero'
import Contact from '../components/contact/contact';
import Nav from '../components/nav/nav'

export default function Root() {
    return (
      
      <div className='App'>
        <header>
        <div id="sidebar">
        <Heros/>
        <Nav/>
          <h1 className='header'>Học luyện thi Online</h1>
          <div>
            
            <form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={true}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </form>
            <form method="post">
              <button type="submit">New</button>
            </form>
          </div>
          <nav className='root'>
            <ul>
              <li>
                <Link className='css-login' to={`Login/`}>Login</Link>
              </li>
              <li>
                <a href={`contacts/2`}>Your Friend</a>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail"></div>
        <Contact/>
        <Footer1/>
        </header>
        </div>
        
    );
  }