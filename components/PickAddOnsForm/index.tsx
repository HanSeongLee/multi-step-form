import React, { FormHTMLAttributes } from 'react';
import styles from './style.module.scss';
import Form from 'components/common/Form';
import CheckBox from 'components/common/CheckBox';
import { AddonsOptions } from 'types/plan';
import { Control } from 'react-hook-form/dist/types/form';
import { Controller, useWatch } from 'react-hook-form';
import { Steps } from 'types/step';

interface IProps extends FormHTMLAttributes<HTMLFormElement> {
    control: Control<any>;
    onGoBack?: () => void;
}

const PickAddOnsForm: React.FC<IProps> = ({ control, ...props }) => {
    const yearly = useWatch({
        control,
        name: 'yearly',
    });

    return (
        <Form title={'Pick add-ons'}
              description={'Add-ons help enhance your gaming experience.'}
              sidebarProps={{
                  current: 2,
                  steps: Steps,
              }}
              {...props}
        >
            <div className={styles.checkBoxContainer}>
                {(yearly ? AddonsOptions.yearly : AddonsOptions.monthly)
                    .map((addon, index) => (
                        <Controller name={`addons[${index}]`}
                                    control={control}
                                    key={index}
                                    render={({ field }) => (
                                        <CheckBox id={`addons[${index}]`}
                                                  checkBoxProps={addon}
                                                  {...field}
                                                  onChange={_ => field.onChange(addon.value === field.value ? null : addon.value)}
                                                  value={addon.value === field.value ? 'on' : 'off'}
                                        />
                                    )}
                        />
                    ))}
            </div>
        </Form>
    );
};

export default PickAddOnsForm;
