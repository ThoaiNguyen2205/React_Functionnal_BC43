import React, { useEffect, useRef, useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import axios from "axios";
const Search = () => {
  const keywordRef = useRef("");
  const [arrproduct, setArrProduct] = useState([]);
  const [keyword, setKeyword] = useSearchParams();
  useEffect(() => {
    // Lấy ra keyword=> khác rỗng thì mới gọi api
    const kWord = keyword.get("k");
    if (kWord !== "") {
      getProductByKeyword(kWord);
    }
  }, [keyword.get("k")]); // keyword trên url thay đổi thì useEffect này sẽ chạy
  const getProductByKeyword = async (keyword) => {
    const result = await axios({
      url: `https://shop.cyberlearn.vn/api/Product?keyword=${keyword}`,
      method: "GET",
    });
    setArrProduct(result.data.content);
  };
  const handleChange = (e) => {
    const { id, value } = e.target;
    keywordRef.current = value;
    //gọi api
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Đưa keyword lên params
    setKeyword({
      k: keywordRef.current,
    });
  };
  return (
    <div className="container">
      <h3>Tìm kiếm sản phẩm</h3>
      <form className="form-group" onSubmit={handleSubmit}>
        <input id="keyword" className="form-control" onInput={handleChange} />
        <button className="btn btn-dark">Search</button>
      </form>
      <h3>Kết quả tìm thấy ({arrproduct.length})</h3>
      <div className="row">
        {arrproduct.map((item, index) => {
          return (
            <div className="col-4 mt-2" key={index}>
              <div className="card">
                <img src={item.image} alt="" />
                <div className="card-body">
                  <h3>{item.name}</h3>
                  <p>{item.price}</p>
                  <NavLink className={"btn btn-dark"} to={`/detail/${item.id}`}>
                    {" "}
                    View detail
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Search;
