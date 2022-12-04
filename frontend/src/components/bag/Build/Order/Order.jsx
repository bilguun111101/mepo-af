import React from "react";
import { useState } from "react";
import DropDown from "./DropDown";
import close_btn from "../../../../assets/images/close-black.svg";
import css from "../../../../assets/styles/Bag/OrderStyle.module.scss";
import arrow_down from "../../../../assets/images/arrow-down-black.svg";

const Order = () => {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("XXL");
  const quantityFuction = number => {
    if(number < 0) return;
    setQuantity(number);
  }
  return (
    <div className={css.orderSection}>
      <div className={css.orderSection__container}>
        <div className={css.orderSection__container__imgSection}>
          <img
            src="https://www.instyle.com/thmb/Q5SV4V_sMRyRw8gCbTL1kS7qVik=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/032620-jean-jackets-01-2000-4409e181297044f89514af203f462eb3.jpg"
            alt=""
          />
          <h4>Jeans jacket</h4>
        </div>
        {/* first */}
        <div className={css.orderSection__container__documentsSection}>
          <div className={css.content}>
            <p>Black</p>{" "}
            <div className={css.sizeAndQuantity__dropdown}>
              <button className={css.dropdown_btn}>
                <p>{size}</p>
                <img
                  src={arrow_down}
                  // src="https://raw.githubusercontent.com/AmgalanAmga/mepo-af-project/7856e75e652247221564c6949ec8855012a93113/frontend/src/assets/images/arrow-down-black.svg"
                  alt=""
                />
              </button>
              <DropDown change={setSize} />
            </div>
            <div className={css.sizeAndQuantity__dropdown}>
              <input 
                type="number" 
                className={css.dropdown_btn} 
                value={quantity}
                onChange={e => quantityFuction(e.target.value)}
              />
            </div>
            <p>USD 650.00</p>
            <button>remove</button>
          </div>
        </div>
        {/* second */}
        <div className={css.orderSection__container__phoneDocumentSection}>
          <button className={css.removeBtn}>
            <img
              src={close_btn}
              // src="https://raw.githubusercontent.com/AmgalanAmga/mepo-af-project/7856e75e652247221564c6949ec8855012a93113/frontend/src/assets/images/close-black.svg"
              alt=""
            />
          </button>
          <h3>Wide leg pants</h3>
          <p>USD 650.00 | Black</p>
          <div className={css.sizeAndQuantity}>
            <div className={css.sizeAndQuantity__dropdown}>
              <button className={css.dropdown_btn}>
                <p>{size}</p>
                <img
                  src={arrow_down}
                  // src="https://raw.githubusercontent.com/AmgalanAmga/mepo-af-project/7856e75e652247221564c6949ec8855012a93113/frontend/src/assets/images/arrow-down-black.svg"
                />
              </button>
              <DropDown />
            </div>
            <div className={css.sizeAndQuantity__dropdown}>
              <input 
                type="number" 
                className={css.dropdown_btn} 
                value={quantity}
                onChange={e => quantityFuction(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
