import React from 'react'
import PropTypes from 'prop-types';
import './button.css'
import icon from './assets/defaultIcon.png'

export const IconButton = (
  {
    primary,
    backgroundColor,
    size,
    label,
    color,
    borderColor,
    iconImage,
    iconAlt,
    disabled,
    onMouseOver,
    onMouseOverState,
    ...props
  }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  const buttonStyle = {
    backgroundColor: backgroundColor && backgroundColor,
    color : color && color,
    borderColor: borderColor && borderColor
  }
  const dividerStyle = {
    height: 50,
    borderColor: borderColor && borderColor
  }
  const disabledStyle = {
    backgroundColor: '#e3e3e3',
    color: '#c1c1c1',
    borderColor: '#c1c1c1'
  }
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--medium`, mode].join(' ')}
      style={disabled ? disabledStyle : buttonStyle}
      disabled={disabled ? true : false}
      onMouseOver={() => onMouseOver()}
      {...props}
    >

<img className='icon' src={iconImage} alt={iconAlt}/>
      <span className='button-divider' style={disabled ? disabledStyle : dividerStyle }>
      </span>
      <div className='item'>{label}</div>
    </button>
  );
}

IconButton.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * chnage Icon
   */
  iconImage: PropTypes.any,
  /**
   * chnage Icon alt
   */
  iconAlt: PropTypes.string,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
   /**
   * What text & icon color to use
   */
  color: PropTypes.string,
  /**
   * What text & icon color to use
   */
  borderColor: PropTypes.string,
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  /**
   * Optional hover handler
   */
  onMouseOver: PropTypes.func,
   /**
   * Disabled the button
   */
  disabled: PropTypes.bool,
};

IconButton.defaultProps = {
  backgroundColor: null,
  color: null,
  borderColor: null,
  iconImage: icon,
  iconAlt: 'MyIcon',
  primary: false,
  size: 'medium',
  onClick: undefined,
  onMouseOver: undefined,
  disabled: false
};
