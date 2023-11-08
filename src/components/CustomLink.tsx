import Link from "next/link";

import styles from "@/styles/customlink.module.css";

import { arial } from "@/fonts";

interface LinkProps {
    path: string;
    children: string;
}

function CustomLink(props : LinkProps) {
    return <Link
        href={props.path}
        className={arial.className + " " + styles.link}
        target="_blank"
    >
        {props.children}
    </Link>;
}

export default CustomLink;
