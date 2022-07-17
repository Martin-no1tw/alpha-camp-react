import '../css/style.scss';
import Header from './Header/index';
import Step1 from './Step1/index';
import Step2 from './Step2/index';
import Step3 from './Step3/index';
import Cart from './Cart/index';
import StepProgress from './StepProgress/index';
import ProgressControl from './ProgressControl/index';

const App = () => {
  return (
    <div className="header-container mx-auto">
      <Header />
      <StepProgress />
      <div className="transfer-container">
        <div className="progress">
          <Step1 />
          <Step2 />
          <Step3 />
          <ProgressControl />
        </div>
        <div className="cart">
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default App;
