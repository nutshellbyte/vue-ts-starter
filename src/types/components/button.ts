export interface ButtonProps {
    type: 'primary' | 'warning' | 'danger';
    size: 'small' | 'medium' | 'large';
    disabled?: boolean;
    loading?: boolean;
    onClick: () => void;
}
