# 🎨 ステップ4：デザイン指針（0.5〜1日）  
（Figma／CMSなし・PC/SP対応）

あなたはUI/UXデザイナー兼フロントエンド実装者です。  
以下の条件をもとに、**Next.js + Tailwind CSSで直接実装可能なデザイン指針** をまとめてください。  
目的は「信頼感のある学習系LP（例：株式投資スクール）」を**PC/SP両対応**として設計することです。  
FigmaやCMSは使用しません。

---

## 🧠 入力情報
- サイトテーマ：{例：株式投資スクール}
- スタイル：信頼 × 学習（白ベース、アクセントは1色）
- コンポーネント：Hero／ベネフィットカード／実績バッジ／ステップ（15回）タイムライン／FAQアコーディオン／CTAバー／日程検索
- レスポンシブ：SPファースト（CTA固定バー、フォーム短縮）
- 想定環境：Next.js + Tailwind CSS（静的構成）

---

## 🎯 出力フォーマット

### 1. デザインコンセプト
- テーマ：**信頼 × 学習**
- 印象：清潔感・誠実・知的
- トーン：白ベース／ネイビー1色アクセント
- 目的：信頼できる学習機関として、安心して申込できる雰囲気を作る

---

### 2. カラーパレット
| 用途 | カラー | コード例 | 備考 |
|------|---------|-----------|------|
| 背景 | 白 | #FFFFFF | 全体ベース |
| アクセント | ネイビーブルー | #1A3C78 | ボタン・リンク・見出し |
| サブ文字 | グレー | #6B7280 | 補足説明 |
| 線・境界 | 薄グレー | #E5E7EB | セクション区切り |
| 成功 | グリーン | #22C55E | 実績バッジなどに使用 |

---

### 3. タイポグラフィ
| 種類 | フォント | サイズ | Tailwind例 |
|------|-----------|----------|-------------|
| 見出し（H1） | Noto Sans JP / sans-serif | 32px（SP: 24px） | `text-3xl md:text-4xl font-bold` |
| 見出し（H2） | Noto Sans JP | 24px（SP: 20px） | `text-2xl md:text-3xl font-semibold` |
| 本文 | Noto Sans JP | 16px | `text-base leading-relaxed` |
| 小見出し・補足 | Noto Sans JP | 14px | `text-sm text-gray-600` |

---

### 4. レイアウトルール
- **SPファースト**
  - max-width: 640px  
  - セクション間：`py-12`（上下48px）
  - フォーム入力幅：`w-full`
  - CTAバー固定（下部）：`fixed bottom-0 left-0 w-full`
- **PC**
  - コンテナ：`max-w-screen-lg mx-auto px-8`
  - カラム：中央寄せ／画像右配置のHeroなどを使用
  - セクション背景交互（白⇄灰）で可読性UP

---

### 5. 主要コンポーネント設計

#### 🦸 Hero
- 構成：タイトル／サブコピー／CTAボタン／背景イメージ
- 背景：白または薄グレー
- CTA：`bg-accent text-white rounded-2xl py-3 px-6 shadow hover:opacity-90`
- 例）「まずは無料体験からはじめよう」

#### 💡 ベネフィットカード
| 要素 | 内容 | Tailwind構成例 |
|------|------|----------------|
| アイコン | Lucideアイコン（book, chart, star） | `rounded-full bg-gray-100 p-3` |
| タイトル | 学べる内容や利点 | `text-lg font-semibold` |
| テキスト | 2〜3行説明 | `text-sm text-gray-600` |

#### 🥇 実績バッジ
- 例：「満足度 98%」「受講者 20,000人」「提携スクール 全国展開」
- 配置：Flexで横並び、SPは縦積み  
- `bg-gray-50 p-4 rounded-xl shadow-sm text-center`

#### 🪜 ステップ（15回）タイムライン
- 構成：番号／タイトル／1行説明
- デザイン：左線タイムライン風  
- Tailwind例：`border-l-4 border-accent pl-4 space-y-6`

#### ❓ FAQアコーディオン
- Q行：太字 + アイコン右  
- A行：淡色背景で展開  
- Tailwind例：  
  ```html
  <div class="border-b">
    <button class="flex justify-between py-4 font-semibold text-left">
      質問タイトル
      <ChevronDown class="text-accent"/>
    </button>
    <div class="text-gray-600 pb-4">回答本文</div>
  </div>
  ```

#### 📅 日程検索
- 絞り込みUI：地域／オンライン／日付（`select`要素）
- 結果：カードリスト  
- CTAボタン：「この日程で申し込む」  
- Tailwind例：`border rounded-lg p-4 shadow-sm hover:shadow-md`

#### 🚀 CTAバー（SP固定）
- 表示条件：スクロール200px以降  
- `fixed bottom-0 left-0 w-full bg-accent text-white text-center py-3 font-semibold shadow-md`
- CTA例：「無料体験に申し込む」

---

### 6. アクセシビリティ・操作性
- タップ領域：44px以上  
- コントラスト比：4.5:1以上  
- ホバー／フォーカス：`outline-none ring-2 ring-accent`  
- 動作確認端末：iPhone / Android / Chrome / Safari / Edge

---

### 7. Tailwindユーティリティ例
```js
// tailwind.config.js
theme: {
  extend: {
    colors: {
      accent: '#1A3C78',
      sectionBg: '#F9FAFB',
    },
    borderRadius: {
      '2xl': '1rem',
    },
  },
}
```

---

### 8. 次フェーズへの引き継ぎ
- 実装優先順（Hero → カード → タイムライン → FAQ → CTA）
- 各セクションの高さ・余白・フォント統一
- 画像ファイル仕様（横1200px推奨、WebP対応）
- CTAボタン文言・固定タイミング確認（SP）

---

📌 出力条件：
- Tailwindクラスを具体的に示す
- PC/SP両対応の構造を明示する（ブレークポイント`md:`使用）
- FigmaやCMSの指示は含めない
- Markdown＋表＋コードブロックで見やすく出力
