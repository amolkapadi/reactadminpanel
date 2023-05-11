import React, { useState, useEffect } from "react";

import "./Searchproduct.css";
export const SearchProduct = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const FetchApi = async () => {
    const result = await fetch("https://fakestoreapi.com/products");
    const res = await result.json();
    setData(res);
    console.log(res);
  };

  useEffect(() => {
    FetchApi();
  }, []);

  return (
    <div className="container">
      <div className="searchProduct w-50 mx-auto mt-5">
        <h1 className="text-center">Search Product</h1>
        <input
          className="form-control"
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
        {data
          .filter((val) => {
            if (search === "") {
              return val;
            } else if (
              val.category.toLowerCase().includes(search.toLowerCase())
            ) {
              return val;
            }
          })
          .map((val) => {
            return (
              <div className="col py-2" key={val.id}>
                <div className="card">
                  <img src={val.image} alt="val.title" className="img-fluid" />

                  <div className="card-body">
                    <div className="d-flex justify-content-between mb-3">
                      <span className="badge bg-primary">{val.category}</span>
                      <span className="badge bg-primary">{val.rating.rate}</span>
                    </div>
                    
                    <h5 className="card-title">{val.title.substring(0, 50)}</h5>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
