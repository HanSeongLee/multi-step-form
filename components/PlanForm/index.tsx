import React, { FormHTMLAttributes } from 'react';
import styles from './style.module.scss';
import Form from 'components/Form';
import Select from 'components/Select';
import ToggleButton from 'components/ToggleButton';
import { PlanOptions } from 'types/plan';
import { Control } from 'react-hook-form/dist/types/form';
import { Controller, useWatch } from 'react-hook-form';

interface IProps extends FormHTMLAttributes<HTMLFormElement> {
    control: Control<any>;
    onGoBack?: () => void;
}

const PlanForm: React.FC<IProps> = ({ control, ...props }) => {
    const yearly = useWatch({
        control,
        name: 'yearly',
    });

    return (
        <Form title={'Select your plan'}
              description={'You have the option of monthly or yearly billing.'}
              sidebarProps={{
                  current: 1,
                  max: 4,
              }}
              {...props}
        >
            <Controller name={'plan'}
                        control={control}
                        defaultValue={1}
                        render={({ field }) => (
                            <Select id={'plan'}
                                    options={yearly ? PlanOptions.yearly : PlanOptions.monthly}
                                    onChangeValue={field.onChange}
                                    {...field}
                            />
                        )}
            />
            <div className={styles.toggleButtonContainer}>
                <Controller name={'yearly'}
                            control={control}
                            render={({ field }) => (
                                <ToggleButton labels={{
                                    off: 'Monthly',
                                    on: 'Yearly',
                                }}
                                              on={field.value}
                                              onChangeValue={field.onChange}
                                              {...field}
                                />
                            )}
                />
            </div>
        </Form>
    );
};

export default PlanForm;
