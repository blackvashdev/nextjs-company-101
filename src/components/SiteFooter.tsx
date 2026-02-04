export default function SiteFooter() {
  return (
    <footer className="border-t border-[#e1ddd4] bg-[#f7f5f0]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold text-[#151515]">نواک ابر</p>
          <p className="mt-2 text-xs text-[#6a6a6a]">
            زیرساخت ارتباطی پایدار برای سازمان‌های آینده‌نگر.
          </p>
        </div>
        <div className="flex flex-wrap gap-6 text-xs text-[#4d4d4d]">
          <span>حریم خصوصی</span>
          <span>شرایط استفاده</span>
          <span>مرکز پشتیبانی</span>
        </div>
        <div className="text-xs text-[#4d4d4d]">
          © 2026 Novac Cloud. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
