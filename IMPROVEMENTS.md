# Agrios — تقرير التحسينات الشامل

## ما تم تطبيقه في هذا التحديث

### Animations
| الملف | التعديل |
|-------|---------|
| `AboutIntro.tsx` | slideRight للصور، staggerContainer + fadeUp للنص |
| `TeamSection.tsx` | staggerCards + cardAnimation + whileHover |
| `TestimonialsSection.tsx` (about) | slideLeft/slideRight للكروت |
| `WhatWeDo.tsx` | slideRight للصورة، staggerContainer + cardAnimation للأيقونات |
| `PartnersStrip.tsx` | staggerContainer + fadeIn + whileHover grayscale |
| `ServicesCTA.tsx` | slideLeft للنص، scaleUp للزر |
| `Footer.tsx` | staggerContainer + fadeUp للـ 4 columns |
| `ProjectsSection.tsx` | استبدال Caveat مكرر بـ SectionHeader |

### SEO
| الملف | التعديل |
|-------|---------|
| `layout.tsx` | إصلاح JSON-LD (كان خارج الـ component) + twitter card + title template |
| `about/page.tsx` | canonical URL + openGraph image |
| `services/page.tsx` | canonical URL + openGraph image |
| `sitemap.ts` | إضافة services + contact + changeFrequency |
| `robots.ts` | disallow للـ api و admin، إضافة host |

### Performance
| الملف | التعديل |
|-------|---------|
| `page.tsx` | ssr:false للـ sections تحت الـ fold |
| `about/page.tsx` | dynamic import للـ Testimonials و Team |
| `services/page.tsx` | dynamic import للـ Video و ServicesTab |
| `globals.css` | prefers-reduced-motion + img max-width |

### Accessibility
| الملف | التعديل |
|-------|---------|
| `layout.tsx` | skip-to-content link |
| `page.tsx` | id="main-content" على الـ main |
| `about/page.tsx` | id="main-content" على الـ main |
| `services/page.tsx` | id="main-content" على الـ main |
| `globals.css` | focus-visible outline خضراء |

---

## توصيات إضافية — يجب تطبيقها قبل النشر

### 🔴 عالية الأولوية

#### 1. تحويل الصور من SVG إلى WebP
```
المشكلة: services-section-3.svg = 4.8MB — أكبر من موقع كامل
الحل: استخدم squoosh.app أو sharp لتحويل كل صور الـ public/
```

الأحجام المستهدفة:
- صور الـ hero: أقل من 200KB
- صور الـ services/projects/news: أقل من 100KB
- صور الـ testimonials/team: أقل من 50KB

**الخطوات:**
1. افتح [squoosh.app](https://squoosh.app)
2. ارفع كل صورة SVG
3. اختر WebP، جودة 80%
4. حمّلها واستبدل الملف القديم
5. غيّر extension في constants من `.svg` إلى `.webp`

---

#### 2. الفيديو (76MB محلي)
```
المشكلة: /videos/farm-background.mp4 بحجم 76MB يُحمل مع الصفحة
```

**الحلول (اختر واحدة):**

**أ — Cloudflare Stream (مجاني حتى 1000 دقيقة)**
```tsx
// بدل <video>، استخدم:
<iframe
  src="https://customer-xxx.cloudflarestream.com/VIDEO_ID/iframe"
  allow="accelerometer; autoplay; encrypted-media"
  className="w-full h-full"
/>
```

**ب — صورة ثابتة كـ background مع play button**
```tsx
// في VideoSection.tsx
// backgroundSrc يكون صورة WebP بدل mp4
// الفيديو يشتغل بس لو المستخدم ضغط Play
```

**ج — تحويل MP4 لـ WebM + ضغط**
```bash
ffmpeg -i farm-background.mp4 -c:v libvpx-vp9 -crf 33 -b:v 0 farm-background.webm
# النتيجة: من 76MB لـ ~5-8MB
```

---

#### 3. Next.js Config
```js
// انسخ next.config.recommended.js واستبدل next.config.js/ts
// يضيف: image optimization, security headers, caching
```

---

### 🟡 متوسطة الأولوية

#### 4. Features data — أخرجها لـ constants
```tsx
// حالياً في Features.tsx البيانات hardcoded:
const data = [
  { title: "Feature 01", subtitle: "We're using a new technology", image: "/section2-1.png" },
  ...
]

// الحل: أنشئ constants/home/Features.ts
export const FEATURES = [...]
```

#### 5. FooterBrand — استبدل `<img>` بـ `<Image>`
```tsx
// حالياً:
<img src="/logo-fotter.svg" alt="" />

// الصح:
<Image src="/logo-fotter.svg" alt="Agrios" width={140} height={42} />
// + أضف alt وصفي
```

#### 6. og:image — أنشئ صورة حقيقية
```
المطلوب: /public/images/og-image.jpg
الحجم: 1200 × 630 px
المحتوى: لوغو Agrios + خلفية زراعية + عنوان الموقع
الأهمية: يظهر لما تشارك الرابط على WhatsApp / Twitter / Facebook
```

#### 7. Services page — إضافة JSON-LD للـ services
```tsx
// في services/page.tsx أضف:
const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  provider: { "@type": "Organization", name: "Agrios" },
  serviceType: ["Agriculture Products", "Organic Products", "Fresh Vegetables", "Dairy Products"],
};
```

---

### 🟢 منخفضة الأولوية (تحسينات مستقبلية)

#### 8. Error Boundary
```tsx
// أنشئ src/app/error.tsx
"use client";
export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center">
        <h2>Something went wrong</h2>
        <button onClick={reset}>Try again</button>
      </div>
    </div>
  );
}
```

#### 9. Loading UI
```tsx
// أنشئ src/app/loading.tsx
export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#4BAF47] border-t-transparent" />
    </div>
  );
}
```

#### 10. Contact Page
```
مش موجودة في المشروع — يجب إنشاؤها
المحتوى: PageHero + ContactForm + Map + معلومات التواصل
```

#### 11. 404 Page
```tsx
// أنشئ src/app/not-found.tsx
export default function NotFound() {
  return (
    <main className="flex h-screen items-center justify-center text-center">
      <div>
        <h1 className="text-8xl font-bold text-[#4BAF47]">404</h1>
        <p className="mt-4 text-xl text-gray-600">Page not found</p>
        <Link href="/" className="mt-8 inline-block bg-[#4BAF47] text-white px-8 py-3 rounded-lg">
          Back to Home
        </Link>
      </div>
    </main>
  );
}
```

#### 12. Font Optimization
```tsx
// في layout.tsx، أضف display: "swap" لكل خط:
const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",  // ← مهم للـ Performance
  preload: true,
});
```

#### 13. Image Preloading للـ Hero
```tsx
// في Hero.tsx، الصورة الأولى تحتاج priority
<Image src={slide.image} alt={slide.alt} fill priority={index === 0} />
```

---

## الـ Lighthouse Score المتوقع بعد كل التحسينات

| المجال | قبل | بعد التطبيق الحالي | بعد كل التوصيات |
|--------|-----|---------------------|-----------------|
| Performance | ~30 | ~55 | ~85+ |
| SEO | ~70 | ~90 | ~100 |
| Best Practices | ~70 | ~85 | ~95 |
| Accessibility | ~60 | ~80 | ~95 |

---

## ترتيب التنفيذ المقترح

```
الأسبوع 1 (فوري):
✅ تطبيق ملفات هذا التحديث
□ تحويل الصور لـ WebP (squoosh.app)
□ نسخ next.config.recommended.js
□ إنشاء og:image

الأسبوع 2:
□ حل مشكلة الفيديو (Cloudflare Stream أو WebM)
□ إنشاء contact/page.tsx
□ إنشاء not-found.tsx
□ إنشاء error.tsx

الأسبوع 3:
□ إخراج Features data لـ constants
□ إصلاح FooterBrand img → Image
□ إضافة JSON-LD للـ services
□ Font display: swap
```
