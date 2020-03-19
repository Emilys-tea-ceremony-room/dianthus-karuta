import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

export interface ITitle {
  isFirstView: boolean
}

@Module({ namespaced: true, name: 'title', stateFactory: true })
export default class Title extends VuexModule implements ITitle {
  isFirstView = true

  @Mutation
  SET_VIEWED() {
    this.isFirstView = false
  }
}
