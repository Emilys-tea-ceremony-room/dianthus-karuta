import title, { ITitle } from '@/store/title'
import { testAction } from '@/test/test-action'
import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

const store = new Vuex.Store({ modules: { title } })
describe('siteBase', () => {
  const mockState: ITitle = { isFirstView: true }

  it('初回表示をオフにできること', async () => {
    const wrapper = (m: any) => m.SET_VIEWED(mockState)
    wrapper(title.mutations)
    expect(mockState.isFirstView).toBe(false)
  })
})
