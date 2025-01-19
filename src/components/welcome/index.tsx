import classNames from 'classnames';
import styles from './index.module.less';
import icon from '/orion.ico';

const Welcome = () => {
  return (
    <div>
      <h1 className={classNames(styles['welcome'])}>{'Welcome to Orion Fe Template'}</h1>
      <img src={icon} alt='Orion' />
    </div>
  );
};

export { Welcome };
