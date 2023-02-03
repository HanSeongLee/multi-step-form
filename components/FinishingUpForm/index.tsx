import React, { FormHTMLAttributes, useMemo } from 'react';
import styles from './style.module.scss';
import Form from 'components/common/Form';
import { Steps } from 'types/step';

interface IProps extends FormHTMLAttributes<HTMLFormElement> {
    onGoBack?: () => void;
    subscription: Subscription;
}

const FinishingUpForm: React.FC<IProps> = ({
                                               subscription, ...props
                                           }) => {
    const {
        yearly, plan, addons,
    } = subscription;

    const unit = yearly ? 'yr' : 'mo';

    const total = useMemo(() => {
        const planPrice = yearly ? plan.prices.yearly : plan.prices.monthly;
        const addonPrices = addons.reduce((pre, current) => {
            const price = yearly ? current.prices.yearly : current.prices.monthly;
            return pre + price;
        }, 0);

        return planPrice + addonPrices;
    }, [subscription]);

    return (
        <Form className={styles.form}
              title={'Finishing up'}
              description={'Double-check everything looks OK before confirming.'}
              sidebarProps={{
                  current: 3,
                  steps: Steps,
              }}
              confirmButtonText={'Confirm'}
              confirmButtonVariant={'primary'}
              {...props}
        >
            <div className={styles.detailContainer}>
                <div className={styles.planContainer}>
                    <div>
                        <div className={styles.planName}>
                            {plan.name} ({yearly ? 'Yearly' : 'Monthly'})
                        </div>
                        <button className={styles.changeButton}
                                type={'button'}
                        >
                            Change
                        </button>
                    </div>

                    <div className={styles.price}>
                        ${yearly ? plan.prices.yearly : plan.prices.monthly}/{unit}
                    </div>
                </div>
                {addons.length > 0 && (<hr />)}
                {addons.map(({id, name, prices}) => (
                    <div className={styles.row}
                         key={id}
                    >
                        <div>
                            {name}
                        </div>
                        <div>
                            +${yearly ? prices.yearly : prices.monthly}/{unit}
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.totalContainer}>
                <div className={styles.row}>
                    <div>
                        Total (per {yearly ? 'year' : 'month'})
                    </div>
                    <div className={styles.total}>
                        +${total}/{unit}
                    </div>
                </div>
            </div>
        </Form>
    );
};

export default FinishingUpForm;
