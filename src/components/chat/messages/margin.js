import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Avatar from 'components/utils/avatar';
import { handleOnEnterPress } from 'utils/data/handlers';
import './index.scss';

const propTypes = {
  active: PropTypes.bool,
  circle: PropTypes.bool,
  icon: PropTypes.string,
  initials: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
  emphasised: PropTypes.bool
};

const defaultProps = {
  active: false,
  circle: false,
  icon: '',
  initials: '',
  name: '',
  onClick: () => {},
  emphasised: false,
};

const Margin = ({
  active,
  circle,
  icon,
  initials,
  name,
  onClick,
  emphasised,
}) => {
  const style = {
    circle,
    "moderator-avatar": emphasised,
    inactive: !active,
  };

  return (
    <div
      className={cx('interactive', style)}
      onClick={onClick}
      onKeyPress={event => handleOnEnterPress(event, onClick)}
      tabIndex="0"
    >
      <Avatar
        active={active}
        circle={circle}
        emphasised={emphasised}
        icon={icon}
        initials={initials}
        name={name}
      />
    </div>
  );
};

Margin.propTypes = propTypes;
Margin.defaultProps = defaultProps;

export default Margin;
