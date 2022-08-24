import type { DynamicObject, IconProps } from '@/interfaces';

export interface ButtonBackProps {
  to?: number | DynamicObject;
  makeCount?: boolean;
  iconProps?: IconProps;
}
