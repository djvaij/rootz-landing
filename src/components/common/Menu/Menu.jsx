import React from 'react';
import classNames from 'classnames';
import styles from './Menu.module.scss';
import MenuButton from '../MenuButton/MenuButton';
import { useState } from 'react';
import ApplyButton from '../ApplyButton/ApplyButton';
import { useEffect } from 'react';

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
    clickHandler: (event) => {
      const searchInput = document.getElementById('search');
      setTimeout(() => {
        searchInput.focus();
      }, 300);
    }
  },
  {
    title: 'Team',
    href: '#team',
    isActive: false,
  },
];

function Menu({className}) {
  const [isActive, setIsActive] = useState(false);

  const defaultClickHandler = (event) => {
    event.preventDefault();
    const id = new URL(event.target.href).hash;
    const scrollToElement = document.querySelector(id);

    if (!scrollToElement) {
      return;
    }

    const scrollMinus =
      scrollToElement.dataset.scrollMinus ? parseInt(scrollToElement.dataset.scrollMinus, 10) : 0; 

    const scrollToElementData = scrollToElement.getBoundingClientRect();
    const scrollY = scrollToElementData.y || scrollToElementData.top;
    const scrollYPosition = scrollY - scrollMinus;

    window.scrollTo({
      top: scrollYPosition,
    });
  };

  const toggleMenu = () => {
    setIsActive(prev => !prev);
  };

  useEffect(() => {
    if (isActive) {
      window.document.body.classList.add('scroll-disabled');
    } else {
      window.document.body.classList.remove('scroll-disabled');
    }
  }, [isActive]);

  const list = menuItems.map(item => {
    const {title, href, isActive, clickHandler} = item;

    const onCLick = (e) => {
      if (clickHandler) {
        return clickHandler(e);
      }

      if (isActive) {
        e.preventDefault();
        return
      }

      return defaultClickHandler(e);
    };

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
          onClick={onCLick}
          href={href}
        >
          {title}
        </a>
      </li>
    );
  });

  return (
    <nav className={styles.nav}>
      <MenuButton isActive={isActive} onClick={toggleMenu} />
      <div
        className={classNames(
          styles.wrapper,
          {
            [styles.open]: isActive,
          }
        )}
      >
        <ul
          className={classNames(
            styles.menu,
            className
          )}
        >
          {list}
        </ul>
        <ApplyButton
          className={classNames(
            styles.applyButton,
          )}
        />
      </div>
    </nav>
  );
}

export default Menu;