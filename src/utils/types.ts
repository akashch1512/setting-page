import { MouseEventHandler } from 'react';

export type IconProps = {
    size?: number;
    className?: string;
    onClick?: MouseEventHandler<SVGSVGElement>;
}