export type ButtonProps = {
  label: string;
  variant: "primary" | "hover" | "secondary";
  icon?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export type CheckboxTextProps = {
  checked: boolean;
  text: string;
};

export type IconTextProps = {
  icon: string;
  title: string;
  active?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export type IconTextButtonProps = {
  icon: string;
  label: string;
  variant: "primary" | "secondary" | "hover";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export type MyCellProps = {
  variant: "text" | "interactivetext" | "date" | "status";
  text: string;
  statustype?: "green" | "yellow" | "green";
  onClick?: () => void;
  itemId?: number;
};

export type MyTableHeaderProps = {
  leftAlign: boolean;
  text: string;
};

export type UserInfoProps = {
  title: string;
  name: string;
  icon: string;
};
