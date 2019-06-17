import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import title from '@/store/title'
import siteMenu from '@/store/siteMenu'

let titleStore: title
let siteMenuStore: siteMenu

function initialiseStores(store: Store<any>): void {
  titleStore = getModule(title, store)
  siteMenuStore = getModule(siteMenu, store)
}

export { initialiseStores, titleStore, siteMenuStore }
