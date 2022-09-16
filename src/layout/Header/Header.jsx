import React from 'react';
import { Container } from '../Container';
import styles from './Header.module.scss';
import classNames from 'classnames';

export default function Header({children, className}) {
  return (
    <Container xPaddings={false}>
      <header
        className={classNames(
          styles.header,
          className,
        )}
      >
        {children}
      </header>
    </Container>
  )
}
