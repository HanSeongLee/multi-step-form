import React, { ButtonHTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    labels: {
        on: string;
        off: string;
    };
    on: boolean;
    onChangeValue: (value: boolean) => void;
}

const ToggleButton: React.FC<IProps> = ({
                                            id, name, labels, on, onChangeValue,
                                            className, ...props
                                        }) => {
    return (
        <div className={cn(styles.toggleButtonWrapper, {
            [styles.on]: on,
        }, className)}
        >
            <span className={styles.label}
                  onClick={_ => onChangeValue(false)}
            >
                {labels.off}
            </span>
            <button className={cn(styles.toggleButton)}
                    type={'button'}
                    onClick={_ => onChangeValue(!on)}
                    {...props}
            />
            <span className={styles.label}
                  onClick={_ => onChangeValue(true)}
            >
                {labels.on}
            </span>
            <input id={id}
                   name={name}
                   value={on ? 1 : 0}
                   type={'text'}
                   hidden
            />
        </div>
    );
};

export default ToggleButton;
