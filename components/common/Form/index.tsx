import React, { FormHTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Button from 'components/common/Button';
import Container from 'components/common/Container';
import SideBar from 'components/common/SideBar';
import Box from 'components/common/Box';

interface IProps extends FormHTMLAttributes<HTMLFormElement> {
    sidebarProps: SideBarProps;
    title?: string;
    description?: string;
    onGoBack?: () => void;
    confirmButtonText?: string;
    confirmButtonVariant?: ButtonVariant;
    footerHidden?: boolean;
}

const Form: React.FC<IProps> = ({
                                    sidebarProps, title, description, onGoBack,
                                    confirmButtonText, confirmButtonVariant, footerHidden,
                                    className, children, ...props
                                }) => {
    return (
        <form className={cn(styles.form, className)}
              {...props}
        >
            <Box className={styles.boxWrapper}>
                <SideBar sidebarProps={sidebarProps} />

                <Box className={styles.box}>
                    {title && (
                        <h2 className={styles.title}>
                            {title}
                        </h2>
                    )}
                    {description && (
                        <p className={styles.description}>
                            {description}
                        </p>
                    )}

                    {children && (
                        <div className={styles.container}>
                            {children}
                        </div>
                    )}

                    {!footerHidden && (
                        <Container className={styles.buttonContainer}>
                            {onGoBack && (
                                <Button type={'button'}
                                        variant={'link'}
                                        onClick={onGoBack}
                                >
                                    Go Back
                                </Button>
                            )}

                            <div className={styles.rightSide}>
                                <Button type={'submit'}
                                        variant={confirmButtonVariant}
                                >
                                    {confirmButtonText}
                                </Button>
                            </div>
                        </Container>
                    )}
                </Box>
            </Box>
        </form>
    );
};

Form.defaultProps = {
    confirmButtonText: 'Next Step',
    confirmButtonVariant: 'secondary',
    footerHidden: false,
};

export default Form;
