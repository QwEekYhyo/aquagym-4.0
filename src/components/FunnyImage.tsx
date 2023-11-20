import Image, { ImageProps } from "next/image";
import { useEffect, useState } from "react";

import styles from "@/styles/funnyimage.module.css";

function FunnyImage(props: ImageProps) {
    const [isIdle, setIdle] = useState(true);
    const [isLeft, setLeft] = useState(false);
    const [timer, setTimer] = useState<NodeJS.Timeout>();

    const onHover = () => {
        if (!isIdle) setLeft(current => !current);
        else {
            setIdle(false);
            setLeft(Boolean(Math.round(Math.random())));
        }
    };

    const getClassNames = (): string => {
        let result : string = "";
        if (isIdle) {
            result += styles.idle;
        } else {
            const side : string = isLeft ? styles["move-left"] : styles["move-right"];
            result += side;
        }
        return result;
    };

    useEffect(() => {
        clearTimeout(timer);
        let newTimer = setTimeout(() => setIdle(true), 2000);
        setTimer(newTimer);
    }, [isLeft, isIdle]);

    return (
        <Image {...props} onMouseOver={onHover} className={getClassNames()}/>
    );
}

export default FunnyImage;
