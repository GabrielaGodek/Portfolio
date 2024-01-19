interface ProjectData {
    id: number,
    title: string;
    image: string;
    links: string;
    tech: string;
    description: string;
}
interface TimeLineItem {
    date: string;
    header: string;
    company: string;
    subHeader: string;
    isSubHeader: boolean;
}
export type {
    ProjectData, TimeLineItem
}