import './style.scss';
// eslint-disable-next-line no-unused-vars
import bootstrap from 'bootstrap';

const cityName = [
  '請選擇縣市',
  '台北市',
  '新北市',
  '桃園市',
  '基隆市',
  '新竹市',
  '苗栗縣',
  '台中市',
  '彰化縣',
  '雲林縣',
  '嘉義市',
  '嘉義縣',
  '台南市',
  '高雄市',
  '屏東縣',
  '南投縣',
  '宜蘭縣',
  '台東縣',
  '花蓮縣',
  '澎湖縣',
  '金門線',
  '馬祖縣',
];

const Step1 = () => {
  return (
    <>
      <h2 className="title">寄送地址</h2>
      <form>
        <div className="form-basic">
          <div className="input-basic-detail">
            <div className="input-title">稱謂</div>
            <select className="form-select">
              <option value="0">女士</option>
              <option value="1">先生</option>
            </select>
          </div>
          <div className="form-name">
            <div className="input-title">姓名</div>
            <input
              className="input-name"
              type="text"
              placeholder="請輸入姓名"
            />
          </div>
        </div>
        <div className="form-contact">
          <div className="input-phone">
            <div className="input-title">電話</div>
            <input
              className="form-control"
              type="text"
              placeholder="請輸入行動電話"
            />
          </div>
          <div className="input-email">
            <div className="input-title">Email</div>
            <input
              className="form-control"
              type="text"
              placeholder="請輸入電子郵件"
            />
          </div>
        </div>
        <div className="form-address">
          <div className="input-city">
            <div className="input-title">縣市</div>
            <select className="form-select" aria-labelledby="dropdownMenu2">
              {cityName.map((city) => {
                return (
                  <option key={city} value={city}>
                    {city}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="input-address">
            <div className="input-title">地址</div>
            <input
              className="form-control-address"
              type="text"
              placeholder="請輸入地址"
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default Step1;
