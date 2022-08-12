import { memo, useCallback } from 'react';
import useCartContext from '../../Context/CartContext';
import { actionChangTransport } from '../../hooks/actions';
import './style.scss';

const TRANSPORTS = [
  {
    id: 'transport1',
    trans: '標準運送',
    price: 0,
    workDay: '約3~7個工作天',
  },
  {
    id: 'transport2',
    trans: 'DHL 運送',
    price: 500,
    workDay: '48小時內送達',
  },
];

const Step2 = () => {
  const { dispatch } = useCartContext();
  const atSelectTransport = useCallback(
    (selectTrans: Object) => {
      dispatch(actionChangTransport(selectTrans));
    },
    [dispatch],
  );
  return (
    <>
      <form action="" method="post">
        <div className="transfer-container">
          <div className="row">
            <h3>運送方式</h3>
            {TRANSPORTS.map((transport) => {
              return (
                <div className="transfer-container" key={transport.id}>
                  <div className="standard-container">
                    <input
                      className="form-check-input me-3"
                      type="radio"
                      name="flexRadioDefault"
                      id={transport.id}
                      onClick={() => {
                        atSelectTransport(transport);
                      }}
                    />
                    <label className="shipping-basic" htmlFor={transport.id}>
                      <span className="shipping-basic">{transport.trans}</span>
                      <span className="charge">
                        {transport.price === 0 ? '免費' : transport.price}
                      </span>

                      <div className="arrival">{transport.workDay}</div>
                    </label>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </form>
      <hr className="mt-5" />
    </>
  );
};
export default memo(Step2);
