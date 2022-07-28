// eslint-disable-next-line no-unused-vars
import React, { memo } from 'react';
import './style.scss';
import arrowLeft from '../../assets/img/arrowLeft.svg';
import arrowRight from '../../assets/img/arrowRight.svg';

type ProgressControlFlow = {
  step: Number,
  setStep: (value: string) => void,
};

const ProgressControl: React.FC<ProgressControlFlow> = memo((props) => {
  const { step, setStep } = props;

  const clickNext = () => {
    if (step === 3) {
      return;
    }
    setStep(step + 1);
  };

  const clickPrevious = () => {
    if (step === 1) {
      return;
    }
    if (step === 2) {
      setStep(1);
    }
    if (step === 3) {
      setStep(2);
    }
  };
  const STEP_SETTINGS = {
    1: {
      previousText: '',
      nextText: '下一步',
      previusArrow: null,
      nextArrow: <img src={arrowRight} alt="" />,
    },
    2: {
      previousText: '上一步',
      previusArrow: <img src={arrowLeft} alt="" />,
      nextText: '下一步',
    },
    3: {
      previousText: '上一步',
      previusArrow: <img src={arrowLeft} alt="" />,
      nextText: '確認下單',
    },
  };

  const settings = STEP_SETTINGS[step];

  const previous = (
    <button className="previous" onClick={clickPrevious}>
      {settings.previusArrow}
      {settings.previousText}
    </button>
  );

  const next = (
    <button className="next" onClick={clickNext}>
      {settings.nextText}
      {settings.nextArrow}
    </button>
  );

  return (
    <div className="progressStep">
      <div className="btnGroup">
        {previous}
        {next}
      </div>
    </div>
  );
});

export default ProgressControl;
