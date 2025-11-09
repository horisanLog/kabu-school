# 🎨 ステップ 4：デザイン指針（0.5〜1 日）  
（Figma／CMS なし・PC/SP 対応）

あなたは UI/UX デザイナー兼フロントエンド実装者です。  
以下の条件をもとに、**Next.js + Tailwind CSS で直接実装可能なデザイン指針** をまとめてください。  
目的は「安心感のある整体サロンサイト（例：AI 姿勢診断×整体×エステ）」を**PC/SP 両対応**として設計することです。  
Figma や CMS は使用しません。

---

## 🧠 入力情報

- サイトテーマ：{例：Y'm 整体サロン}
- スタイル：清潔感 × 癒し × 科学的根拠（ホワイトベース、ベージュ・薄グリーンアクセント）
- コンポーネント：Hero／サロン特徴カード／メニュー比較表／AI 診断紹介／お客様の声スライダー／スタッフ紹介／アクセスマップ／予約 CTA バー
- レスポンシブ：SP ファースト（LINE・電話予約固定バー、タップ最適化）
- 想定環境：Next.js + Tailwind CSS（静的構成）
- 地域特性：戸田市、地域密着型、プレオープン特別価格

---

## 🎯 出力フォーマット

### 1. デザインコンセプト

- テーマ：**清潔感 × 癒し × 科学的根拠**
- 印象：安心・信頼・リラックス・最新技術
- トーン：ホワイトベース／ベージュ・薄グリーンアクセント
- 目的：「データ × リラックス」を表現し、安心して施術を受けられる雰囲気を作る

---

### 2. カラーパレット

| 用途           | カラー         | コード例  | 備考                         |
| -------------- | -------------- | --------- | ---------------------------- |
| 背景           | ホワイト       | #FFFFFF   | 全体ベース・清潔感          |
| メイン         | ベージュ       | #F5F5DC   | 温かみ・安心感              |
| アクセント     | 薄グリーン     | #E8F5E8   | 自然・癒し・AI 技術感       |
| テキスト       | ダークグレー   | #333333   | 可読性重視                   |
| サブテキスト   | ミディアムグレー | #6B7280   | 補足説明                     |
| 線・境界       | ライトグレー   | #E5E7EB   | セクション区切り             |
| 成功・特典     | ソフトグリーン | #22C55E   | プレオープン価格・効果訴求   |
| 注意・緊急性   | ソフトオレンジ | #F59E0B   | 期間限定・予約満席時         |

---

### 3. タイポグラフィ

| 種類               | フォント                    | サイズ                | Tailwind 例                           |
| ------------------ | --------------------------- | --------------------- | ------------------------------------- |
| 見出し（H1）       | Noto Sans JP / sans-serif   | 28px（SP: 22px）      | `text-2xl md:text-3xl font-bold`     |
| 見出し（H2）       | Noto Sans JP                | 22px（SP: 18px）      | `text-xl md:text-2xl font-semibold`  |
| 見出し（H3）       | Noto Sans JP                | 18px（SP: 16px）      | `text-lg md:text-xl font-medium`     |
| 本文               | Noto Sans JP                | 16px                  | `text-base leading-relaxed`          |
| 小見出し・補足     | Noto Sans JP                | 14px                  | `text-sm text-gray-600`              |
| AI 技術関連        | Roboto                      | 16px                  | `font-roboto text-base font-medium`  |
| 価格表示           | Noto Sans JP                | 18px（SP: 16px）      | `text-lg md:text-xl font-bold`       |

---

### 4. レイアウトルール

- **SP ファースト**
  - max-width: 640px  
  - セクション間：`py-8`（上下 32px）
  - 内側余白：`px-4`（左右 16px）
  - 予約 CTA バー固定（下部）：`fixed bottom-0 left-0 w-full z-50`
  - タップ領域：最小 44px × 44px
- **PC**
  - コンテナ：`max-w-screen-xl mx-auto px-8`
  - 2 カラムレイアウト：画像左・テキスト右の交互配置
  - セクション背景交互（白⇄薄ベージュ）で視認性 UP
  - ホバーエフェクト：`hover:shadow-lg transition-shadow duration-300`

---

### 5. 主要コンポーネント設計

#### 🦸 Hero

- 構成：メインキャッチ／サブコピー／特徴 3 点／予約 CTA ボタン／背景イメージ
- 背景：薄グリーンのグラデーション or サロン内観写真
- CTA：`bg-green-500 text-white rounded-full py-4 px-8 shadow-lg hover:bg-green-600 transition-colors`
- 例）「LINE で簡単予約」「お電話でのご予約」

#### 🏥 サロン特徴カード

| 要素     | 内容                           | Tailwind 構成例                              |
| -------- | ------------------------------ | -------------------------------------------- |
| アイコン | AI・整体・エステのアイコン     | `rounded-full bg-green-100 p-4 text-green-600` |
| タイトル | AI 姿勢診断・整体・エステ      | `text-lg font-semibold text-gray-800`       |
| テキスト | 2〜3 行の特徴説明              | `text-sm text-gray-600 leading-relaxed`     |
| 背景     | カード全体                     | `bg-white rounded-xl shadow-md p-6 hover:shadow-lg` |

#### 💰 メニュー比較表

- レイアウト：SP は縦積み、PC は横並び比較表
- 価格強調：`text-2xl font-bold text-green-600`
- 特別価格：`line-through text-gray-400` + `text-red-500 font-bold`
- 人気メニュー：`border-2 border-green-500 relative` + `absolute -top-3 bg-green-500 text-white px-4 py-1 rounded-full text-sm`

#### 🤖 AI 姿勢診断紹介

- 構成：診断プロセス図解／ビフォーアフター写真／科学的根拠
- プロセス：`flex items-center space-x-4` でステップ表示
- ビフォーアフター：`grid grid-cols-2 gap-4` で比較表示
- 体験ボタン：`bg-blue-500 text-white rounded-lg py-3 px-6 font-semibold hover:bg-blue-600`

#### 💬 お客様の声スライダー

- 構成：写真／年齢・職業／コメント／星評価
- スライダー：`overflow-x-auto flex space-x-4 pb-4`
- カード：`min-w-80 bg-white rounded-xl shadow-md p-6 flex-shrink-0`
- 星評価：`text-yellow-400` で ★★★★★ 表示
- 写真：`rounded-full w-16 h-16 object-cover`

#### 👩‍⚕️ スタッフ・サロン紹介

- レイアウト：写真左・プロフィール右（SP は縦積み）
- 写真：`rounded-lg shadow-md w-full md:w-48 h-64 object-cover`
- 資格バッジ：`inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm mr-2 mb-2`
- サロン内観：`grid grid-cols-2 md:grid-cols-3 gap-4` でギャラリー表示

#### 🗺️ アクセスマップ

- Google マップ：`w-full h-64 md:h-80 rounded-lg shadow-md`
- 駐車場情報：`bg-blue-50 border-l-4 border-blue-500 p-4 rounded`
- 最寄り駅：`flex items-center space-x-2` でアイコン + テキスト
- 営業時間：`grid grid-cols-2 gap-2 text-sm`

#### 📅 予約システム

- 予約方法選択：`grid grid-cols-1 md:grid-cols-3 gap-4`
- LINE 予約：`bg-green-500 text-white` + LINE アイコン
- 電話予約：`bg-blue-500 text-white` + 電話アイコン
- フォーム予約：`bg-gray-500 text-white` + フォームアイコン
- QR コード：`mx-auto w-32 h-32`

#### 🚀 予約 CTA バー（SP 固定）

- 表示条件：常時表示（重要性が高いため）
- `fixed bottom-0 left-0 w-full bg-white border-t shadow-lg z-50`
- ボタン配置：`grid grid-cols-2 gap-2 p-3`
- LINE：`bg-green-500 text-white rounded-lg py-3 font-semibold`
- 電話：`bg-blue-500 text-white rounded-lg py-3 font-semibold`

---

### 6. 地域密着型サロン特有のデザイン

#### ローカル感の演出
- 地域名の自然な配置：`text-green-600 font-semibold`
- 近隣ランドマーク：`flex items-center space-x-2 text-sm text-gray-600`
- 地域コミュニティ：`bg-yellow-50 border border-yellow-200 rounded-lg p-4`

#### 来店促進デザイン
- 道順写真：`rounded-lg shadow-md mb-2` でステップ表示
- 駐車場案内：`bg-blue-50 p-4 rounded-lg` で目立たせ
- 初回来店フロー：`border-l-4 border-green-500 pl-4 space-y-2`

---

### 7. プレオープン特別デザイン

#### 限定性・緊急性の表現
- 期間限定バナー：`bg-red-500 text-white text-center py-2 font-bold animate-pulse`
- カウントダウン：`bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg p-4 text-center`
- 特別価格：`relative` + `absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 py-1 text-xs`

#### 体験ハードル軽減
- 初回限定価格：`text-3xl font-bold text-red-500`
- 安心メッセージ：`bg-green-50 border border-green-200 rounded-lg p-4 text-green-800`
- 無料相談：`border-2 border-dashed border-green-300 rounded-lg p-4 text-center`

---

### 8. アクセシビリティ・操作性

- タップ領域：44px 以上（`min-h-11 min-w-11`）
- コントラスト比：4.5:1 以上
- フォーカス：`focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2`
- ホバー：`hover:shadow-lg hover:scale-105 transition-all duration-200`
- 動作確認端末：iPhone / Android / Chrome / Safari / Edge
- 読み上げ対応：`aria-label` / `alt` 属性の適切な設定

---

### 9. Tailwind ユーティリティ例

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#F5F5DC',      // ベージュ
        accent: '#E8F5E8',       // 薄グリーン
        success: '#22C55E',      // ソフトグリーン
        warning: '#F59E0B',      // ソフトオレンジ
        salonBg: '#FEFEFE',      // サロン背景
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
    },
  },
}
```

---

### 10. モバイル最適化

#### タッチ操作最適化
- ボタンサイズ：`py-4 px-6` 以上
- スワイプ対応：お客様の声スライダー
- 電話タップ：`tel:` リンク + `text-blue-500 hover:text-blue-700`
- LINE 連携：`line://` リンク対応

#### 表示最適化
- 画像遅延読み込み：`loading="lazy"`
- WebP 対応：`<picture>` 要素活用
- フォントサイズ：16px 以上（ズーム防止）
- 余白調整：`px-4 py-2` で十分なタップ領域

---

### 11. 次フェーズへの引き継ぎ

- 実装優先順（Hero → サロン特徴 → メニュー → お客様の声 → 予約 CTA）
- 各セクションの高さ・余白・フォント統一
- 画像ファイル仕様（横 1200px 推奨、WebP 対応、圧縮最適化）
- 予約 CTA ボタン文言・表示タイミング確認（SP）
- LINE Bot 連携・電話発信の動作確認
- Google マップ API キー設定

---

### 12. パフォーマンス最適化

#### 画像最適化
- WebP 形式：`<picture>` 要素でフォールバック
- 遅延読み込み：`loading="lazy"` 属性
- 適切なサイズ：デバイス別最適化

#### CSS 最適化
- Tailwind CSS の Purge 設定
- 未使用クラスの削除
- Critical CSS の インライン化

#### JavaScript 最適化
- 必要最小限の JavaScript
- 遅延読み込み：`dynamic import`
- バンドルサイズの最小化

---

📌 出力条件：

- Tailwind クラスを具体的に示す
- PC/SP 両対応の構造を明示する（ブレークポイント `md:` 使用）
- 整体サロン特有のデザイン要素を含める
- 地域密着型・プレオープン戦略を反映
- Figma や CMS の指示は含めない
- Markdown＋表＋コードブロックで見やすく出力
- モバイルファーストの設計を重視
