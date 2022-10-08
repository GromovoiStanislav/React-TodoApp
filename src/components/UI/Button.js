import styles from './Button.module.css';

function Button({ onClick, children, title, disabled = false }) {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      disabled={disabled}
      title={title}
    >
      {children}
    </button>
  );
}

export default Button;
