import React, { InputHTMLAttributes, useRef } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    checkBoxProps: CheckBoxProps;
}

const CheckBox: React.FC<IProps> = ({
                                        checkBoxProps: { label, description, subLabel }, value, className,
                                        onClick, ...props
                                    }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <div className={cn(styles.checkBoxWrapper, {
            [styles.on]: value === 'on',
        }, className)}
             onClick={_ => inputRef?.current?.click()}
        >
            <input className={styles.checkBox}
                   type={'checkbox'}
                   ref={inputRef}
                   {...props}
            />
            <div>
                <div className={styles.label}>
                    {label}
                </div>
                <div className={styles.description}>
                    {description}
                </div>
            </div>
            <div className={styles.subLabel}>
                {subLabel}
            </div>
        </div>
    );
};

export default CheckBox;
