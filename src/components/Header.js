import React from 'react';

const Header = (props) => (
    <div className='header'>
      <a style={{textDecoration: "none", color: "grey"}} href="http://jonathan-guzman.s3-website-us-east-1.amazonaws.com">Back To Jona's Portfolio</a>
      <div className="container">
      <h1 className='header__title'>{props.title}</h1>
      {props.subtitle && <h2 className='header__subtitle'>{props.subtitle}</h2>}
      </div>
    </div>
  );

Header.defaultProps = {
  title: 'Indecision'
};

export default Header;