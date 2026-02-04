import type { Metadata } from "next";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "تماس با نواک ابر",
  description: "اطلاعات تماس و هماهنگی جلسه با نواک ابر.",
};

export default function ContactPage() {
  return (
    <div className="text-right">
      <SiteHeader />

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 pb-24">
        <section className="surface-card rounded-[28px] p-10">
          <p className="text-xs font-semibold text-[#1f6f5c]">تماس با ما</p>
          <h1 className="mt-3 text-3xl font-semibold text-[#151515]">
            برای هماهنگی جلسه یا دریافت اطلاعات بیشتر در تماس باشید.
          </h1>
          <p className="muted-text mt-4 text-sm">
            تیم پشتیبانی در روزهای کاری پاسخ‌گو است و در رخدادهای اضطراری، مسیر
            ارتباطی فوری فعال می‌شود.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <div className="surface-card rounded-3xl p-6">
            <h2 className="text-lg font-semibold text-[#151515]">
              اطلاعات تماس
            </h2>
            <div className="mt-4 grid gap-4 text-sm">
              <div>
                <p className="text-xs text-[#6a6a6a]">تلفن</p>
                <p className="text-base font-semibold">۰۲۱-۴۴۴۴-۹۹۰۰</p>
              </div>
              <div>
                <p className="text-xs text-[#6a6a6a]">ایمیل</p>
                <p className="text-base font-semibold">hello@novac.cloud</p>
              </div>
              <div>
                <p className="text-xs text-[#6a6a6a]">نشانی</p>
                <p className="text-base">
                  تهران، خیابان فاطمی، پلاک ۷۸، طبقه ۴
                </p>
              </div>
              <div>
                <p className="text-xs text-[#6a6a6a]">ساعات پاسخ‌گویی</p>
                <p className="text-base">شنبه تا چهارشنبه، ۹ تا ۱۸</p>
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-[#e1ddd4] bg-[#f7f5f0] p-6">
            <h2 className="text-lg font-semibold text-[#151515]">
              فرم درخواست جلسه
            </h2>
            <div className="mt-4 grid gap-3 text-sm text-[#4d4d4d]">
              <div>
                <p className="text-xs text-[#6a6a6a]">نام سازمان</p>
                <div className="mt-2 h-10 rounded-xl border border-[#d6d1c7] bg-white" />
              </div>
              <div>
                <p className="text-xs text-[#6a6a6a]">نام و نام خانوادگی</p>
                <div className="mt-2 h-10 rounded-xl border border-[#d6d1c7] bg-white" />
              </div>
              <div>
                <p className="text-xs text-[#6a6a6a]">شماره تماس</p>
                <div className="mt-2 h-10 rounded-xl border border-[#d6d1c7] bg-white" />
              </div>
              <button className="mt-2 rounded-full bg-[#1f6f5c] px-5 py-3 text-sm font-semibold text-[#f4f1ec] transition hover:bg-[#0d3f36]">
                ثبت درخواست
              </button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
