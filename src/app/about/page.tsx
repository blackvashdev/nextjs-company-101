import type { Metadata } from "next";
import Image from "next/image";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "درباره نواک ابر",
  description: "معرفی تیم و رویکرد نواک ابر در زیرساخت ارتباطی سازمانی.",
};

export default function AboutPage() {
  return (
    <div className="text-right">
      <SiteHeader />

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-24">
        <section className="grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-center">
          <div className="flex flex-col gap-5">
            <p className="text-xs font-semibold text-[#1f6f5c]">درباره نواک ابر</p>
            <h1 className="text-3xl font-semibold text-[#151515] md:text-4xl">
              یک تیم کوچک، با تمرکز روی پایداری ارتباطات سازمانی.
            </h1>
            <p className="muted-text text-sm">
              ما روی پروژه‌هایی کار می‌کنیم که کیفیت سرویس، گزارش‌دهی و مدیریت
              ظرفیت برایشان اهمیت دارد. هدف ما ساده است: کاهش هزینه‌های عملیاتی و
              جلوگیری از توقف‌های ناخواسته.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                { label: "سال تاسیس", value: "۱۳۹۷" },
                { label: "تعداد همکاران", value: "۴۵ نفر" },
                { label: "دفاتر فعال", value: "تهران، اصفهان" },
                { label: "پروژه‌های بلندمدت", value: "۶۲ پروژه" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-[#e1ddd4] bg-[#f7f5f0] px-4 py-3"
                >
                  <p className="text-xs text-[#6a6a6a]">{item.label}</p>
                  <p className="text-lg font-semibold text-[#151515]">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="surface-card overflow-hidden rounded-[28px] p-6">
            <Image
              src="/images/hero.png"
              alt="فضای داخلی شرکت"
              width={1200}
              height={800}
              className="rounded-2xl"
            />
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "پایداری",
              text: "معماری شبکه با تمرکز بر مسیرهای کم‌ریسک و قابل پایش.",
            },
            {
              title: "شفافیت",
              text: "گزارش‌های مرتب و قابل ارائه برای تیم‌های اجرایی و مدیریتی.",
            },
            {
              title: "همکاری طولانی‌مدت",
              text: "قراردادهای پشتیبانی با تمرکز بر کاهش ریسک عملیاتی.",
            },
          ].map((item) => (
            <div key={item.title} className="surface-card rounded-3xl p-6">
              <h3 className="text-lg font-semibold text-[#151515]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#4d4d4d]">
                {item.text}
              </p>
            </div>
          ))}
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
