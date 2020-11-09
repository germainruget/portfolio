import * as React from 'react';

import Ancor_2 from '../../../../../assets/images/projects/ancor/2.jpg';
import Ancor_3 from '../../../../../assets/images/projects/ancor/3.jpg';
import Ancor_4 from '../../../../../assets/images/projects/ancor/4.jpg';
import Ancor_5 from '../../../../../assets/images/projects/ancor/5.gif';

import Asterie_1 from '../../../../../assets/images/projects/asterie/1.gif';
import Asterie_2 from '../../../../../assets/images/projects/asterie/2.png';

import BSF_1 from '../../../../../assets/images/projects/bsf/1.jpg';
import BSF_2 from '../../../../../assets/images/projects/bsf/2.jpg';
import BSF_3 from '../../../../../assets/images/projects/bsf/3.jpg';

const contentBSF = (
    <div>
        <h3>Le projet</h3>
        <p>Création du nouveau site de l'association Biologie Sans Frontière.</p>
        <ul>
            <li>Création d'un template</li>
            <li>Découpe du template : HTML / SCSS / JS</li>
            <li>Intégration sur Wordpress : PHP / JS</li>
            <li>Mise en place d'outils d'administration personalisés afin de donner un complète autonomie au client</li>
            <li>Intégration d'un système de dons</li>
        </ul>
    </div>
);

const contentAncor = (
    <div>
        <h3>Le projet</h3>
        <div>Intégration du site de la marque Ancor-Paris</div>
        <ul>
            <li>Découpe de la maquette: HTML / SCSS / JS</li>
            <li>Intégration du thème sur Wordpress : PHP / JS</li>
            <li>Créationd d'un moodboard avec outil de gestion depuis l'administration pour complète autonomie</li>
            <li>Mise en place de la boutique avec système d'achat en ligne</li>
        </ul>
    </div>
);

const contentAsterie = (
    <div>
        <h3>Le projet</h3>
        <div>Refonte / création du nouveau site de l'entreprise</div>
        <ul>
            <li>Création de la maquette en collaboration avec le prestataire</li>
            <li>Découpe de la maquette: HTML / SCSS / JS</li>
            <li>Intégration du thème sur Wordpress : PHP / JS</li>
        </ul>
    </div>
);


export const DATA: { [name: string]: { path: string, title: string, content: JSX.Element, screenshots: Array<string> } } = {
    ancor: { path: '/ancor', title: 'Ancor', content: contentAncor, screenshots: [Ancor_2, Ancor_3, Ancor_4, Ancor_5] },
    asterie: { path: '/asterie', title: 'Asterie', content: contentAsterie, screenshots: [Asterie_1, Asterie_2] },
    bsf: { path: '/bsf', title: 'BSF', content: contentBSF, screenshots: [BSF_1, BSF_2, BSF_3] }
}
