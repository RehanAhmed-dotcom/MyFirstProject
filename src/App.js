import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom';
import Main from "./components/Main";
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl';
function App() {
  return (
    <div style={{height: '600px', position: 'relative'}}>
    <Layout style={{background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'}}>
        <Header transparent title="R." style={{color: 'white',fontSize:30}}>
            <Navigation>
                <Link to="/">Home</Link>
                {/* <Link to="/about">About</Link> */}
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/login">Login</Link>
                
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
            </Navigation>
        </Drawer>
        <Content>
          <div className="page-contant" />
          <Main />
          </Content>
    </Layout>
</div>
  );
}

export default App;
