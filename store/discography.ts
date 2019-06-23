import { Module, VuexModule } from 'vuex-module-decorators'

export interface ISong {
  title: string
  artist: string[]
  words: string[]
  music: string[]
  arrangement: string[]
}
export interface IWork {
  title: string
  productNumber: string
  releaseDate: Date
  price: number
  distributor: string
  index: ISong[]
  comment?: string
  info?: string
}
export interface IDiscography {
  data: IWork[]
}

@Module({ namespaced: true, name: 'discography', stateFactory: true })
export default class Discography extends VuexModule implements IDiscography {
  data = [
    {
      title:
        'THE IDOLM@STER MILLION THE@TER GENERATION 14 Charlotte・Charlotte',
      productNumber: 'LACM-14824 ',
      releaseDate: new Date('2019-02-27'),
      price: 1500,
      distributor:
        '株式会社バンダイナムコアーツ © BANDAI NAMCO Entertainment Inc.',
      index: [
        {
          title: 'だってあなたはプリンセス',
          artist: ['Charlotte・Charlotte [徳川まつり、エミリー スチュアート]'],
          words: ['新田目駿'],
          music: ['新田目駿'],
          arrangement: ['KOH'],
        },
        {
          title: 'ミラージュ・ミラー',
          artist: ['Charlotte・Charlotte [徳川まつり、エミリー スチュアート]'],
          words: ['KOH', '月丘りあ子'],
          music: ['KOH'],
          arrangement: ['KOH'],
        },
      ],
      comment:
        'シングルシリーズ「THE IDOLM@STER MILLION THE@TER GENERATION」の第十四弾！スマートフォン向けアプリ「アイドルマスター ミリオンライブ！ シアターデイズ」より、新ユニットCharlotte・Charlotte [徳川まつり、エミリー スチュアート]の2人！ゲーム内イベントで使用された楽曲「だってあなたはプリンセス」のほか、カップリング1曲とドラマパートを収録！',
    },
  ]
}
