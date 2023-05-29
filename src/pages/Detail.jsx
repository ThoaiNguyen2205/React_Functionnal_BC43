import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
const Detail = () => {
  const [productDetail, setProductDetail] = useState({
    id: 1,
    name: "Adidas Prophere",
    alias: "adidas-prophere",
    price: 350,
    feature: false,
    description:
      "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    size: ["36", "37", "38", "39", "40", "41", "42"],
    shortDescription:
      "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
    quantity: 995,
    image: "https://shop.cyberlearn.vn/images/adidas-prophere.png",
    categories: [
      {
        id: "ADIDAS",
        category: "ADIDAS",
      },
      {
        id: "MEN",
        category: "MEN",
      },
      {
        id: "WOMEN",
        category: "WOMEN",
      },
    ],
    relatedProducts: [
      {
        id: 2,
        name: "Adidas Prophere Black White",
        alias: "adidas-prophere-black-white",
        feature: false,
        price: 450,
        description:
          "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        shortDescription:
          "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        image:
          "https://shop.cyberlearn.vn/images/adidas-prophere-black-white.png",
      },
      {
        id: 3,
        name: "Adidas Prophere Customize",
        alias: "adidas-prophere-customize",
        feature: false,
        price: 375,
        description:
          "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        shortDescription:
          "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        image:
          "https://shop.cyberlearn.vn/images/adidas-prophere-customize.png",
      },
      {
        id: 5,
        name: "Adidas Swift Run",
        alias: "adidas-swift-run",
        feature: false,
        price: 550,
        description:
          "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        shortDescription:
          "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        image: "https://shop.cyberlearn.vn/images/adidas-swift-run.png",
      },
    ],
  });
  // Lấy tham số trên url
  const params = useParams();
  useEffect(() => {
    // Call api  lúc vừa load
    getProductDetailApi(params.id);
  }, [params.id]);
  const getProductDetailApi = async (id) => {
    const result = await axios({
      url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
      method: "GET",
    });
    //Đưa dữ liêuj lấy từ api về state
    setProductDetail(result.data.content);
  };
  return (
    <div className="">
      <div className="row mt-5">
        <div className="col-4">
          <img src={productDetail.image} alt="" className="w-100" />
        </div>
        <div className="col-8">
          <h4>{productDetail.name}</h4>
          <p>{productDetail.description}</p>
        </div>
      </div>
      <h3>Relate products</h3>
      <div className="row">
        {productDetail.relatedProducts?.map((prod, index) => {
          return (
            <div className="col-4" key={index}>
              <div className="card">
                <img src={prod.image} alt="" />
                <div className="card-body">
                  <h3>{prod.name}</h3>
                  <p>{prod.price}</p>
                  <NavLink className={"btn btn-dark"} to={`/detail/${prod.id}`}>
                    <i className="fa fa-eye"></i> View detail
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

export default Detail;
