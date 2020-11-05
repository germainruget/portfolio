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

const content = (
    <div>
        <h3>Contribution</h3>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam exercitationem molestias rem ratione id harum dolorum consectetur architecto odit, vitae asperiores aliquam et autem molestiae laboriosam ipsa incidunt deleniti fugiat?</div>
        <ul>
            <li>Lorem ipsum dolor sit amet consectetur</li>
            <li>Ipsam exercitationem molestias rem ratione</li>
            <li>Autem molestiae laboriosam ipsa</li>
            <li>Adipisicing elit. Ipsam exercitationem molestias rem ratione</li>
        </ul>
    </div>
);


export const DATA: { [name: string]: { path: string, title: string, content: JSX.Element, screenshots: Array<string> } } = {
    ancor: { path: '/ancor', title: 'Ancor', content: content, screenshots: [Ancor_2, Ancor_3, Ancor_4, Ancor_5] },
    asterie: { path: '/asterie', title: 'Asterie', content: content, screenshots: [Asterie_1, Asterie_2] },
    bsf: { path: '/bsf', title: 'BSF', content: content, screenshots: [BSF_1, BSF_2, BSF_3] }
}
