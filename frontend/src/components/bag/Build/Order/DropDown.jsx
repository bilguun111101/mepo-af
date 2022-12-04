import React from 'react';
// import css from "../Bag/drop-down.module.scss";
import css from "../../../../assets/styles/Bag/drop-down.module.scss";

const data = ["XXL", "XL", "XXX"];

const DropDown = props => {
    const { change } = props;
  return (
    <div className={css.drop_down}>
        { data?.map((el, idx) => <button key={idx} className={css.text}>{el}</button>) }
    </div>
  )
}

export default DropDown;