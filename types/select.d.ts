type Icon = {
    url: string;
    backgroundColor: string;
}

type Option = {
    icon: Icon;
    value: string | number;
    label: string;
    description: string;
    subLabel?: string;
}
