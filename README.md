# このプロジェクトについて
このプロジェクトは講義の考査のために作られたWebアプリのコードです。


# アプリの構成
- 言語: TypeScript

　　← 言わずもがな。

- フレームワーク: Next.js

　　← Routingの視認性がよい。ES Lint, TS, CSS Moduleとかをデフォルトで入れてくれるから、初期設定が楽。

- Styling: CSS Module

   ← 学習コストの低さを考慮。もっと開発期間が長ければ、Tailwind CSSやCSS in JSを使いたかった。

- 状態管理: useState & Recoil

　　← Local StateはuseState、Grobal StateはRecoilで管理。
  
# フォルダ構成
基本的に[こちらの記事](https://zenn.dev/yoshiko/articles/99f8047555f700#container%2Fpresenter%E3%81%AE%E5%88%86%E9%9B%A2)を参考に構成を作らせていただいた。
* /database: APIからのデータ取得、型定義を行う
* /pages: Next.jsのpageディレクトリ。ファイル構成がアプリのページ構成になっている
* /components
  * model: 特定のデータ（今回のアプリでは市町村データ）を表示するためのコンポーネントを定義。
  * page: 各ページを表示するためのコンポーネントを定義。rootのpagesでは基本的にこのディレクトリのコンポーネントを呼び出す形になっている。
  * ui: 特定のデータによらない、UI要素を定義。
