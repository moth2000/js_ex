import styles from "./index.module.css";

const Car = ({ color = "bule" }) => (
    <span className={styles.app_test} style={{color}}>
        Car {color}
    </span>
);

export default Car;
