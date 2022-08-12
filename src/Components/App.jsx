import { useState, memo, useMemo, useCallback } from 'react';
import '../css/style.scss';
import Header from './Header';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Cart from './Cart';
import StepProgress from './StepProgress';
import ProgressControl from './ProgressControl';
import Footer from './Footer';
import { CartContext } from '../Context/CartContext';
import useShoppingCart from '../hooks/useShoppingCart';

const products = [
  {
    id: '1',
    name: '貓咪罐罐',
    img: 'https://picsum.photos/300/300?text=1',
    price: 100,
    quantity: 2,
  },
  {
    id: '2',
    name: '貓咪干干',
    img: 'https://picsum.photos/300/300?text=2',
    price: 200,
    quantity: 1,
  },
];

const App = memo(() => {
  const [step, setStep] = useState(1);
  const [state, dispatch] = useShoppingCart();

  const atStepChange = useCallback((count: Number) => {
    setStep((prev) => prev + count);
  }, []);

  let showStep;
  if (step === 1) {
    showStep = <Step1 />;
  } else if (step === 2) {
    showStep = <Step2 />;
  } else if (step === 3) {
    showStep = <Step3 />;
  }

  const ProviderValue = useMemo(() => {
    return {
      state,
      step,
      products,
      dispatch,
    };
  }, [step, dispatch, state]);

  return (
    <div className="container">
      <div className="header-container">
        <Header />
        <div className="progress">
          <StepProgress step={step} />
          {showStep}
          <ProgressControl step={step} onClickStepBtn={atStepChange} />
        </div>
      </div>

      <div className="cart">
        <CartContext.Provider value={ProviderValue}>
          <Cart />
        </CartContext.Provider>
      </div>
      <Footer />
    </div>
  );
});

export default App;
