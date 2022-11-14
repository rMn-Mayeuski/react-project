import { ReactNode } from "react";

export interface IWithChildren {
    children: ReactNode,
}
export interface INavTab {
    id: number;
    title: string;
    icon: any;
}
export interface INavTabProps extends INavTab {
    activeTabItem: number,
    onClick: any,
}
export interface ITabsProps {
    config: INavTab[];
    activeTabItem: number;
    onClick: any;
}