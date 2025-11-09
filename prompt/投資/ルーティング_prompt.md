# 🧭 ステップ7：ルーティング & ページ骨子（1日）

あなたはNext.js + Tailwindの実装者兼IA設計者です。  
以下の要件をもとに、**ルーティング表・URL設計・各ページの骨子（セクション順／主要コンポーネント／最低限のDOM構造）** を作成してください。  
CMSは使いません。外部LPやマイページは外部ドメインに遷移させます。

---

## 🧠 入力情報
- 技術：Next.js 14（pages構成でも可）、Tailwind、TypeScript
- CMS：使わない（静的JSON）
- 端末：PC/SP（SPファースト、下部固定CTA）
- ルート一覧と目的：
  - `/` ：Hero, 実績, ベネフィット, カリキュラム概要, 体験導線, 口コミ, FAQ, CTA
  - `/school/kabu` ：詳細（15回表/タイムライン, 料金, 申込ボタン） → 参考: f-academy.jp
  - `/school/schedule` ：日付・地域・オンライン絞り込み（外部LPリンク可） → 参考: f-academy.jp
  - `/open_campus/textbook/kabu` ：教材写真＋特長 → 参考: f-academy.jp
  - `/seminar` ：体験LP（自前 or 外部） → 参考: f-academy.jp
  - `/login` ：受講生マイページ導線（外部） → `https://mypage.f-academy.jp`

---

## 🎯 出力フォーマット

### 1. ルーティング表（URL戦略）
| パス | 目的 | 主CTA | 外部遷移 | 備考 |
|-----|------|------|---------|-----|
| `/` | LP：理解→信頼→行動 | 無料体験申込(`/seminar` or 外部LP) | 任意 | 固定CTA(モバイル) |
| `/school/kabu` | カリキュラム詳細 | 体験申込(`/seminar`) | 任意 | 15回タイムライン |
| `/school/schedule` | 開催検索→申込リンクへ | 各カードの「申し込む」 | 可（外部LP） | クエリ：`?date=&area=&online=` |
| `/open_campus/textbook/kabu` | 教材の特長訴求 | 体験申込 | なし | 画像は`/public/images` |
| `/seminar` | 体験申込LP | 申込送信 or 外部LPへ | 可 | 自前フォーム可 |
| `/login` | 受講生ログイン導線 | ログイン | 外部必須 | `https://mypage.f-academy.jp` |

---

### 2. ページ骨子（各ページのセクション順／主要コンポーネント）
> それぞれ **セクション順**・**DOM骨子**・**使用コンポーネント**・**イベント計測** を具体化してください。

#### `/` トップ（LP）
- セクション順：Hero → 実績 → ベネフィット → カリキュラム概要 → 体験導線 → 口コミ → FAQ → 最終CTA
- 主要コンポーネント：`<Hero/> <Stats/> <BenefitGrid/> <CurriculumDigest/> <LeadStrip/> <ReviewList/> <FAQAccordion/> <FinalCTA/> <CTAStickyBar spOnly/>`
- DOM骨子例：
  ```html
  <main>
    <section id="hero">...</section>
    <section id="stats">...</section>
    <section id="benefits">...</section>
    <section id="curriculum">...</section>
    <section id="lead">...</section>
    <section id="reviews">...</section>
    <section id="faq">...</section>
    <section id="cta">...</section>
  </main>
  ```
- 計測イベント：`click_cta_hero`, `click_cta_final`, `accordion_faq_open`

#### `/school/kabu`
- セクション順：概要 → 15回タイムライン表 → 到達目標 → 料金・期間 → 体験申込CTA
- コンポーネント：`<Overview/> <Timeline15/> <OutcomesTable/> <Tuition/> <CTAInline/>`

#### `/school/schedule`
- セクション順：フィルタ → 結果カードリスト → 申込リンク
- クエリ：`?date=YYYY-MM&area=tokyo&online=true`
- コンポーネント：`<ScheduleFilter/> <ScheduleList/>`
- イベント：`filter_change`, `click_apply_schedule`

#### `/open_campus/textbook/kabu`
- セクション順：表紙写真 → 特長3点 → 目次ダイジェスト → CTA
- コンポーネント：`<TextbookHero/> <FeatureTriad/> <TOCExcerpt/> <CTAInline/>`

#### `/seminar`
- 自前LPの場合：Hero → 参加メリット → 開催日程（抜粋）→ フォーム → サンクス導線
- 外部LPの場合：上部に説明＋「外部LPへ」ボタンのみ
- コンポーネント：`<SeminarHero/> <Merits/> <SeminarTeaser/> <EntryForm/>`

#### `/login`
- 外部導線：`https://mypage.f-academy.jp` へ遷移
- コンポーネント：`<ExternalLoginCard/>`

---

### 3. Next.js 実装構成（pages構成例）
```
/pages
├── index.tsx
├── school/
│   ├── kabu.tsx
│   └── schedule.tsx
├── open_campus/
│   └── textbook/
│       └── kabu.tsx
├── seminar.tsx
└── login.tsx
/components
  ├── Hero.tsx
  ├── Stats.tsx
  ├── BenefitGrid.tsx
  ├── CurriculumDigest.tsx
  ├── Timeline15.tsx
  ├── OutcomesTable.tsx
  ├── Tuition.tsx
  ├── LeadStrip.tsx
  ├── ReviewList.tsx
  ├── FAQAccordion.tsx
  ├── CTAStickyBar.tsx
  ├── ScheduleFilter.tsx
  ├── ScheduleList.tsx
  ├── TextbookHero.tsx
  ├── FeatureTriad.tsx
  ├── TOCExcerpt.tsx
  ├── SeminarTeaser.tsx
  └── EntryForm.tsx
```

---

### 4. ルーティング詳細・ナビゲーション
- グローバルナビ（PC）：`学べる内容(/school/kabu) | 開催スケジュール(/school/schedule) | 無料体験(/seminar) | 口コミ | FAQ | ログイン(/login)`
- フッター：`会社情報 | 特商法 | プライバシー | お問い合わせ`
- パンくず（任意）：`Home > School > 株式投資`

---

### 5. 外部連携・リンク方針
- `/seminar` が外部LPの場合：`rel="noopener noreferrer"`、`target="_blank"`
- `/login` は常に `https://mypage.f-academy.jp` へ 302 or 直リンクボタン
- `/school/schedule` のカードCTAは外部LP（開催別URL）へ遷移可

---

### 6. SEO/OGP/構造化
- ページごとに `title/description/og:image` を定義
- 構造化：`FAQPage`（/faqブロック）、`Course`（/school/kabu）、`Event`（/school/schedule）、`BreadcrumbList`（任意）
- 内部リンク：`/school/kabu ⇄ /seminar ⇄ /school/schedule` を相互に

---

### 7. エラーページとユーティリティ
- 404：主要導線（/seminar, /school/kabu）へ誘導
- 500：軽い案内＋トップへ戻るボタン
- 共通レイアウト：`<Header/> <Footer/> <CTAStickyBar spOnly/>`

---

### 8. テンプレ（最小コード骨子例）
```tsx
// pages/index.tsx
export default function Home() {
  return (
    <main className="mx-auto max-w-screen-lg px-4">
      <section id="hero" className="py-12">{/* <Hero/> */}</section>
      <section id="stats" className="py-12 border-t">{/* <Stats/> */}</section>
      <section id="benefits" className="py-12 border-t">{/* <BenefitGrid/> */}</section>
      <section id="curriculum" className="py-12 border-t">{/* <CurriculumDigest/> */}</section>
      <section id="lead" className="py-12 border-t">{/* <LeadStrip/> */}</section>
      <section id="reviews" className="py-12 border-t">{/* <ReviewList/> */}</section>
      <section id="faq" className="py-12 border-t">{/* <FAQAccordion/> */}</section>
      <section id="cta" className="py-12 border-t">{/* <FinalCTA/> */}</section>
    </main>
  )
}
```

---

### 9. 計測イベント命名（例）
- `pv_*`：`pv_home`, `pv_kabu`, `pv_schedule`
- `click_cta_*`：`click_cta_hero`, `click_cta_final`, `click_apply_schedule`
- `filter_*`：`filter_schedule_area`, `filter_schedule_online`
- `faq_*`：`faq_open`, `faq_close`

---

📌 出力条件
- 各ページの**セクション順**・**使うコンポーネント名**・**DOM骨子**を必ず明示
- 外部遷移は**ドメインと目的**を明記（`mypage.f-academy.jp` など）
- クエリパラメータ、イベント計測、SEOメタの最低限を含める
- Markdown＋表＋コード骨子で**実装前提の粒度**にする
