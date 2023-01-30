import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

interface IProps extends HTMLAttributes<HTMLDivElement> {

}

const Box: React.FC<IProps> = ({ children, className, ...props }) => {
    return (
        <div className={cn(styles.box, className)}
             {...props}
        >
            {children}
        </div>
    );
};

export default Box;
