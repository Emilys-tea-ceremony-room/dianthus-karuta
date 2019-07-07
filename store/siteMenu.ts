import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

@Module({ namespaced: true, name: 'siteMenu', stateFactory: true })
export default class SiteMenu extends VuexModule {
  isMenuActive = false
  menuItems = [
    // {
    //   link: '/',
    //   name: '新着情報',
    //   nameEn: 'News',
    // },
    {
      link: '/profile',
      name: '人物紹介',
      nameEn: 'Profile',
    },
    // {
    //   link: '/',
    //   name: '活動記録',
    //   nameEn: 'History',
    // },
    {
      link: '/discography',
      name: '作品目録',
      nameEn: 'Discography',
    },
    // {
    //   link: '/',
    //   name: '撫子歌留多',
    //   nameEn: 'Nadeshiko Karuta',
    // },
    {
      link: '/teaceremonyroom',
      name: '茶室',
      nameEn: 'Tea ceremony room',
    },
    // {
    //   link: '/',
    //   name: '電子案内',
    //   nameEn: 'Links',
    // },
  ]

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

  @Action
  ToggleMenu() {
    if (this.isMenuActive) {
      this.CLOSE_MENU()
    } else {
      this.OPEN_MENU()
    }
  }
}
