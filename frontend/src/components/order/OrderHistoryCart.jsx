import classes from "../../assets/styles/account.module.scss";

export const OrderHistoryCart = ({ order, address }) => {
  return (
    <tr className={classes.tableBodyRow}>
      <td className={classes.tableRowCo1}>
        <div className={classes.historyImg}>
          <img src={order.orderItem.images[0].url} alt="pro order" />
        </div>
        <div className={classes.historyTitle}>
          <h4>{order.orderItem.title}</h4>
          <span>
            {order.size} | USD {order.orderItem.price}
          </span>
        </div>
      </td>
      <td>{new Date(order.orderItem.createdAt).toDateString().split(" ").join(".")}</td>
      <td>{order._id}</td>
      <td>{order.amount}</td>
      <td>
        {address.apartmentSuite}, {address.stateProvince}, {address.citySoum}, {address.country}
      </td>
      <td>
        <div className={classes.statusBox}>
          <span style={{ backgroundColor: order.orderStatus === "ORDERED" ? "#59D6FE" : order.orderStatus === "DELIVERING" ? "#F6F60C" : "#9EFA55" }} className={classes.statusBox_dot} />
          <span>{order.orderStatus}</span>
        </div>
      </td>
    </tr>
  );
};
