import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Wrapper, Container } from "./styled";
import distData from "../constants/dist.json";

import { useData } from "../dataContext";

const Selector = () => {
  const { data, updateData } = useData();
  const [selectedDist, setSelectedDist] = useState("請選擇行政區");
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleDistChange = (e) => {
    const selectedZip = e.target.value;
    setSelectedDist(selectedZip);

    const filteredItems = data.filter((item) => selectedZip === item.Zipcode);
    setFilteredData(filteredItems);

    navigate(`/spotlist`, { state: { data: filteredItems } });
  };

  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://api.kcg.gov.tw/api/service/Get/9c8e1450-e833-499c-8320-29b36b7ace5c"
      );
      const data = await res.json();
      const newData = data.data.XML_Head.Infos.Info;
      updateData(newData);
      console.log("success");
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(selectedDist);
  }, [updateData]);

  return (
    <Wrapper>
      <div>
        <select defaultValue={selectedDist} onChange={handleDistChange}>
          <option disabled>請選擇行政區</option>
          {distData.map(({ zip, distName }) => (
            <option key={zip} value={zip}>
              {distName}
            </option>
          ))}
        </select>
      </div>
      {loading && (
        <div className="overlay">
          <p className="loading-text">資料載入中</p>
        </div>
      )}
      {!loading && (
        <Container>
          {filteredData.map((item) => (
            <ul key={item.Id}>
              <li key={item.Id}>
                <img src={item.Picture1} alt={item.Id} />
              </li>
              <Link
                key={item + item.Id}
                to={`/spotlist/${item.Id}`}
                state={{ data: item }}
              >
                {item.Name}
              </Link>
            </ul>
          ))}
        </Container>
      )}
    </Wrapper>
  );
};

export default Selector;
