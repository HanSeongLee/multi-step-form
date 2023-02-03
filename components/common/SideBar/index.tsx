import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    sidebarProps: SideBarProps;
}

const SideBar: React.FC<IProps> = ({ sidebarProps: {current, steps}, className, ...props }) => {
    return (
        <div className={cn(styles.sideBar, className)}
             {...props}
        >
            <ul className={styles.stepContainer}>
                {steps.map((name, index) => (
                    <li className={cn(styles.step, {
                        [styles.active]: index === current,
                    })}
                        key={index}
                    >
                        <div className={styles.circle}>
                            {index + 1}
                        </div>
                        <div className={styles.stepDetails}>
                            <div className={styles.stepText}>
                                Step {index + 1}
                            </div>
                            <div className={styles.stepName}>
                                {name}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SideBar;
