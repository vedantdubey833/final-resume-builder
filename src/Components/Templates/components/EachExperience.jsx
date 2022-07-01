
import styles from "./t1styles.module.css";

const EachExperience = ({ title, period, organization }) => {
    return (
        <div className={styles.eachExperience}>
            <div><b> Project title: </b>{title}</div>
            <div><b>Technology: </b>{period}</div>
            <div className={styles.organization}><b>Description: </b> {organization}</div>
        </div>
    )
}

export default EachExperience;