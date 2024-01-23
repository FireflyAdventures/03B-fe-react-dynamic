import * as React from 'react';
import Footer from '../components/footer/Footer';
import NavBar from '../components/navbars/Navbars';

const MainLayout = ({  children }) => {
  return (
    <div className="Main-container">
      <div className="Main-nav-container ">
      <NavBar />
          <div className="Main-children-container">{children}</div>
          <Footer/>
        </div>
      </div>
  );
};

export default MainLayout;
