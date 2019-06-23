import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import title from '@/store/title'
import siteMenu from '@/store/siteMenu'
import discography from '@/store/discography'

/* eslint-disable import/no-mutable-exports */
let titleModule: title
let siteMenuModule: siteMenu
let discographyModule: discography
/* eslint-enable */

function initialiseStores(store: Store<any>): void {
  titleModule = getModule(title, store)
  siteMenuModule = getModule(siteMenu, store)
  discographyModule = getModule(discography, store)
}

export { initialiseStores, titleModule, siteMenuModule, discographyModule }
