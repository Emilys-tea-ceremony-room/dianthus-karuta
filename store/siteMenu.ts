import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

@Module({ namespaced: true, name: 'siteMenu', stateFactory: true })
export default class SiteMenu extends VuexModule {
  isMenuActive = false

  @Mutation
  CLOSE_MENU() {
    this.isMenuActive = false
  }
  @Mutation
  OPEN_MENU() {
    this.isMenuActive = true
  }

  @Mutation
  TOGGLE_MENU_ACTIVE() {
    this.isMenuActive = !this.isMenuActive
  }

  @Action({})
  OpenMenu() {
    this.OPEN_MENU()
  }

  @Action({})
  CloseMenu() {
    this.CLOSE_MENU()
  }

  @Action({})
  ToggleMenu() {
    this.TOGGLE_MENU_ACTIVE()
  }
}
