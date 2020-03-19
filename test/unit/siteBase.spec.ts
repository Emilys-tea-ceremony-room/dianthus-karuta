import Vuex from 'vuex'
import Vue from 'vue'
import title, { ITitle } from '@/store/title'
Vue.use(Vuex)

describe('siteBase', () => {
  const mockState: ITitle = { isFirstView: true }

  it('初回表示をオフにできること', () => {
    const wrapper = (m: any) => m.SET_VIEWED(mockState)
    wrapper(title.mutations)
    expect(mockState.isFirstView).toBe(false)
  })
})
