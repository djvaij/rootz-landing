import React from 'react';
import classNames from 'classnames';
import styles from './Menu.module.scss';
import MenuButton from './../MenuButton/MenuButton';
import { useState } from 'react';

const menuItems = [
  {
    title: 'Home',
    href: '/',
    isActive: true,
  },
  {
    title: 'Our mission',
    href: '#mission',
    isActive: false,
  },
  {
    title: 'Places',
    href: '#places',
    isActive: false,
  },
  {
    title: 'Team',
    href: '#team',
    isActive: false,
  },
];

function Menu({className}) {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(prev => !prev);
  };

  const list = menuItems.map(item => {
    const {title, href, isActive} = item;

    return (
      <li
        className={classNames(
          styles.item,
          {
            [styles.active]: isActive
          },
        )}
        key={crypto.randomUUID()}
      >
        <a
          onClick={isActive ? (e) => e.preventDefault() : null}
          href={href}
        >
          {title}
        </a>
      </li>
    );
  });

  return (
    <>
      <MenuButton isActive={isActive} onClick={toggleMenu} />
      <ul
        className={classNames(
          styles.menu,
          {
            [styles.open]: isActive,
          },
          className
        )}
      >
        {list}
      </ul>
    </>
  );
}

export default Menu;