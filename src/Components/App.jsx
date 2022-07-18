import '../css/style.scss';
import Header from './Header';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Cart from './Cart';
import StepProgress from './StepProgress';
import ProgressControl from './ProgressControl';
import Footer from './Footer';

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
        <Footer />
      </div>
    </div>
  );
};

export default App;
