import React, { useEffect, useState } from "react";
import axios from "axios";
import { http } from "../../util/config";
export const UseEffectDemo = (props) => {
  const [number, setNumber] = useState(0);
  const [arrProduct, setArrProduct] = useState([]);
  const [productDetail, setProductDetail] = useState({ image: "" });
  //   useEffect(() => {
  //     /*
  //         useEffect:
  //         Chạy sau khi component render (didMount)
  //         Chạy sau mỗi lần updating (state hoặc props thay đổi)(didUpdate)
  //     */
  //     console.log("useEffect run");
  //   });
  useEffect(() => {
    getAllProduct();
    // chạy như lifecycle  componentdidmount (dùng để call các api không có tham số)
    console.log("useeffect didmount run");
  }, []);
  useEffect(() => {
    /*
    Tương tự componentdidupdate thường dùng để setState có tham số
    */
    // Mỗi lần number thay đổi thì hàm này sẽ tự kích hoạt
    if (number !== 0) {
      getProductDetail(number);
    }
  }, [number]);
  useEffect(() => {
    const timeout = setInterval(() => {
      console.log(1);
    }, 1000);
    return () => {
      //Hàm này sẽ chạy khi component mất khỏi DOM (mất khỏi giao diện hiện tại)
      clearInterval(timeout);
    };
  }, []);

  console.log("arrProdut", arrProduct);
  const getAllProduct = async () => {
    const result = await http.get(`/api/product`);
    //Sau khi lấy dữ liệu từ api về đưa vào state arrProduct
    setArrProduct(result.data.content);
  };

  const getProductDetail = async (id) => {
    const result = await http.get(`/api/Product/getbyid?id=${id}`);
    setProductDetail(result.data.content);
  };
  return (
    <div>
      <h3>Number : {number}</h3>
      <button
        className="btn btn-dark"
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        +
      </button>
      <hr />
      <h3>Product Detail</h3>
      <img
        src={productDetail.image}
        alt="..."
        onError={({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping
          currentTarget.src = "https://i.pravatar.cc?u=3";
        }}
        className="w-25"
      />

      <button
        className="btn btn-dark mx-4"
        onClick={() => {
          setNumber(number - 1);
        }}
      >
        Prev
      </button>
      <button
        className="btn btn-dark"
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        Next
      </button>
      <hr />
      <h3>Product List</h3>
      <div className="row">
        {arrProduct.map((item, index) => {
          return (
            <div className="col-3" key={index}>
              <div className="card">
                <img src={item.image} alt="" />
                <div className="card-body">
                  <h3>{item.name}</h3>
                  <p>{item.price}$</p>
                  <button
                    className="btn btn-dark"
                    onClick={() => {
                      setNumber(item.id);
                    }}
                  >
                    View detail
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
