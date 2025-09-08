# codex_test project

シンプルな Node.js プロジェクトです。`src/index.js` に定義された `greet(name)` 関数を用いて、簡単な出力を行います。

## 主要機能
- `greet(name)`: 名前を受け取り、"Hello, <name>" を返します

## セットアップ
- 前提: Node.js 18 以上を推奨
- ローカル実行:
  1. リポジトリをクローン
  2. 依存関係は特に不要（現状）

```bash
git clone <this-repo-url>
cd codex_test
node src/index.js
```

## 使い方
### ライブラリとして
```js
const greet = require('./src');
console.log(greet('world')); // => "Hello, world"
```

### CLI（将来対応予定）
現時点では CLI は提供していません。

## スクリプトと開発
- 実行: `node src/index.js`

## ディレクトリ構成
```text
.
├── README.md
└── src
    └── index.js
```

## 貢献方法
- Issue / Pull Request を歓迎します。
- 小さな修正でも歓迎です。再現手順や意図の共有をお願いします。

## ライセンス
TBD
