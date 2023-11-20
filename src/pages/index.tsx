import Head from "next/head";

import styles from "@/styles/index.module.css"

import CustomLink from "@/components/CustomLink";
import FunnyImage from "@/components/FunnyImage";
import firstImage from "@/images/first.jpg";
import secondImage from "@/images/second.jpg";
import { comic, verdana, tahoma } from "@/fonts";

function AquagymApp() {
    return (
        <>
            <Head>
                <title>Ma première page web</title>
            </Head>
            <main className={styles.main}>
                <div className={styles.header}>SNT</div>
                <h1 className={comic.className}>L'aquagym</h1>
                <CustomLink
                    path="https://conseilsport.decathlon.fr/aquagym-5-bonnes-raisons-de-sinscrire-a-des-seances"
                >
                    Qu'est ce que l'aquagym ?
                </CustomLink>
                <p className={tahoma.className}>
                    L'aquagym est un sport aquatique très répandu qui consiste à exercer des mouvements de gym dans l'eau.{'\n'}
                    Il aide notamment les personnes âgées atteintes d'arthrose.{'\n'}
                    Les séances d'aquagym permettent de renforcer le système musculaire, de stimuler le rythme cardiovasculaire, d'améliorer le tonus respiratoire et la circulation sanguine.{'\n'}
                    Mais au-delà de ces bénéfices liés à la pratique de toute activité physique, l'aquagym présente l'avantage d'être une activité « non traumatisante ».{'\n'}
                    L'aquagym est souvent accompagné de musique pour motiver les troupes.{'\n'}
                    Bien que cela parraisse facile, il s'agit d'un véritable sport à part entière.{'\n'}
                </p>
                <FunnyImage src={firstImage} alt="des gens appréciant l'aquagym" height={300}/>
                <CustomLink
                    path="https://sante.journaldesfemmes.fr/fiches-sante-du-quotidien/2703409-bienfaits-de-l-aquagym-pour-la-sante-contre-indication-frequence/"
                >
                    Les bienfaits de l'aquagym :
                </CustomLink>
                <ul className={verdana.className}>
                    <li>Renforce le système musculaire</li>
                    <li>Stimule le rythme cardiovasculaire</li>
                    <li>Améliore le tonus respiratoire et la circulation sanguine</li>
                    <li>Permet de garder la ligne</li>
                    <li>Aide les personnes qui souffrent d'arthrose, d'arthrite ou de rhumatismes</li>
                    <li>Apporte de la bonne humeur grâce à la convivialité de ce sport</li>
                </ul>
                <FunnyImage src={secondImage} alt="d'autres gens appréciant l'aquagym" height={300}/>
            </main>
        </>
    );
}

export default AquagymApp;
