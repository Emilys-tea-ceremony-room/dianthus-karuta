import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

@Module({ namespaced: true, name: 'title', stateFactory: true })
export default class Title extends VuexModule {
  isFirstView = true

  @Mutation
  SET_VIEWED() {
    this.isFirstView = false
  }

  @Action({})
  SetViewed() {
    this.SET_VIEWED()
  }
}
