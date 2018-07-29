export const state = () => ({
  isTitle: false
})

export const mutations = {
  set (state) {
    state.isTitle = true
  },
  reset (state) {
    state.isTitle = false
  }
}
