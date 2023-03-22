//import './comp1.scss' 全局引入
//局部引入 以.module.scss 结尾
import styles from  './comp1.module.scss'
function Comp(){
    return(
        <div className={styles.box}>
            <p>这是comp1</p>
        </div>
    )
}
export default Comp