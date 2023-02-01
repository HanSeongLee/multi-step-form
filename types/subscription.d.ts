type Subscription = {
    name: string;
    email: string;
    phone: string;
    plan: Plan;
    addons: Addon[];
    yearly: boolean;
};
