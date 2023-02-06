import styles from './Button.module.css';

export function Button({ label, operation }) {
  let style = `${styles.container}`;

  if (operation) {
    style += ` ${styles.operation}`;
  }

  if (label === '=' && operation) {
    style += ` ${styles.equal_operation}`;
  }

  if (label === 'CE') {
    style += ` ${styles.ce_operation}`;
  }

  return <button className={style}>{label}</button>;
}
