import React from 'react';
import classnames from 'classnames';
import './example.scss';

export interface ExampleProps {
  active?: boolean | undefined;
  disabled?: boolean | undefined;
  onClick: () => void
  children?: any;
  className?: string;
}

export const Example: React.FC<ExampleProps> = ({
  active,
  disabled,
  className,
  children,
  onClick,
  ...rest
}) => {
  const classes = classnames(
    'Example',
    active && `Example--active`,
    disabled && `Example--disabled`,
    className
  );

  return (
    <button {...rest} onClick={onClick} className={classes}>
      {children}
    </button>
  );
};
