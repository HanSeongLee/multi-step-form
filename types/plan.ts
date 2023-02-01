type Plan = {
    id: number;
    icon: Icon;
    name: string;
    prices: {
        monthly: number;
        yearly: number;
    };
};

type Addon = {
    id: number;
    name: string;
    description: string;
    prices: {
        monthly: number;
        yearly: number;
    };
};

export const Plans: Plan[] = [
    {
        id: 1,
        icon: {
            url: '/icons/icon-arcade.svg',
            backgroundColor: '#FFAF7E',
        },
        name: 'Arcade',
        prices: {
            monthly: 9,
            yearly: 90,
        },
    },
    {
        id: 2,
        icon: {
            url: '/icons/icon-advanced.svg',
            backgroundColor: '#F9818E',
        },
        name: 'Advanced',
        prices: {
            monthly: 12,
            yearly: 120,
        },
    },
    {
        id: 3,
        icon: {
            url: '/icons/icon-pro.svg',
            backgroundColor: '#483EFF',
        },
        name: 'Pro',
        prices: {
            monthly: 15,
            yearly: 150,
        },
    },
];

export const PlanOptions: {
    monthly: Option[],
    yearly: Option[],
} = {
    monthly: Plans
        .map(({ id, icon, name, prices: { monthly: price} }) => {
            return {
                icon,
                value: id,
                label: name,
                description: `$${price}/mo`,
            };
        }),
    yearly: Plans
        .map(({ id, icon, name, prices: { yearly: price} }, index) => {
            return {
                icon,
                value: id,
                label: name,
                description: `$${price}/yr`,
                subLabel: '2 months free',
            };
        }),
};

export const Addons: Addon[] = [
    {
        id: 1,
        name: 'Online service',
        description: 'Access to multiplayer games',
        prices: {
            monthly: 1,
            yearly: 10,
        },
    },
    {
        id: 2,
        name: 'Larger storage',
        description: 'Extra 1TB of cloud save',
        prices: {
            monthly: 2,
            yearly: 20,
        }
    },
    {
        id: 3,
        name: 'Customizable profile',
        description: 'Custom theme on your profile',
        prices: {
            monthly: 2,
            yearly: 20,
        }
    },
];


export const AddonsOptions: {
    monthly: CheckBoxProps[],
    yearly: CheckBoxProps[],
} = {
    monthly: Addons
        .map(({ id, name: label, description, prices: { monthly: price } }) => {
            return {
                label,
                description,
                subLabel: `+${price}/mo`,
                value: id,
            }
        }),
    yearly: Addons
        .map(({ id, name: label, description, prices: { yearly: price } }) => {
            return {
                label,
                description,
                subLabel: `+${price}/yr`,
                value: id,
            }
        }),
};
