export interface Achievement {
    id: string;
    name: string;
    image: string;
    organization: string;
    organizationImage: string;
    organizationStyle: Record<"color" | "backgroundColor", string>;
    date: string;
    descriptions: string[];
}
