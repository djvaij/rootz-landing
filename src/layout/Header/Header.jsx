import React from 'react';
import { Container } from '../Container';
import styles from './Header.module.scss';

export default function Header({children}) {
  return (
    <Container xPaddings={false}>
      <header className={styles.header}>
        {children}
      </header>
    </Container>
  )
}
