import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Image from '../../elements/Image';
import Peace_Logo from './../../../assets/images/peace3.png'

const Logo = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <h1 className="m-0">
        <Link to="/">
          <Image
            src={Peace_Logo}
            alt="Open"
            width={42}
            height={42} />
        </Link>
      </h1>
    </div>
  );
}

export default Logo;