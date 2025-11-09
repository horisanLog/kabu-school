# 🧭 ステップ 6：ルーティング & ページ骨子（1 日）

あなたは Next.js + Tailwind の実装者兼 IA 設計者です。  
以下の要件をもとに、**ルーティング表・URL 設計・各ページの骨子（セクション順／主要コンポーネント／最低限の DOM 構造）** を作成してください。  
CMS は使いません。予約システムは LINE・電話・フォームの 3 つの導線を用意します。

---

## 🧠 入力情報

- 技術：Next.js 14（pages 構成でも可）、Tailwind、TypeScript
- CMS：使わない（静的 JSON）
- 端末：PC/SP（SP ファースト、下部固定予約 CTA）
- ルート一覧と目的：
  - `/` ：Hero, サロン特徴, メニュー概要, AI 診断紹介, お客様の声, スタッフ紹介, アクセス, 予約導線, FAQ
  - `/menu` ：メニュー・料金詳細（整体・エステ・電磁パルス・キャンペーン）
  - `/menu/[category]` ：カテゴリ別メニュー詳細（seitai, esthe, pulse, campaign）
  - `/ai-diagnosis` ：AI 姿勢診断の詳細説明・プロセス・事例
  - `/voice` ：お客様の声・体験談・ビフォーアフター
  - `/about` ：スタッフ・サロン紹介・設備・理念
  - `/reservation` ：予約フォーム・LINE 予約・電話予約
  - `/access` ：アクセス・営業時間・駐車場情報
  - `/blog` ：ブログ・コラム記事一覧
  - `/blog/[slug]` ：個別ブログ記事

---

## 🎯 出力フォーマット

### 1. ルーティング表（URL 戦略）

| パス | 目的 | 主 CTA | 外部遷移 | 備考 |
|-----|------|------|---------|-----|
| `/` | LP：認知→関心→信頼→予約 | LINE 予約・電話予約 | LINE アプリ | 固定 CTA(モバイル) |
| `/menu` | メニュー・料金一覧 | 各メニューの予約ボタン | なし | カテゴリ別タブ表示 |
| `/menu/[category]` | カテゴリ別詳細 | 予約・問い合わせ | なし | 動的ルーティング |
| `/ai-diagnosis` | AI 姿勢診断の詳細 | 体験予約 | なし | 科学的根拠・事例 |
| `/voice` | お客様の声・実績 | 予約導線 | なし | カテゴリ別絞り込み |
| `/about` | スタッフ・サロン紹介 | 予約・問い合わせ | なし | 安心感・信頼性向上 |
| `/reservation` | 予約フォーム | 予約完了 | LINE アプリ | 3 つの予約方法 |
| `/access` | アクセス・店舗情報 | 予約・電話 | Google マップ | 来店準備 |
| `/blog` | ブログ記事一覧 | 記事詳細・予約導線 | なし | カテゴリ・タグ絞り込み |
| `/blog/[slug]` | 個別記事詳細 | 予約・関連記事 | なし | 動的ルーティング |

---

### 2. ページ骨子（各ページのセクション順／主要コンポーネント）

> それぞれ **セクション順**・**DOM 骨子**・**使用コンポーネント**・**イベント計測** を具体化してください。

#### `/` トップ（LP）

- セクション順：Hero → サロン特徴 → メニュー概要 → AI 診断紹介 → お客様の声 → スタッフ紹介 → アクセス → 予約導線 → FAQ → 最終 CTA
- 主要コンポーネント：`<Hero/> <SalonFeatures/> <MenuOverview/> <AIDiagnosisIntro/> <CustomerVoices/> <StaffIntro/> <AccessInfo/> <ReservationCTA/> <FAQ/> <FinalCTA/> <ReservationStickyBar spOnly/>`
- DOM 骨子例：
  ```html
  <main>
    <section id="hero">...</section>
    <section id="features">...</section>
    <section id="menu-overview">...</section>
    <section id="ai-diagnosis">...</section>
    <section id="voices">...</section>
    <section id="staff">...</section>
    <section id="access">...</section>
    <section id="reservation">...</section>
    <section id="faq">...</section>
    <section id="final-cta">...</section>
  </main>
  ```
- 計測イベント：`click_cta_hero`, `click_line_reservation`, `click_phone_reservation`, `faq_open`

#### `/menu`

- セクション順：メニュー概要 → カテゴリタブ → 整体コース → エステコース → 電磁パルス → キャンペーン → 予約 CTA
- コンポーネント：`<MenuHero/> <CategoryTabs/> <ServiceGrid/> <PriceComparison/> <ReservationCTA/>`
- DOM 骨子例：
  ```html
  <main>
    <section id="menu-hero">...</section>
    <section id="category-tabs">...</section>
    <section id="services">...</section>
    <section id="price-comparison">...</section>
    <section id="reservation-cta">...</section>
  </main>
  ```

#### `/menu/[category]`

- セクション順：カテゴリ概要 → サービス詳細リスト → 施術の流れ → 料金表 → 予約 CTA
- コンポーネント：`<CategoryHero/> <ServiceDetails/> <TreatmentFlow/> <PricingTable/> <ReservationCTA/>`
- クエリ：`category: 'seitai' | 'esthe' | 'pulse' | 'campaign'`

#### `/ai-diagnosis`

- セクション順：AI 診断概要 → 診断プロセス → 科学的根拠 → ビフォーアフター事例 → 他サロンとの違い → 体験予約 CTA
- コンポーネント：`<AIDiagnosisHero/> <DiagnosisProcess/> <ScientificEvidence/> <BeforeAfterCases/> <CompetitiveAdvantage/> <ExperienceCTA/>`

#### `/voice`

- セクション順：お客様の声概要 → カテゴリ絞り込み → 体験談カードリスト → 統計・満足度 → 予約導線
- コンポーネント：`<VoiceHero/> <CategoryFilter/> <TestimonialGrid/> <SatisfactionStats/> <ReservationCTA/>`
- フィルタ：`?category=posture&age=30s&service=seitai`
- イベント：`filter_voice_category`, `click_testimonial_detail`

#### `/about`

- セクション順：サロン理念 → スタッフ紹介 → 保有資格・経験 → サロン内観・設備 → 安心への取り組み → 予約・問い合わせ
- コンポーネント：`<AboutHero/> <StaffProfiles/> <Qualifications/> <SalonTour/> <SafetyMeasures/> <ContactCTA/>`

#### `/reservation`

- セクション順：予約方法選択 → LINE 予約手順 → 電話予約案内 → フォーム予約 → 予約時の注意事項
- コンポーネント：`<ReservationHero/> <ReservationMethods/> <LineReservation/> <PhoneReservation/> <FormReservation/> <ReservationNotes/>`
- イベント：`click_line_reservation`, `click_phone_reservation`, `submit_form_reservation`

#### `/access`

- セクション順：アクセス概要 → Google マップ → 最寄り駅からの道順 → 駐車場情報 → 営業時間・定休日 → 予約・問い合わせ
- コンポーネント：`<AccessHero/> <GoogleMap/> <Directions/> <ParkingInfo/> <BusinessHours/> <ContactCTA/>`

#### `/blog`

- セクション順：ブログ概要 → カテゴリ・タグ絞り込み → 記事カードリスト → ページネーション → 人気記事
- コンポーネント：`<BlogHero/> <BlogFilter/> <ArticleGrid/> <Pagination/> <PopularArticles/>`
- フィルタ：`?category=posture&tag=selfcare&page=1`

#### `/blog/[slug]`

- セクション順：記事ヘッダー → 記事本文 → 関連記事 → 予約導線 → コメント（将来拡張）
- コンポーネント：`<ArticleHeader/> <ArticleContent/> <RelatedArticles/> <ReservationCTA/>`
- クエリ：`slug: string`

---

### 3. Next.js 実装構成（pages 構成例）

```
/pages
├── index.tsx
├── menu/
│   ├── index.tsx
│   └── [category].tsx
├── ai-diagnosis.tsx
├── voice.tsx
├── about.tsx
├── reservation.tsx
├── access.tsx
├── blog/
│   ├── index.tsx
│   └── [slug].tsx
└── 404.tsx

/components
├── layout/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Navigation.tsx
│   └── ReservationStickyBar.tsx
├── home/
│   ├── Hero.tsx
│   ├── SalonFeatures.tsx
│   ├── MenuOverview.tsx
│   ├── AIDiagnosisIntro.tsx
│   ├── CustomerVoices.tsx
│   ├── StaffIntro.tsx
│   └── AccessInfo.tsx
├── menu/
│   ├── MenuHero.tsx
│   ├── CategoryTabs.tsx
│   ├── ServiceGrid.tsx
│   ├── ServiceDetails.tsx
│   ├── PriceComparison.tsx
│   └── TreatmentFlow.tsx
├── ai-diagnosis/
│   ├── AIDiagnosisHero.tsx
│   ├── DiagnosisProcess.tsx
│   ├── ScientificEvidence.tsx
│   ├── BeforeAfterCases.tsx
│   └── CompetitiveAdvantage.tsx
├── voice/
│   ├── VoiceHero.tsx
│   ├── CategoryFilter.tsx
│   ├── TestimonialGrid.tsx
│   └── SatisfactionStats.tsx
├── about/
│   ├── AboutHero.tsx
│   ├── StaffProfiles.tsx
│   ├── Qualifications.tsx
│   ├── SalonTour.tsx
│   └── SafetyMeasures.tsx
├── reservation/
│   ├── ReservationHero.tsx
│   ├── ReservationMethods.tsx
│   ├── LineReservation.tsx
│   ├── PhoneReservation.tsx
│   ├── FormReservation.tsx
│   └── ReservationNotes.tsx
├── access/
│   ├── AccessHero.tsx
│   ├── GoogleMap.tsx
│   ├── Directions.tsx
│   ├── ParkingInfo.tsx
│   └── BusinessHours.tsx
├── blog/
│   ├── BlogHero.tsx
│   ├── BlogFilter.tsx
│   ├── ArticleGrid.tsx
│   ├── ArticleHeader.tsx
│   ├── ArticleContent.tsx
│   ├── RelatedArticles.tsx
│   └── PopularArticles.tsx
├── common/
│   ├── FAQ.tsx
│   ├── ReservationCTA.tsx
│   ├── ContactCTA.tsx
│   ├── FinalCTA.tsx
│   └── Pagination.tsx
└── ui/
    ├── Button.tsx
    ├── Card.tsx
    ├── Modal.tsx
    └── Loading.tsx
```

---

### 4. ルーティング詳細・ナビゲーション

- グローバルナビ（PC）：`メニュー・料金(/menu) | AI 姿勢診断(/ai-diagnosis) | お客様の声(/voice) | サロン紹介(/about) | アクセス(/access) | 予約(/reservation)`
- フッター：`サロン概要(/about) | メニュー(/menu) | ブログ(/blog) | プライバシーポリシー | 利用規約 | お問い合わせ`
- パンくず：`Home > Menu > 整体コース` / `Home > Blog > 姿勢改善`
- SP ナビ：ハンバーガーメニュー + 下部固定予約バー

---

### 5. 外部連携・リンク方針

- LINE 予約：`line://` スキーム（アプリ起動）+ Web 版フォールバック
- 電話予約：`tel:048-123-4567`（タップで発信）
- Google マップ：`https://maps.google.com/...`（アプリ起動）
- Instagram：`https://instagram.com/ym_salon`（`rel="noopener noreferrer"`）
- 予約完了後：LINE 友だち登録促進

---

### 6. SEO/OGP/構造化

- ページごとに `title/description/og:image` を定義
- 構造化：`LocalBusiness`（/）、`Service`（/menu）、`FAQPage`（FAQ ブロック）、`Review`（/voice）、`Article`（/blog/[slug]）
- 内部リンク：`/ ⇄ /menu ⇄ /ai-diagnosis ⇄ /reservation` を相互に
- ローカル SEO：地域名（戸田市、蕨市、さいたま市南部）を自然に配置
- サイトマップ：全ページ + ブログ記事の動的生成

---

### 7. エラーページとユーティリティ

- 404：主要導線（/reservation, /menu, /ai-diagnosis）へ誘導
- 500：軽い案内＋トップへ戻るボタン
- 共通レイアウト：`<Header/> <Footer/> <ReservationStickyBar spOnly/>`
- Loading 状態：ブログ記事読み込み時のスケルトン表示

---

### 8. テンプレ（最小コード骨子例）

```tsx
// pages/index.tsx
import { Service, Review, Staff, SalonInfo } from '@/types'
import services from '@/data/services.json'
import reviews from '@/data/reviews.json'
import staff from '@/data/staff.json'
import salonInfo from '@/data/salon-info.json'

export default function Home() {
  return (
    <main className="mx-auto max-w-screen-xl">
      <section id="hero" className="py-8 md:py-12">
        {/* <Hero salonInfo={salonInfo} /> */}
      </section>
      <section id="features" className="py-8 md:py-12 bg-gray-50">
        {/* <SalonFeatures /> */}
      </section>
      <section id="menu-overview" className="py-8 md:py-12">
        {/* <MenuOverview services={services.slice(0, 4)} /> */}
      </section>
      <section id="ai-diagnosis" className="py-8 md:py-12 bg-green-50">
        {/* <AIDiagnosisIntro /> */}
      </section>
      <section id="voices" className="py-8 md:py-12">
        {/* <CustomerVoices reviews={reviews.slice(0, 6)} /> */}
      </section>
      <section id="staff" className="py-8 md:py-12 bg-gray-50">
        {/* <StaffIntro staff={staff} /> */}
      </section>
      <section id="access" className="py-8 md:py-12">
        {/* <AccessInfo salonInfo={salonInfo} /> */}
      </section>
      <section id="reservation" className="py-8 md:py-12 bg-green-50">
        {/* <ReservationCTA /> */}
      </section>
      <section id="faq" className="py-8 md:py-12">
        {/* <FAQ /> */}
      </section>
      <section id="final-cta" className="py-8 md:py-12 bg-green-500 text-white">
        {/* <FinalCTA /> */}
      </section>
    </main>
  )
}
```

```tsx
// pages/menu/[category].tsx
import { GetStaticProps, GetStaticPaths } from 'next'
import { Service } from '@/types'
import services from '@/data/services.json'

type Props = {
  category: string
  services: Service[]
}

export default function CategoryPage({ category, services }: Props) {
  return (
    <main className="mx-auto max-w-screen-xl px-4">
      <section id="category-hero" className="py-8">
        {/* <CategoryHero category={category} /> */}
      </section>
      <section id="services" className="py-8">
        {/* <ServiceDetails services={services} /> */}
      </section>
      <section id="treatment-flow" className="py-8 bg-gray-50">
        {/* <TreatmentFlow /> */}
      </section>
      <section id="pricing" className="py-8">
        {/* <PricingTable services={services} /> */}
      </section>
      <section id="reservation-cta" className="py-8 bg-green-50">
        {/* <ReservationCTA /> */}
      </section>
    </main>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = ['seitai', 'esthe', 'pulse', 'campaign']
  const paths = categories.map((category) => ({
    params: { category },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const category = params?.category as string
  const categoryServices = services.filter(s => s.category === category)

  return {
    props: {
      category,
      services: categoryServices,
    },
  }
}
```

---

### 9. 計測イベント命名（例）

- `pv_*`：`pv_home`, `pv_menu`, `pv_ai_diagnosis`, `pv_voice`, `pv_reservation`
- `click_cta_*`：`click_cta_hero`, `click_line_reservation`, `click_phone_reservation`, `click_menu_reservation`
- `filter_*`：`filter_voice_category`, `filter_blog_category`, `filter_menu_category`
- `engagement_*`：`faq_open`, `testimonial_expand`, `staff_profile_view`
- `conversion_*`：`reservation_form_submit`, `line_friend_add`, `phone_call_initiate`

---

### 10. 地域密着型サロン特有の設計

#### ローカル SEO 対応
- URL に地域名は含めず、コンテンツ内で自然に配置
- `/access` ページで詳細な地域情報を提供
- 構造化データで `LocalBusiness` を適切に設定

#### 来店促進機能
- `/access` ページで詳細な道順・駐車場情報
- Google マップ連携で現在地からのルート案内
- 営業時間・定休日のリアルタイム表示

#### 地域コミュニティ連携
- `/blog` で地域イベント・健康情報を発信
- 近隣店舗との連携情報
- 地域密着型のコンテンツマーケティング

---

### 11. プレオープン戦略対応

#### 限定性・緊急性の表現
- 全ページに期間限定バナー表示
- `/menu` で特別価格の強調表示
- カウントダウンタイマー（JavaScript）

#### 体験ハードル軽減
- `/reservation` で初回限定価格を強調
- 無料相談・カウンセリングの案内
- 「お試し」「体験」の文言を多用

---

### 12. モバイル最適化

#### タッチ操作最適化
- 44px 以上のタップ領域確保
- スワイプ対応（お客様の声、メニューカード）
- 固定予約バーの誤タップ防止

#### 表示最適化
- 画像の遅延読み込み（`loading="lazy"`）
- フォントサイズ 16px 以上（ズーム防止）
- 十分な余白・行間の確保

---

📌 出力条件

- 各ページの**セクション順**・**使うコンポーネント名**・**DOM 骨子**を必ず明示
- 外部遷移は**URL と目的**を明記（LINE アプリ、Google マップなど）
- クエリパラメータ、イベント計測、SEO メタの最低限を含める
- 整体サロン特有の機能（予約システム、地域密着、プレオープン戦略）を反映
- Markdown＋表＋コード骨子で**実装前提の粒度**にする
- 地域密着型ビジネス・モバイルファーストの特性を考慮
