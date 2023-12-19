import React, { useEffect } from "react";
import Popup from "reactjs-popup";

import ItemStyled, { StyledPopup } from "./Item.styled";

import like from "../../assets/img/heart.svg";
import login from "../../assets/img/loginPopup.svg";

import pic from "assets/img/pic.png";
import smallPic from "assets/img/picSmall.png";
import apiClient from "api/apiClient";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Item({ product }) {
  const [offers, setOffers] = useState([]);
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [giver_id, setGiver_Id] = useState(-5);
  const days = 0;

  const receiver_id = product.id;

  return (
    !isLoading && (
      <ItemStyled>
        <div className="item">
          <div className="item__cont">
            <div className="item__cont-pics">
              <div className="item__pic">
                <img alt="" src={product.image} />
              </div>
              <div className="item__right">
                <div className="item__cont-main">
                  <div className="item__info">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <h1>{product.name}</h1>
                    </div>
                  </div>
                  {/* <div className="item__barter">
                    <p style={{ fontWeight: "700" }}>Trade:</p>
                    <p>{product.products}</p>
                  </div> */}
                  <div className="item__barter-btn">
                    <a
                      href={`mailto:${product.user_email}`}
                      style={{ fontWeight: "700" }}
                    >
                      Mail to owner:{" "}
                      <span style={{ fontWeight: "500" }}>
                        {product.user_email}
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-description">
              <h3>Description</h3>
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      </ItemStyled>
    )
  );
}

export default Item;
