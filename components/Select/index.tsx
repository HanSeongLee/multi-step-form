import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

interface IProps extends HTMLAttributes<HTMLUListElement> {
    name: string;
    value: string | number;
    options: Option[];
    onChangeValue: (value: string | number) => void;
}

const Select: React.FC<IProps> = ({
                                      id, name, value, options,
                                      onChangeValue, className, ...props
                                  }) => {
    return (
        <ul className={cn(styles.select, className)}
            {...props}
        >
            {options.map(({
                              icon: { url, backgroundColor }, label, subLabel, description,
                              value: _value
                          }, index) => (
                <li className={cn(styles.option, {
                    [styles.active]: value === _value,
                })}
                    key={index}
                    onClick={_ => onChangeValue(_value)}
                >
                    <div className={styles.icon}
                         style={{
                             backgroundColor,
                         }}
                    >
                        <img src={url}
                             alt={label}
                        />
                    </div>
                    <div className={styles.labelContainer}>
                        <div className={styles.label}>
                            {label}
                        </div>
                        <div className={styles.description}>
                            {description}
                        </div>
                        {subLabel && (
                            <div className={styles.subLabel}>
                                {subLabel}
                            </div>
                        )}
                    </div>
                </li>
            ))}
            <input id={id}
                   name={name}
                   type={'text'}
                   value={value}
                   hidden
            />
        </ul>
    );
};

export default Select;
