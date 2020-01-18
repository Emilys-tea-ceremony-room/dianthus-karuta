import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

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
  jacketSource: NodeRequire
  index: ISong[]
  comment?: string
  info?: string
}
export interface IDiscography {
  data: IWork[]
  selectedWork: IWork | null
}

@Module({ namespaced: true, name: 'discography', stateFactory: true })
export default class Discography extends VuexModule implements IDiscography {
  data = [
    {
      title: 'THE IDOLM@STER THE@TER CHALLENGE 02',
      productNumber: 'LACM-14948',
      releaseDate: new Date('2019-11-27'),
      price: 1500,
      distributor:
        '株式会社バンダイナムコアーツ ©窪岡俊之 ©BANDAI NAMCO Entertainment Inc.',
      youtube_id: 'b2iDl47mMso',
      jacketSource: require('@/assets/discography/TC02.jpg'),
      index: [
        {
          title: 'World Changer',
          artist: [
            '如月千早',
            '星井美希',
            'エミリー スチュアート',
            '菊地 真',
            '天海春香',
          ],
          words: ['半田 翼', '新田目 翔'],
          music: ['半田 翼'],
          arrangement: ['半田 翼'],
        },
        {
          title: 'DIAMOND DAYS',
          artist: [
            '如月千早',
            '星井美希',
            'エミリー スチュアート',
            '菊地 真',
            '天海春香',
          ],
          words: ['rino'],
          music: ['高田 暁'],
          arrangement: ['高田 暁'],
        },
      ],
      comment: '',
    },
    {
      title: 'THE IDOLM@STER MILLION THE@TER WAVE 01 Flyers!!!',
      productNumber: 'LACM-14891',
      releaseDate: new Date('2019-07-24'),
      price: 2800,
      distributor: 'Lantis',
      youtube_id: 'Frh5-k6SvVI',
      jacketSource: require('@/assets/discography/MTW01.jpg'),
      index: [
        {
          title: 'Flayers!!!',
          artist: ['765 MILLION ALLSTARS'],
          words: ['唐沢美帆'],
          music: ['新田目 翔'],
          arrangement: ['新田目 翔'],
        },
        {
          title: 'Justice OR Voice',
          artist: [
            'ジェネシスxネメシス[白石紬、桜守歌織、ジュリア、菊地真、野々原茜]',
          ],
          words: ['真崎エリカ'],
          music: ['矢鴇つかさ (Arte Refact)'],
          arrangement: ['矢鴇つかさ (Arte Refact)'],
        },
        {
          title: 'White Vows',
          artist: [
            '豊川風花',
            '馬場このみ',
            '百瀬莉緒',
            '桜守歌織',
            '二階堂千鶴',
          ],
          words: ['結城アイラ'],
          music: ['遠藤直弥'],
          arrangement: ['遠藤直弥'],
        },
      ],
      comment: '',
    },
    {
      title:
        'THE IDOLM@STER MILLION THE@TER GENERATION 14 Charlotte・Charlotte',
      productNumber: 'LACM-14824',
      releaseDate: new Date('2019-02-27'),
      price: 1500,
      distributor:
        '株式会社バンダイナムコアーツ © BANDAI NAMCO Entertainment Inc.',
      youtube_id: '8ThaAND6JTc',
      jacketSource: require('@/assets/discography/MTG14.jpg'),
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
        'シングルシリーズ「THE IDOLM@STER MILLION THE@TER GENERATION」の第十四弾！新ユニットCharlotte・Charlotte [徳川まつり、エミリー スチュアート]の2人！劇場で披露された楽曲「だってあなたはプリンセス」のほか、カップリング1曲とドラマを収録！',
    },
    {
      title: 'THE IDOLM@STER MILLION LIVE! M@STER SPARKLE 05',
      productNumber: 'LACA-15675',
      releaseDate: new Date('2018-01-10'),
      price: 2000,
      distributor: 'Lantis',
      youtube_id: 'ImGjRmpvvCE',
      jacketSource: require('@/assets/discography/MS05.jpg'),
      index: [
        {
          title: 'Border LINE→→→♡',
          artist: ['百瀬莉緒'],
          words: ['唐沢美帆'],
          music: ['睦月周平'],
          arrangement: ['睦月周平'],
        },
        {
          title: 'ふわりずむ',
          artist: ['宮尾美也'],
          words: ['rino'],
          music: ['渡部チェル'],
          arrangement: ['渡部チェル'],
        },
        {
          title: 'たんけんぼうけん☆ハイホー隊',
          artist: ['大神 環'],
          words: ['藤本記子'],
          music: ['本多友紀 (Arte Refact)'],
          arrangement: ['酒井拓也 (Arte Refact)'],
        },
        {
          title: 'Silent Joker',
          artist: ['真壁瑞希'],
          words: ['中村彼方'],
          music: ['ANCHOR'],
          arrangement: ['ANCHOR'],
        },
        {
          title: 'はなしらべ',
          artist: ['エミリー スチュアート'],
          words: ['藤本記子'],
          music: ['藤本記子'],
          arrangement: ['福富雅之'],
        },
      ],
      comment:
        '待望の新CDシリーズがスタート！ソロ曲シリーズとなる「M@STER SPARKLE」シリーズの第五弾として、大神環 宮尾美也 百瀬莉緒 エミリー 真壁瑞希 のソロ曲を収録！',
    },
    {
      title: 'THE IDOLM@STER MILLION THE@TER GENERATION 11 UNION!!',
      productNumber: 'LACM-14641',
      releaseDate: new Date('2018-08-29'),
      price: 2500,
      distributor:
        '株式会社バンダイナムコアーツ ©窪岡俊之 ©BANDAI NAMCO Entertainment Inc.',
      youtube_id: 'cxtxp2FXh-U',
      jacketSource: require('@/assets/discography/MTG11.jpg'),
      index: [
        {
          title: 'UNION!!',
          artist: ['765 MILLION ALLSTARS'],
          words: ['藤本記子 (Nostalgic Orchestra)'],
          music: ['堀江晶太'],
          arrangement: ['堀江晶太'],
        },
        {
          title: 'Welcome!!',
          artist: ['765 MILLION ALLSTARS'],
          words: ['佐々木恵梨'],
          music: ['BNSI (佐藤貴文)'],
          arrangement: ['BNSI (佐藤貴文)'],
        },
      ],
      comment:
        'シリーズ第11弾は52人全員歌唱の新曲！アイドル52人全員歌唱の新曲「UNION!!」とカップリングの2曲を収録！',
    },
    {
      title: 'THE IDOLM@STER MILLION THE@TER GENERATION 04 プリンセススターズ',
      productNumber: 'LACM-14634',
      releaseDate: new Date('2018-01-31'),
      price: 1500,
      distributor: 'Lantis',
      youtube_id: 'do_JVQZGqXE',
      jacketSource: require('@/assets/discography/MTG04.jpg'),
      index: [
        {
          title: 'Princess Be Ambitious!!',
          artist: [
            'プリンセススターズ [春日未来、徳川まつり、矢吹可奈、七尾百合子、エミリー スチュアート]',
          ],
          words: ['藤本記子 (Nostargic Orchestra)'],
          music: ['新田目翔'],
          arrangement: ['福富雅之 (Nostargic Orchestra)'],
        },
        {
          title: 'Brand New Theater!',
          artist: [
            'プリンセススターズ [春日未来、徳川まつり、矢吹可奈、七尾百合子、エミリー スチュアート]',
          ],
          words: ['モモキエイジ'],
          music: ['BNSI (佐藤貴文)'],
          arrangement: ['EFFY'],
        },
      ],
      comment:
        '劇場で新たに結成された「プリンセススターズ」のテーマソングがついに完成！本作ではプリンセススターズより、春日未来、徳川まつり、矢吹可奈、七尾百合子、エミリー スチュアートの5名が歌います！ カップリングには、劇場の主題歌となっている「Brand New Theater!」のプリンセススターズver(16人)を収録。ミニドラマも収録し、楽しめる一枚となっています。',
    },
    {
      title: 'THE IDOLM@STER MILLION THE@TER GENERATION 01 Brand New Theater!',
      productNumber: 'LACM-14631',
      releaseDate: new Date('2017-07-26'),
      price: 1300,
      distributor: 'Lantis',
      youtube_id: '2ELtcG7sRCU',
      jacketSource: require('@/assets/discography/MTG01.jpg'),
      index: [
        {
          title: 'Brand New Theater!',
          artist: ['765 MILLION ALLSTARS'],
          words: ['モモキエイジ'],
          music: ['BNSI (佐藤貴文)'],
          arrangement: ['EFFY'],
        },
        {
          title: 'Dreaming!',
          artist: ['765 MILLION ALLSTARS'],
          words: ['真崎エリカ'],
          music: ['BNSI (佐藤貴文)'],
          arrangement: ['Arte Refact'],
        },
        {
          title: 'インヴィンシブル・ジャスティス',
          artist: ['伊吹翼×高坂海美'],
          words: ['松井洋平'],
          music: ['中山真斗'],
          arrangement: ['中山真斗'],
        },
      ],
      comment:
        '待望の新CDシリーズがスタート！ユニットCDシリーズとなる「MILLION THE@TER GENERATION」その第一弾として、テーマソング「Brand New Theater!」の他、新アイドルも加えた52人全員で歌う「Dreaming!」、さらに4周年記念PVの挿入歌となった、伊吹翼×高坂海美の歌う「インヴィンシブル・ジャスティス」の計3曲を収録！',
    },
    {
      title: 'THE IDOLM@STER LIVE THE@TER FORWARD 01 Sunshine Rhythm',
      productNumber: 'LACA-15611',
      releaseDate: new Date('2016-12-07'),
      price: 2000,
      distributor: 'Lantis',
      youtube_id: 'PQnJn7UzYPE',
      youtube_start: 105,
      jacketSource: require('@/assets/discography/LTF01.jpg'),
      index: [
        {
          title: 'ランニング・ハイッ',
          artist: ['キャンサー [エミリー スチュアート, 木下ひなた, 横山奈緒]'],
          words: ['松井洋平'],
          music: ['睦月周平'],
          arrangement: ['睦月周平'],
        },
        {
          title: 'ゲキテキ！ムテキ！恋したい！',
          artist: ['レオ [島原エレナ, 中谷 育, ロコ]'],
          words: ['藤本記子'],
          music: ['藤本記子'],
          arrangement: ['福富雅之'],
        },
        {
          title: 'Bonnes! Bonnes!! Vacances!!!',
          artist: ['リブラ [伊吹 翼, 佐竹美奈子, 福田のり子]'],
          words: ['松井洋平'],
          music: ['AstroNoteS'],
          arrangement: ['AstroNoteS'],
        },
        {
          title: 'NO CURRY NO LIFE',
          artist: ['カプリコーン [望月杏奈, 百瀬莉緒, 矢吹可奈]'],
          words: ['唐沢美帆'],
          music: ['板垣祐介'],
          arrangement: ['板垣祐介'],
        },
        {
          title: 'サンリズム・オーケストラ♪',
          artist: [
            'Sunshine Rhythm[伊吹 翼, エミリー スチュアート, 木下ひなた, 佐竹美奈子, 島原エレナ, 中谷 育, 福田のり子, 望月杏奈, 百瀬莉緒, 矢吹可奈, 横山奈緒, ロコ]',
          ],
          words: ['真崎エリカ'],
          music: ['EFFY'],
          arrangement: ['EFFY'],
        },
      ],
      comment:
        '日本武道館公演、4thライブに向けてCD、ライブが連動した企画がスタート！4thライブの各日程の出演者でチームを結成し、イベントを行うと同時にCDを発売！',
    },
    {
      title: 'THE IDOLM@STER LIVE THE@TER DREAMERS 04',
      productNumber: 'LACA-15524',
      releaseDate: new Date('2015-12-13'),
      price: 2300,
      distributor: 'Lantis',
      youtube_id: '07I9PzC_geg',
      jacketSource: require('@/assets/discography/LTD04.jpg'),
      index: [
        {
          title: 'Dreaming!',
          artist: [
            '秋月律子、伊吹 翼、エミリー スチュアート、我那覇響、佐竹美奈子、篠宮可憐、高山紗代子、天空橋朋花、中谷 育、水瀬伊織',
          ],
          words: ['真崎エリカ'],
          music: ['BNSI (佐藤貴文)'],
          arrangement: ['Arte Refact'],
        },
        {
          title: '深層マーメイド',
          artist: ['伊吹 翼×我那覇響'],
          words: ['唐沢美帆'],
          music: ['睦月周平'],
          arrangement: ['睦月周平'],
        },
        {
          title: 'HELLO, YOUR ANGEL♪',
          artist: ['天空橋朋花×中谷 育'],
          words: ['真崎エリカ'],
          music: ['鈴木裕明'],
          arrangement: ['鈴木裕明'],
        },
        {
          title: 'G♡F',
          artist: ['秋月律子×篠宮可憐'],
          words: ['KOH'],
          music: ['KOH'],
          arrangement: ['KOH'],
        },
        {
          title: 'little trip around the world',
          artist: ['エミリー スチュアート×水瀬伊織'],
          words: ['松井洋平'],
          music: ['yuxuki waga (fhána)'],
          arrangement: ['yuxuki waga (fhána)'],
        },
        {
          title: 'Melody in scape',
          artist: ['佐竹美奈子×高山紗代子'],
          words: ['真崎エリカ'],
          music: ['光増ハジメ'],
          arrangement: ['光増ハジメ'],
        },
      ],
      comment: '',
    },
    {
      title: 'THE IDOLM@STER LIVE THE@TER HARMONY 04',
      productNumber: 'LACA-15434',
      releaseDate: new Date('2014-09-24'),
      price: 2300,
      distributor: 'Lantis',
      youtube_id: '-dxufzS0ff0',
      youtube_start: '86',
      jacketSource: require('@/assets/discography/LTH04.jpg'),
      index: [
        {
          title: 'Eternal Harmony',
          artist: [
            'エターナルハーモニー [如月千早、エミリー スチュアート、ジュリア、徳川まつり、豊川風花]',
          ],
          words: ['Ayaka Miyake', 'TAKAROT'],
          music: ['Mitsuyuki Miyake', 'K’s', 'TAKAROT'],
          arrangement: ['K’s', 'TAKAROT'],
        },
        {
          title: 'カーニヴァル・ジャパネスク',
          artist: ['徳川まつり'],
          words: ['松井洋平'],
          music: ['松井洋平'],
          arrangement: ['AtoroNoteS'],
        },
        {
          title: 'プラリネ',
          artist: ['ジュリア'],
          words: ['きみコ'],
          music: ['佐々木淳'],
          arrangement: ['nano.RIPE'],
        },
        {
          title: 'bitter sweet',
          artist: ['豊川風花'],
          words: ['KOH'],
          music: ['KOH'],
          arrangement: ['KOH'],
        },
        {
          title: '君だけの欠片',
          artist: ['エミリー スチュアート'],
          words: ['藤本記子'],
          music: ['藤本記子'],
          arrangement: ['福富雅之'],
        },
        {
          title: 'Just be myself!!',
          artist: ['如月千早'],
          words: ['藤本記子'],
          music: ['山口朗彦'],
          arrangement: ['山口朗彦'],
        },
        {
          title: 'Welcome!!',
          artist: [
            'エターナルハーモニー [如月千早、エミリー スチュアート、ジュリア、徳川まつり、豊川風花]',
          ],
          words: ['佐々木恵梨'],
          music: ['BNSI (佐藤貴文)'],
          arrangement: ['BNSI (佐藤貴文)'],
        },
      ],
      comment:
        '今シリーズでは、ストーリーと連動したユニット展開となります。アイドルたちが乗り越える試練とともに、このCDを手にとってもらえる形になります。毎回、2つのユニットが同時にCDリリースを行います。第四弾となる今回のユニットは、「エターナルハーモニー」如月千早、エミリー スチュアート、ジュリア、徳川まつり、豊川風花。完全新曲の全員曲や各ソロ曲、そして「Thank You!」に続く新しい50人曲「Welcome!!」のユニットverを収録予定。',
    },
    {
      title: 'THE IDOLM@STER LIVE THE@TER PERFORMANCE 05',
      productNumber: 'LACA-15315',
      releaseDate: new Date('2013-08-28'),
      price: 1905,
      distributor: 'Lantis',
      youtube_id: 'sc61TVMYuEk',
      jacketSource: require('@/assets/discography/LTP05.jpg'),
      index: [
        {
          title: '微笑み日和',
          artist: ['エミリー＝スチュアート'],
          words: ['rino'],
          music: ['rino'],
          arrangement: ['福富雅之'],
        },
        {
          title: 'POKER POKER',
          artist: ['真壁瑞希'],
          words: ['松井洋平'],
          music: ['橋本由香利'],
          arrangement: ['橋本由香利'],
        },
        {
          title: 'Be My Boy',
          artist: ['百瀬莉緒'],
          words: ['mavie'],
          music: ['KOH'],
          arrangement: ['KOH'],
        },
        {
          title: 'プライヴェイト・ロードショウ (playback, Weekday)',
          artist: ['水瀬伊織'],
          words: ['松井洋平'],
          music: ['松田彬人'],
          arrangement: ['松田彬人'],
        },
        {
          title: 'Sentimental Venus',
          artist: ['水瀬伊織、エミリー=スチュアート、真壁瑞希、百瀬莉緒'],
          words: ['こだまさおり'],
          music: ['rino'],
          arrangement: ['関野元規'],
        },
      ],
      comment:
        '総勢50名のアイドルの中からユニットを結成。毎月ミニアルバムをリリース予定。第四弾ユニットとして“水瀬伊織”、“エミリー・スチュアート”、“百瀬莉緒”、“真壁瑞希”が登場！今回は『オシャレ・ポップ・アイドル』をテーマに、煌めく可愛らしい歌声をお贈り致します。各アイドルのソロ曲、モノローグドラマも収録する内容充実のミニアルバムになります。特典として、ボイス付き限定デザインのカードを入手できる、シリアルナンバー付チラシを封入！さらに、都内で開催される「発売記念イベント」への参加応募券を封入。',
    },
    {
      title: 'THE IDOLM@STER LIVE THE@TER PERFORMANCE 01 Thank You!',
      productNumber: 'LACM-14080',
      releaseDate: new Date('2013-04-24'),
      price: 952,
      distributor: 'Lantis',
      jacketSource: require('@/assets/discography/LTP01.jpg'),
      youtube_id: 'KaOo73W_GS8',
      index: [
        {
          title: 'Thank You!',
          artist: ['765 MILLIONSTARS'],
          words: ['モモキエイジ'],
          music: ['BNSI (佐藤貴文)'],
          arrangement: ['BNSI (佐藤貴文)'],
        },
      ],
      comment:
        '『アイドルマスター ミリオンライブ！』テーマ曲は50人全員が歌うグランドオープニング！これまでの765プロアイドル13人に加え、765プロ劇場で共に活動していく新規加入アイドル37人をあわせた総勢50人のアイドルによる、新しい挑戦がはじまります！今回のテーマソング「Thank You!」は、総勢50人が歌う、グランドオープニング！これからの期待感に溢れた明るくキャッチーな曲に仕上がっています。カップリングには、「Thank You!」の765PRO ALLSTARS ver.（これまでのアイドル13人）、765THEATER ALLSTARS ver.（新規加入のアイドル37人）もそれぞれ収録予定！期間限定特典として、限定デザインのカードのうち、一枚を必ず入手できるシリアルナンバー入り！',
    },
  ]

  selectedWork: IWork | null = null

  @Mutation
  SELECT_WORK(work: IWork) {
    this.selectedWork = work
  }

  @Mutation
  DISSELECT_WORK() {
    this.selectedWork = null
  }
}
