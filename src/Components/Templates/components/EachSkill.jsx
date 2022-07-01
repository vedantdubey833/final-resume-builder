import styles from "./t1styles.module.css";

const EachSkill = ({ skillName,proficiency }) => {
    return (
        <div className={styles.eachSkills}>
            <div><b>skillName: </b>{skillName}</div>
           
        </div>
    )
}

export default EachSkill;