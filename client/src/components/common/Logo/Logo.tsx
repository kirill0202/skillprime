import React from "react";
import styles from "./Logo.module.scss";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();
  const handleRedirectToMain = () => navigate("/");

  return (
    <div className={styles.logo} onClick={handleRedirectToMain}>
      Skill<span className={styles.prime}>Prime</span>
    </div>
  );
};

export default Logo;
