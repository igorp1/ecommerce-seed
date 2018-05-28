export interface MenuItemConfig{
    label : string;
    icon? : string;
    action? : Function;
    subMenuExpanded? : boolean;
    subMenu? : MenuItemConfig[];
    shouldShow? : () => boolean;
}