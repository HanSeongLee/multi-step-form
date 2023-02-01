import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    sidebarProps: SideBarProps;
}

const SideBar: React.FC<IProps> = ({ sidebarProps: {current, max}, className, ...props }) => {
    return (
        <div className={cn(styles.sideBar, className)}
             {...props}
        >
            <ul className={styles.stepContainer}>
                {[...new Array(max)].map((_, index) => (
                    <li className={cn(styles.step, {
                        [styles.active]: index === current,
                    })}
                        key={index}
                    >
                        <div className={styles.circle}>
                            {index + 1}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SideBar;
