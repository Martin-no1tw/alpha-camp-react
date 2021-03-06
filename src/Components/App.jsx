import { useState } from 'react';
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
  const [step, setStep] = useState(1);
  let showStep;
  if (step === 1) {
    showStep = <Step1 />;
  } else if (step === 2) {
    showStep = <Step2 />;
  } else if (step === 3) {
    showStep = <Step3 />;
  }

  return (
    <div className="container">
      <div className="header-container">
        <Header />
        <div className="progress">
          <StepProgress step={step} />
          {showStep}
          <ProgressControl step={step} setStep={setStep} />
        </div>
      </div>

      <div className="cart">
        <Cart />
      </div>
      <Footer />
    </div>
  );
};

export default App;
