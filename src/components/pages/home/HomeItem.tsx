import * as React from "react";
import {
  Item,
  ItemMedia,
  ItemContent,
  ItemTitle,
  ItemDescription,
} from "../../common/Item";
import { cn } from "@/utils/utils";

export type HomeItemVariant = "default" | "outline" | "muted";
export type HomeItemMediaVariant = "default" | "icon" | "image";

export interface HomeItemProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ReactNode;
  actions?: React.ReactNode;
  variant?: HomeItemVariant;
  mediaVariant?: HomeItemMediaVariant;
  className?: string;
}

/**
 * HomeItem is a small wrapper around the generic Item primitives to reduce
 * repetition on the Home page. It renders an optional left media (icon/image),
 * a title, an optional description, and an optional actions area.
 */
const HomeItem: React.FC<HomeItemProps> = ({
  title,
  description,
  icon,
  actions,
  variant = "default",
  mediaVariant = "icon",
  className,
}) => {
  return (
    <Item
      variant={variant}
      className={cn(
        "w-full min-h-16 sm:min-h-20 md:min-h-24 overflow-visible bg-amber-200",
        className
      )}
    >
      {icon ? (
        <ItemMedia variant={mediaVariant}>{icon}</ItemMedia>
      ) : null}
      <ItemContent>
        <ItemTitle className="truncate">{title}</ItemTitle>
        {description ? (
          <ItemDescription>{description}</ItemDescription>
        ) : null}
      </ItemContent>
      {actions}
    </Item>
  );
};

export default HomeItem;
