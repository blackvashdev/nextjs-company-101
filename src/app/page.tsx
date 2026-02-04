import Image from "next/image";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

const stats = [
  { label: "سازمان همکار", value: "۱۸۰+" },
  { label: "نقطه حضور منطقه‌ای", value: "۹" },
  { label: "آپ‌تایم تضمینی", value: "۹۹.۹٪" },
  { label: "پشتیبانی فعال", value: "۲۴/۷" },
  { label: "زمان پاسخ‌گویی", value: "< ۱۵ دقیقه" },
];

const services = [
  {
    title: "اتصال شعب و دفاتر",
    description:
      "شبکه پایدار بین شعب، نمایندگی‌ها و تیم‌های دورکار با مسیرهای از پیش تعریف‌شده.",
  },
  {
    title: "مدیریت ظرفیت",
    description:
      "پایش و توزیع بار برای ساعات پرترافیک، بدون نیاز به تغییرات پیچیده در زیرساخت.",
  },
  {
    title: "کنترل دسترسی",
    description:
      "تعریف سیاست‌های دسترسی، ثبت رخداد و گزارش‌های دوره‌ای مطابق نیاز سازمان.",
  },
];

export default function Home() {
  return (
    <div className="text-right">
      <SiteHeader />

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 pb-24">
        <section className="grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-center">
          <div className="flex flex-col gap-6">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#eff5f2] px-4 py-2 text-xs font-semibold text-[#1f6f5c]">
              زیرساخت ارتباطی سازمانی
              <span className="h-1.5 w-1.5 rounded-full bg-[#1f6f5c]" />
              قابل اتکا
            </span>
            <h1 className="text-4xl font-semibold leading-[1.45] text-[#141414] md:text-5xl">
              ارتباطات داخلی پایدار برای تیم‌هایی که به وقفه عادت ندارند.
            </h1>
            <p className="muted-text text-base">
              نواک ابر یک شبکه سازمانی آرام و قابل پیش‌بینی فراهم می‌کند؛ مسیرها
              مشخص‌اند، گزارش‌ها منظم‌اند و تیم فنی کمتر درگیر آتش‌نشانی می‌شود.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button className="rounded-full bg-[#1f6f5c] px-6 py-3 text-sm font-semibold text-[#f4f1ec] shadow-[0_18px_40px_rgba(31,111,92,0.22)] transition hover:bg-[#0d3f36]">
                درخواست ارزیابی اولیه
              </button>
              <button className="rounded-full border border-[#d6d1c7] px-6 py-3 text-sm font-semibold text-[#2f2f2f] transition hover:border-[#1f6f5c] hover:text-[#1f6f5c]">
                دریافت معرفی‌نامه
              </button>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-[#e2ded5] bg-[#f7f5f0] px-4 py-3 text-center shadow-sm"
                >
                  <p className="text-lg font-semibold text-[#151515]">
                    {stat.value}
                  </p>
                  <p className="text-xs text-[#5c5c5c]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="surface-card quiet-grid overflow-hidden rounded-[28px] p-6">
              <Image
                src="/images/hero.png"
                alt="فضای کاری سازمانی"
                width={1200}
                height={800}
                className="rounded-2xl"
                priority
              />
              <div className="mt-6 grid gap-3 md:grid-cols-2">
                <div className="rounded-2xl bg-white/80 p-4">
                  <p className="text-xs text-[#6a6a6a]">وضعیت لینک‌ها</p>
                  <p className="text-lg font-semibold text-[#1f6f5c]">
                    پایدار
                  </p>
                </div>
                <div className="rounded-2xl bg-white/80 p-4">
                  <p className="text-xs text-[#6a6a6a]">گزارش ماه جاری</p>
                  <p className="text-lg font-semibold text-[#151515]">
                    بدون اختلال عمده
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-12 -left-8 hidden h-32 w-32 rounded-full bg-[#f6c56f] opacity-60 blur-2xl md:block" />
          </div>
        </section>

        <section id="services" className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="surface-card rounded-3xl p-6"
            >
              <h3 className="text-lg font-semibold text-[#1a1a1a]">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#4d4d4d]">
                {service.description}
              </p>
              <button className="mt-6 text-sm font-semibold text-[#1f6f5c]">
                اطلاعات بیشتر
              </button>
            </div>
          ))}
        </section>

        <section className="rounded-[32px] border border-[#e1ddd4] bg-[#f7f5f0] p-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold text-[#1f6f5c]">
                مدیریت و انطباق
              </p>
              <h2 className="section-title">
                گزارش‌های ساده برای مدیران و تیم حقوقی.
              </h2>
            </div>
            <button className="w-fit rounded-full border border-[#1f6f5c] px-6 py-2 text-sm font-semibold text-[#1f6f5c] transition hover:bg-[#1f6f5c] hover:text-[#f4f1ec]">
              مشاهده مستندات
            </button>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              "ثبت وقایع و مسیرها",
              "پایش سلامت سرویس‌ها",
              "گزارش‌های دوره‌ای قابل ارائه",
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl bg-white p-6 shadow-[0_18px_40px_rgba(9,12,14,0.05)]"
              >
                <p className="text-sm font-semibold text-[#1b1b1b]">{item}</p>
                <p className="mt-3 text-sm leading-7 text-[#4d4d4d]">
                  تنظیمات شفاف، قابل پیگیری و بدون پیچیدگی اضافی.
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-8 md:grid-cols-[1fr_1.05fr]">
          <div className="surface-card rounded-3xl p-8">
            <p className="text-xs font-semibold text-[#1f6f5c]">
              تیم پشتیبانی
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-[#151515]">
              پاسخ‌گویی منظم برای رخدادهای حیاتی.
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#4d4d4d]">
              تیم عملیات شبکه به‌صورت شیفتی کنار شماست تا اختلال‌ها سریع‌تر رفع
              شوند و گزارش‌ها به موقع برسند.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {["ISO 27001", "SOC 2 Ready", "Audit Trails"].map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-[#d6d1c7] bg-[#f9f6ef] px-4 py-2 text-xs font-semibold text-[#2f2f2f]"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
          <div className="grid gap-6">
            <div className="rounded-3xl border border-[#e1ddd4] bg-[#eff5f2] p-6">
              <p className="text-xs font-semibold text-[#1f6f5c]">
                گزارش عملکرد
              </p>
              <h3 className="mt-3 text-lg font-semibold text-[#151515]">
                شاخص‌های روشن برای جلسات داخلی
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#4d4d4d]">
                داده‌های خلاصه و قابل ارائه برای مدیریت هزینه و ظرفیت.
              </p>
            </div>
            <div className="rounded-3xl border border-[#e1ddd4] bg-[#f9f6ef] p-6">
              <p className="text-xs font-semibold text-[#1f6f5c]">
                مدیریت ظرفیت
              </p>
              <h3 className="mt-3 text-lg font-semibold text-[#151515]">
                آماده‌سازی قبل از کمپین‌ها
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#4d4d4d]">
                بررسی دوره‌ای وضعیت لینک‌ها و مسیرهای پشتیبان.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-[36px] border border-[#1f6f5c] bg-[#0d3f36] p-10 text-[#f4f1ec]">
          <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div>
              <p className="text-xs font-semibold text-[#f6c56f]">
                شروع همکاری
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-[1.4]">
                یک جلسه کوتاه برای مرور وضعیت فعلی شبکه شما.
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#d9e6e0]">
                کافیست اطلاعات پایه را ارسال کنید تا تیم ما زمان‌بندی جلسه را
                هماهنگ کند.
              </p>
            </div>
            <div className="rounded-3xl bg-white/10 p-6">
              <div className="flex flex-col gap-4 text-sm">
                <div>
                  <p className="text-xs text-[#cde2da]">شماره تماس</p>
                  <p className="text-lg font-semibold">۰۲۱-۴۴۴۴-۹۹۰۰</p>
                </div>
                <div>
                  <p className="text-xs text-[#cde2da]">ایمیل</p>
                  <p className="text-lg font-semibold">hello@novac.cloud</p>
                </div>
                <div>
                  <p className="text-xs text-[#cde2da]">آدرس دفتر</p>
                  <p className="text-base">
                    تهران، خیابان فاطمی، پلاک ۷۸، طبقه ۴
                  </p>
                </div>
                <button className="mt-2 rounded-full bg-[#f6c56f] px-5 py-3 text-sm font-semibold text-[#3c2a05] transition hover:bg-[#f1b64a]">
                  رزرو جلسه مشاوره
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
