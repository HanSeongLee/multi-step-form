import React, { useCallback, useState } from 'react';
import PersonalInfoForm from 'components/PersonalInfoForm';
import PlanForm from 'components/PlanForm';
import PickAddOnsForm from 'components/PickAddOnsForm';
import FinishingUpForm from 'components/FinishingUpForm';
import { useForm } from 'react-hook-form';
import { Addons, Plans } from 'types/plan';
import SubscriptionCompleteBox from 'components/SubscriptionCompleteBox';
import { Steps } from 'types/step';

const MultiStepFormContainer: React.FC = () => {
    const { control, handleSubmit } = useForm();
    const [step, setStep] = useState(0);
    const [subscription, setSubscription] = useState<Subscription | undefined>();

    const onGoBack = useCallback(() => {
        setStep(step - 1);
    }, [step]);

    const onSubmit = useCallback((data: any) => {
        const nextStep = step + 1;
        if (nextStep === 3) {
            const addonIds = data.addons.filter((id: number) => id);
            const plan = Plans.find(({ id }) => id === data.plan);
            const addons = Addons.filter(({ id }) => addonIds.includes(id));

            setSubscription({
                name: data.name,
                email: data.email,
                phone: data.phone,
                plan,
                addons,
                yearly: data.yearly,
            });
        }
        setStep(nextStep);
    }, [step]);

    const onClickChangeButton = () => {
        setStep(1);
    };

    return (
        <div>
            {step === 0 && (
                <PersonalInfoForm control={control}
                                  onSubmit={handleSubmit(onSubmit)}
                />
            )}
            {step === 1 && (
                <PlanForm control={control}
                          onSubmit={handleSubmit(onSubmit)}
                          onGoBack={onGoBack}
                />
            )}
            {step === 2 && (
                <PickAddOnsForm control={control}
                                onSubmit={handleSubmit(onSubmit)}
                                onGoBack={onGoBack}
                />
            )}
            {(step === 3 && subscription) && (
                <FinishingUpForm onGoBack={onGoBack}
                                 onSubmit={handleSubmit(onSubmit)}
                                 subscription={subscription}
                                 onClickChangeButton={onClickChangeButton}
                />
            )}
            {step === 4 && (
                <SubscriptionCompleteBox sidebarProps={{
                    current: 3,
                    steps: Steps,
                }} />
            )}
        </div>
    );
};

export default MultiStepFormContainer;
