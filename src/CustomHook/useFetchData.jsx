import axios from "axios";
import React, { useEffect, useState } from "react";
/**
 * 1 hook thực hiện chức năng call api dựa vài tham số url => trả về data sau khi gọi api thành công
 * @param {*} url là đường dẫn đến api backend
 * @returns dữ liệu trả về là kết quả từ api
 */

export default function useFetchData(url) {
  const [data, setData] = useState([]);
  const getDataApi = async () => {
    const res = await axios({
      url: url,
      method: "GET",
    });
    setData(res.data.content);
  };
  useEffect(() => {
    getDataApi();
  }, []);
  return data;
}
