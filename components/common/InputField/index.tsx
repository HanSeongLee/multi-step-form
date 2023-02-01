import React, { InputHTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
}

const InputField: React.FC<IProps> = ({
                                          label, error, id, className,
                                          ...props
                                      }) => {
    return (
        <div className={cn(styles.inputField, {
            [styles.error]: error,
        }, className)}>
            <div className={styles.labelContainer}>
                <label className={styles.label}
                       htmlFor={id}
                >
                    {label}
                </label>
                {error && (
                    <div className={styles.errorMessage}>
                        {error}
                    </div>
                )}
            </div>
            <input className={styles.input}
                   id={id}
                   type={'text'}
                   {...props}
            />
        </div>
    );
};

export default InputField;
