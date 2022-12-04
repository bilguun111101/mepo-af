import classes from "../../assets/styles/loading.module.scss";

export const Loading = () => {
  return (
    <div className={classes.loading}>
      <div>
        <img alt="mepoAfLogo" src="https://res.cloudinary.com/mustnest/image/upload/v1669202813/Mepo_Af/main-logo-white_idnwm0.png" />
      </div>
      <h4>Loading...</h4>
    </div>
  );
};
