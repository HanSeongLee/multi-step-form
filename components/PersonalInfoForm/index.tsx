import React, { FormHTMLAttributes } from 'react';
import Form from 'components/common/Form';
import InputField from 'components/common/InputField';
import { Control } from 'react-hook-form/dist/types/form';
import { Controller } from 'react-hook-form';
import { Steps } from 'types/step';

interface IProps extends FormHTMLAttributes<HTMLFormElement> {
    control: Control<any>;
    onGoBack?: () => void;
}

const defaultInputRule = {
    required: 'This field is required',
};

const PersonalInfoForm: React.FC<IProps> = ({ control, ...props }) => {
    return (
        <Form title={'Personal info'}
              description={'Please provide your name, email address, and phone number.'}
              sidebarProps={{
                  current: 0,
                  steps: Steps,
              }}
              {...props}
        >
            <Controller name={'name'}
                        control={control}
                        rules={defaultInputRule}
                        render={({ field, fieldState: { error } }) => (
                            <InputField id={'name'}
                                        label={'Name'}
                                        placeholder={'e.g. Stephen King'}
                                        error={error?.message}
                                        {...field}
                            />
                        )}
            />
            <Controller name={'email'}
                        control={control}
                        rules={defaultInputRule}
                        render={({ field, fieldState: { error } }) => (
                            <InputField id={'email'}
                                        type={'email'}
                                        label={'Email Address'}
                                        placeholder={'e.g. stephenking@lorem.com'}
                                        error={error?.message}
                                        {...field}
                            />
                        )}
            />
            <Controller name={'phone'}
                        control={control}
                        rules={defaultInputRule}
                        render={({ field, fieldState: { error } }) => (
                            <InputField id={'phone'}
                                        type={'tel'}
                                        pattern={'^(\\+\\d{1,2}\\s)?\\(?\\d{2,3}\\)?[\\s]\\d{3,4}[\\s]\\d{3,4}$'}
                                        label={'Phone Number'}
                                        placeholder={'e.g. +1 234 567 890'}
                                        error={error?.message}
                                        {...field}
                            />
                        )}
            />
        </Form>
    );
};

export default PersonalInfoForm;
