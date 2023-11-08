import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import firstImage from "@/images/first.jpg";
import secondImage from "@/images/second.jpg";
import { arial, comic, verdana, tahoma } from "@/fonts";

function AquagymApp() {
    return (
        <>
            <Head>
                <title>Ma première page web</title>
            </Head>
            <div>SNT</div>
            <h1 className={comic.className}>L'aquagym</h1>
            <Link
                href="https://conseilsport.decathlon.fr/aquagym-5-bonnes-raisons-de-sinscrire-a-des-seances"
                className={arial.className}
            >
                Qu'est ce que l'aquagym ?
            </Link>
            <p className={tahoma.className}>
                L'aquagym est un sport aquatique très répandu qui consiste à exercer des mouvements de gym dans l'eau.
                Il aide notamment les personnes âgées atteintes d'arthrose.
                Les séances d'aquagym permet de renforcer le système musculaire, de stimuler le rythme cardiovasculaire, d'améliorer le tonus respiratoire et la circulation sanguine.
                Mais au-delà de ces bénéfices liés à la pratique de toute activité physique, l'aquagym présente l'avantage d'être une activité « non traumatisante ».
                L'aquagym est souvent accompagné de musique pour motiver les troupes.
                Bien que cela parraisse facile, il s'agit d'un véritable sport à part entière.
            </p>
            <Image src={firstImage} alt="des gens appréciant l'aquagym" height={300}/>
            <Link
                href="https://sante.journaldesfemmes.fr/fiches-sante-du-quotidien/2703409-bienfaits-de-l-aquagym-pour-la-sante-contre-indication-frequence/"
                className={arial.className}
            >
                Les bienfaits de l'aquagym :
            </Link>
            <ul className={verdana.className}>
                <li>Renforce le système musculaire</li>
                <li>Stimule le rythme cardiovasculaire</li>
                <li>Améliore le tonus respiratoire et la circulation sanguine</li>
                <li>Permet de garder la ligne</li>
                <li>Aide les personnes qui souffrent d'arthrose, d'arthrite ou de rhumatismes</li>
                <li>Apporte de la bonne humeur grâce à la convivialité dece sport</li>
            </ul>
            <Image src={secondImage} alt="d'autres gens appréciant l'aquagym" height={300}/>
        </>
    );
}

export default AquagymApp;
