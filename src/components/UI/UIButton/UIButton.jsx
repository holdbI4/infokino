import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './UIButton.module.scss';


const UIButton = ({ text, classes, Icon, type = 'primary', ...props }) => {
     const icon = Icon ? <Icon/> : '';

     return (
          <button className={cn(styles.button, styles[type], classes)} {...props}>
               {icon}
               <span>{text}</span>
          </button>
     )
}

UIButton.propTypes = {
     text: PropTypes.string
};

export default UIButton;