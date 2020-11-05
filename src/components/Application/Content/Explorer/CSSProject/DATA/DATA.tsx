import { html as FuturCityHtml, css as FuturCityCSS } from './FutureCity';
import { preview as FuturCiryPreview } from './DisplayFutureCity';
import { html as SpaceShipHtml, css as SpaceShipCSS } from './SpaceShip';
import { preview as SpaceShipPreview } from './DisplaySpaceShip';


export const DATA: { [name: string]: { path: string, title: string, html: string, css: string, preview: string } } = {
    futureCity: { path: '/future-city', title: 'Future City', html: FuturCityHtml, css: FuturCityCSS, preview: FuturCiryPreview },
    spaceShip: { path: '/space-ship', title: 'Space Ship', html: SpaceShipHtml, css: SpaceShipCSS, preview: SpaceShipPreview },
}
