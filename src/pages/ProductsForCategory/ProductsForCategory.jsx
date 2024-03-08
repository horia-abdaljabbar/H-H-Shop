import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import "./ProductsForCategories.css";
function ProductsForCategory() {
  const { categoryId } = useParams();
  let [products, setProducts] = useState([]);
  let [showMoreLink, setShowMoreLink] = useState(false);
  const getCategories = async () => {
    const { data } = await axios.get(
      `https://ecommerce-node4.vercel.app/products/category/${categoryId}`
    );
    setProducts(data.products);
    console.log(products);
  };
  useEffect(() => {
    getCategories();
  }, []);
  const showMore = () => {
    setShowMoreLink(!showMoreLink);
  };
  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-between gap-5  flex-wrap">
          {products.map((product) => (
            <div key={product._id}>
              <div className="col align-self-stretch d-flex">
                <div
                  className="card align-self-stretch shadow p-3 mb-5 bg-body rounded"
                  style={{ width: "25rem" }}
                >
                  <img
                    src={product.mainImage.secure_url}
                    className="card-img-top shadow p-3 mb-5 bg-body rounded"
                    alt="product-img"
                  />
                  <div className="card-body d-flex flex-column gap-3">
                    <h5
                      className="card-title text-wrap"
                      style={{ width: "19rem" }}
                    >
                      {product.name}
                    </h5>
                    {/* <div
                      className="accordion accordion-flush"
                      id="accordionFlushExample"
                    >
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne"
                            aria-expanded="false"
                            aria-controls="flush-collapseOne"
                          >
                            More Information...
                          </button>
                        </h2>
                        <div
                          id="flush-collapseOne"
                          className="accordion-collapse collapse"
                          aria-labelledby="flush-headingOne"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            {product.description}
                          </div>
                        </div>
                      </div>
                    </div> */}

                    <a
                      className="btn btn-primary"
                      data-bs-toggle="collapse"
                      href="#multiCollapseExample1"
                      role="button"
                      aria-expanded="false"
                      aria-controls="multiCollapseExample1"
                    >
                      show more...
                    </a>
                    <div
                      className="collapse multi-collapse"
                      id="multiCollapseExample1"
                    >
                      <div className="card card-body">
                      {product.description}
                      </div>
                    </div>

                    {/* <a href="#" className="btn btn-primary mt-auto">
                    Go somewhere
                  </a> */}
                    <div className="discount d-flex justify-content-center  align-items-center">
                      {product.discount}%OFF
                    </div>

                    {product.discount == 0 ? (
                      <div className="d-flex justify-content-end align-items-center gap-2 ">
                        <span className="finalPrice">
                          {product.finalPrice}$
                        </span>
                      </div>
                    ) : (
                      <div className="d-flex justify-content-end align-items-center gap-2 ">
                        <span className="price">{product.price}$</span>
                        <span className="finalPrice">
                          {product.finalPrice}$
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductsForCategory;
