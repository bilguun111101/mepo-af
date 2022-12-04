
import { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import bag from "../../assets/images/accBag.svg";
import { useInView } from "react-intersection-observer";
import { GlobalContext } from "../../context/GlobalContext";
import classes from "../../assets/styles/account.module.scss";
import { RouterAnimation } from "../../utils/animationVariants";
import { OrderHistoryCart } from "../../components/order/OrderHistoryCart";

const Account = () => {
  const tableHead = [
    { en: "Date", mn: "Он сар өдөр" },
    { en: "Order number", mn: "Захиалгын дугаар" },
    { en: "QTY", mn: "Ширхэг" },
    { en: "Address", mn: "Хаяг" },
  ];
  const { ref, inView } = useInView({ threshold: 0.4 });
  const {
    language: { lang },
    user: {
      userDetail: { user },
    },
  } = useContext(GlobalContext);
  return (
    <motion.div variants={RouterAnimation} initial="initial" animate="animate" exit="exit" transition="transition" className={classes.container}>
      <div className={classes.account_header}>
        <div ref={ref} className={classes.account_header_backImg}>
          <img src="https://res.cloudinary.com/mustnest/image/upload/v1669799180/Mepo_Af/men_s.headline.background.img.responsive_hloavd.png" alt="proHeader" />
        </div>
        {inView && (
          <motion.div initial={{ x: "-100%", opacity: 0 }} className={classes.account_header_text} animate={{ x: 0, opacity: 1 }}>
            <p>{lang === "en" ? "MY ORDERED CLOTHES" : "Миний захиалгууд"}</p>
          </motion.div>
        )}
      </div>
      {user?.orders.length > 0 ? (
        <div className={classes.account_body_orders}>
          <table>
            <tbody>
              <tr>
                <th className={classes.tableHead} style={{ textAlign: "left" }}>
                  {lang === "en" ? "Products" : "Бараа"}
                </th>
                {tableHead.map((item, id) => (
                  <th className={classes.tableHead} style={{ paddingLeft: "25px", paddingRight: "25px" }} key={id}>
                    {item[lang]}
                  </th>
                ))}
                <th className={classes.tableHead} style={{ textAlign: "right" }}>
                  {lang === "en" ? "Status" : "Төлөв"}
                </th>
              </tr>
            </tbody>
            <tbody>
              {user?.orders.map((order) => (
                <OrderHistoryCart order={order} address={user?.address} key={order._id} />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className={classes.account_body}>
          <div className={classes.account_body_empty}>
            <div className={classes.account_body_empty_bag}>
              <img src={bag} alt="bag logo" />
            </div>
            <h3>You haven’t shopped with us yet. Is today the day?</h3>
            <Link to={"/all"}>Continue shopping</Link>
          </div>
        </div>
      )}
    </motion.div>
  );
};
export default Account;