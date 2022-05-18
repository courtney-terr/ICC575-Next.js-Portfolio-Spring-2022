import classNames from 'classnames/bind'
import styles from './button.module.scss'
let cx = classNames.bind(styles);

import Link from 'next/link'

//deconstruct props
export default function Button({ label, variant, path }){
    //type === "primary" then use the .primary class
    //type === "secondary" then use the .secondary class
    //ESSENTIALLY class="btn primary" or "btn secondary"
    let buttonClasses = cx({
        btn : true,
        primary : variant === "primary",
        secondary : variant === "secondary"
    });

    return <button className={buttonClasses}>
        <Link href={path}>
            <a>
                {label}
            </a>
        </Link>
    </button>
}
