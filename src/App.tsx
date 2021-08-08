import IMAGE from './assets/react-logo.png';
import styles from './App.module.scss';


export const App = () => {
  return (
    <>
      <h1 className = {styles.title}>React TypeScript Webpack Started Template</h1>
      <img src={IMAGE} alt="react-logo" width="300" height="200" />
    </>
  );
};

export default App;
