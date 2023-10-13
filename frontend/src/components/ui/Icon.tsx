import { MouseEventHandler, ReactNode } from "react";
import Image from "next/image";

interface IconProps {
    width?: number,
    height?: number,
    className?: string,
    onClick?: MouseEventHandler<HTMLImageElement>
}

const IconComponentBuilder = (src: string, alt: string): ((props: IconProps) => ReactNode) => {
    return function IconComponent({ width = 9, height = 9, ...props }: IconProps): ReactNode {
        return <Image src={src} alt={alt} width={width} height={height} {...props} />
    };
};

export const Icon = {
    Plus: IconComponentBuilder("/icons/plus.svg", "plus"),
    Minus: IconComponentBuilder("/icons/minus.svg", "minus"),
    Basket: IconComponentBuilder("/icons/basket.svg", "basket"),
    Arrow: IconComponentBuilder("/icons/arrow.svg", "arrow"),
    ArrowPrimary: IconComponentBuilder("/icons/arrowPrimary.svg", "arrow"),
    Photo: IconComponentBuilder("/icons/photo.svg", "photo"),
    Close: IconComponentBuilder("/icons/close.svg", "close")
};
