import { Button } from './components/Button';

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.frame}>
        <div className={styles.display}>
          <div className={styles.calc_input}>1 + 1</div>

          <div className={styles.calc_output}>
            <div className="operation">=</div>

            <p>2</p>
          </div>
        </div>

        <div className={styles.buttons}>
          <Button label={'CE'} />
          <Button label={'C'} />
          <Button label={'%'} />
          <Button label={'/'} operation />
          <Button label={7} />
          <Button label={8} />
          <Button label={9} />
          <Button label={'x'} operation />
          <Button label={4} />
          <Button label={5} />
          <Button label={6} />
          <Button label={'-'} operation />
          <Button label={1} />
          <Button label={2} />
          <Button label={3} />
          <Button label={'+'} operation />
          <Button label={'+/-'} />
          <Button label={0} />
          <Button label={','} />
          <Button label={'='} operation />
        </div>
      </div>
    </div>
  );
}

export default App;
