export const state = () => ({
  isMenuActive: false
})

export const mutations = {
  toggle (state) {
    state.isMenuActive = !state.isMenuActive
  },
  reset (state) {
    state.isMenuActive = false
  }
}
