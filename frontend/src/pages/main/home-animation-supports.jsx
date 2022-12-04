import classes from "../../assets/styles/home.module.scss";
import { forwardRef, useImperativeHandle, useRef } from "react";
import { specialImges, specialProductDetail } from "../../utils/constants";

export const TargetItems = forwardRef((props, ref) => {
  const img1 = useRef(null);
  const img2 = useRef(null);
  const img3 = useRef(null);
  const img4 = useRef(null);
  const img5 = useRef(null);
  const mainImg = useRef(null);
  const container = useRef(null);
  const shadow = useRef(null);
  const detailText = useRef(null);
  useImperativeHandle(ref, () => ({
    img1,
    img2,
    img3,
    img4,
    img5,
    mainImg,
    container,
    shadow,
    detailText,
  }));
  const div = [img1, img2, img3, img4, img5];
  return (
    <div ref={container} className={classes.home_scroll_animation_container}>
      <div id="fiveImg" className={classes.home_scroll_animation_container_fiveImg}>
        {specialImges.map((el, i) => (
          <div key={el.url}>
            <img id={div[3] === div[i] ? "mainImg" : "img"} ref={div[i]} src={el.url} alt="img" />
            {div[2] === div[i] ? (
              <div
                ref={shadow}
                id="shadow"
                className={classes.home_scroll_animation_container_fiveImg_shadow}
              >
                {specialProductDetail.map((el, i) => (
                  <span
                    key={i}
                    ref={detailText}
                    id="detailText"
                    className={classes.home_scroll_animation_container_fiveImg_shadow_detail}
                  >
                    <h2>{el.descriptionName}</h2>
                    <span>
                      <p>{el.detail[0]}</p>
                      <p>{el.detail[1]}</p>
                      <p>{el.detail[2]}</p>
                    </span>
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
});
