import React from 'react'
import classNames from 'classnames';
import styles from './Container.module.scss';
import PropTypes from 'prop-types';

function Container({
  children,
  xPaddings = true,
  fullWidth = false,
  className = '',
}) {
  return (
    <div
      className={classNames(
        styles.container,
        {
          [styles.xPaddings]: xPaddings,
          [styles.fullWidth]: fullWidth,
        },
        className
      )}
    >
      {children}
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired,
  xPaddings: PropTypes.bool,
  fullWidth: PropTypes.bool,
};

export default Container
