import { Inter } from 'next/font/google';
import localFont from "next/font/local";

export const inter = Inter({ subsets: ['latin'] });

export const sfPro = localFont({
    src: [
        {
            path: "../../fonts/SFProText/SFProText-Regular.ttf",
            weight: "400",
            style: "normal"
        },
        {
            path: "../../fonts/SFProText/SFProText-Medium.ttf",
            weight: "500",
            style: "normal"
        }
    ]
});