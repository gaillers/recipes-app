export interface NavLink {
    id: number;
    title: string;
    url: string;
}

export const navLinks: NavLink[] = [
    {
        id: 1,
        title: "Home",
        url: "/",
    },
    {
        id: 2,
        title: "Favorites",
        url: "/favorites",
    },
];