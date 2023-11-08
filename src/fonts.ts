import localFont from "next/font/local";

const arial = localFont({
    src: [
        {
            path: "../public/fonts/arial.ttf",
            weight: "400",
            style: "normal"
        },
        {
            path: "../public/fonts/ariali.ttf",
            weight: "400",
            style: "italic"
        },
        {
            path: "../public/fonts/arialbd.ttf",
            weight: "700",
            style: "normal"
        },
        {
            path: "../public/fonts/arialbi.ttf",
            weight: "700",
            style: "italic"
        },
    ],
});

const comic = localFont({
    src: [
        {
            path: "../public/fonts/comic.ttf",
            weight: "400",
            style: "normal"
        },
        {
            path: "../public/fonts/comici.ttf",
            weight: "400",
            style: "italic"
        },
        {
            path: "../public/fonts/comicbd.ttf",
            weight: "700",
            style: "normal"
        },
    ],
});

const verdana = localFont({
    src: [
        {
            path: "../public/fonts/verdana.ttf",
            weight: "400",
            style: "normal"
        },
        {
            path: "../public/fonts/verdanai.ttf",
            weight: "400",
            style: "italic"
        },
        {
            path: "../public/fonts/verdanab.ttf",
            weight: "700",
            style: "normal"
        },
    ],
});

const tahoma = localFont({
    src: [
        {
            path: "../public/fonts/tahoma.ttf",
            weight: "400",
            style: "normal"
        },
        {
            path: "../public/fonts/tahomabd.ttf",
            weight: "700",
            style: "normal"
        },
    ],
});

export { arial, comic, verdana, tahoma };
