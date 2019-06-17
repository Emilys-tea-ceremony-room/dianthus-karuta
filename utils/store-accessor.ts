import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import title from '@/store/title'
import siteMenu from '@/store/siteMenu'

let titleModule: title
let siteMenuModule: siteMenu

function initialiseStores(store: Store<any>): void {
  titleModule = getModule(title, store)
  siteMenuModule = getModule(siteMenu, store)
}

export { initialiseStores, titleModule, siteMenuModule }
