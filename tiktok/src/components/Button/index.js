import clsx from 'clsx'
import styles from './Button.module.css'

function Button ({ primary }) {

    const clacsses = clsx(styles.btn,{
        [styles.primary] : primary
    })

    return (
        <button className = {clacsses}>
            Click me!
        </button>
    )
}

export default Button