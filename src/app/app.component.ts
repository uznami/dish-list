import { Component, VERSION } from '@angular/core';

enum Mode {
  List,
  Grid,
}

interface Dish {
  id: string;
  name: string;
  url: string;
  description: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  readonly Mode = Mode;
  name = 'Angular ' + VERSION.major;
  mode: Mode = Mode.List;
  dishes: Dish[] = [
    {
      id: 'a3f',
      url: 'url("http://bit.ly/3gEcn6i")',
      name: 'マルゲリータ',
      description:
        'トマト・モッツァレラチーズ・バジルを自家製生地にのせ、石窯で焼き上げたシンプルなピザ。',
    },
    {
      id: 'a3f',
      url: 'url("http://bit.ly/3AHtJWv")',
      name: 'ココアケーキ',
      description:
        'ふんわりと焼き上げたココアケーキに、ブルーベリーとレッドカラントをトッピング。',
    },
    {
      id: 'a3f',
      url: 'url("http://bit.ly/3UnTPFn")',
      name: 'チーズステーキサンド',
      description:
        '甘辛くソテーした牛薄切り肉とチーズを使用した、フィラデルフィアのサンドイッチ。お好みでソースをつけてお召し上がりください。',
    },
    {
      id: 'a3f',
      url: 'url("http://bit.ly/3AOyJJg")',
      name: 'レモンパイ',
      description:
        '甘酸っぱいレモンカードの上にメレンゲをのせ、さっくりと焼き上げたパイ。',
    },
    {
      id: 'a3f',
      url: 'url("http://bit.ly/3gEcNJU")',
      name: 'カフェラテ',
      description:
        '本日のおすすめのコーヒー豆を深煎りし、じっくり淹れたカフェラテ。ミルクはソイミルクに変更可(+￥50)。コーヒー豆の産地は店員にお尋ねください。',
    },
    {
      id: 'a3f',
      url: 'url("http://bit.ly/3gJ5eBw")',
      name: '季節の温野菜サラダ',
      description:
        'オーブンでグリルした旬の野菜とグリーンリーフのサラダ。ドレッシングは、シーザー、セサミ、ソテードオニオンからお選びいただけます。',
    },
    {
      id: 'a3f',
      url: 'url("http://bit.ly/3u1GuHO")',
      name: 'かぼちゃのスープ',
      description:
        'バターナッツかぼちゃを使用したなめらかなポタージュスープ。テイクアウトもできます。',
    },
    {
      id: 'a3f',
      url: 'url("http://bit.ly/3tZgUTJ")',
      name: 'クリスマスティー',
      description:
        'スパイスとオレンジをブレンドした冬季限定のフレーバードティー。ストレートでもミルクティーでもお楽しみいただけます。※12/25までの限定メニュー',
    },
    {
      id: 'a3f',
      url: 'url("http://bit.ly/3FcNpEJ")',
      name: 'BLTサンド',
      description:
        'アンガス牛100%の直火焼きパティに、北海道産のチェダーチーズをあわせたこだわりのBLTサンド。野菜の産地は店内掲示をご覧ください。',
    },
  ];

  toggleMode(newMode: Mode): void {
    this.mode = newMode;
  }
}
