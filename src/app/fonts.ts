import localFont from "next/font/local";

export const MarkRegular = localFont({
    src: [
        {
            path: "../../public/fonts/Mark/Mark-Regular.woff2",
            weight: "400",
            style: "normal",
        },
    ],
    variable: "--mark-regular",
    display: "swap",
});

export const MarkMedium = localFont({
    src: [
        {
            path: "../../public/fonts/Mark/Mark-Medium.woff2",
            weight: "500",
            style: "normal",
        },
    ],
    variable: "--mark-medium",
    display: "swap",
});

export const MarkBold = localFont({
    src: [
        {
            path: "../../public/fonts/Mark/Mark-Bold.woff2",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--mark-bold",
    display: "swap",
});
