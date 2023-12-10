import { useParams, useNavigate, useLocation } from "react-router-dom";
import { Wrapper, Container } from "./styled";

const SpotDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { data } = location.state;

  return (
    <>
      {data && (
        <Wrapper>
          <img src={data.Picture1} alt={data.Name} />
          <h2>{data.Name}</h2>
          <p>{data.Description}</p>
          <Container>
            <h3>▸ 景點資訊</h3>
            <ul>
              <li>
                <span>開放時間：</span>
                {data.Opentime}
              </li>
              <li>
                <span>聯絡電話：</span>
                {data.Tel}
              </li>
              <li>
                <span>地址：</span>
                {data.Add}
              </li>
            </ul>
          </Container>
          <input
            type="button"
            value="回景點列表"
            onClick={() => {
              navigate(-1);
            }}
          />
        </Wrapper>
      )}
    </>
  );
};

export default SpotDetail;
