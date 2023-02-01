import React, { FormHTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Form from 'components/common/Form';

interface IProps extends FormHTMLAttributes<HTMLFormElement> {
    sidebarProps: SideBarProps;
}

const SubscriptionCompleteBox: React.FC<IProps> = ({ className, ...props }) => {
    return (
        <Form className={cn(styles.subscriptionCompletion, className)}
              footerHidden
              {...props}
        >
            <div className={styles.container}>
                <img className={styles.icon}
                     src={'/icons/icon-thank-you.svg'}
                     alt={''}
                />
                <h2 className={styles.title}>
                    Thank you!
                </h2>
                <p className={styles.description}>
                    Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need
                    support, please feel free to email us at support@loremgaming.com.
                </p>
            </div>
        </Form>
    );
};

export default SubscriptionCompleteBox;
