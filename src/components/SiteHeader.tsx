import Image from "next/image";
import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 pb-8 pt-10">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#e1ddd4] bg-[#f4f1ec] shadow-[0_10px_30px_rgba(13,63,54,0.12)]">
          <Image
            src="/images/logo.png"
            alt="لوگوی نواک ابر"
            width={36}
            height={36}
            priority
          />
        </div>
        <div>
          <p className="text-base font-semibold text-[#151515]">
            نواک ابر
          </p>
          <p className="text-xs text-[#4b4b4b]">زیرساخت ارتباطی سازمانی</p>
        </div>
      </div>
      <nav className="hidden items-center gap-8 text-sm font-medium text-[#2c2c2c] md:flex">
        <Link href="/" className="hover:text-[#1f6f5c]">
          خانه
        </Link>
        <Link href="/about" className="hover:text-[#1f6f5c]">
          درباره ما
        </Link>
        <Link href="/contact" className="hover:text-[#1f6f5c]">
          تماس
        </Link>
      </nav>
      <div className="hidden md:flex">
        <button className="rounded-full border border-[#1f6f5c] px-5 py-2 text-sm font-semibold text-[#1f6f5c] transition hover:bg-[#1f6f5c] hover:text-[#f4f1ec]">
          درخواست جلسه
        </button>
      </div>
    </header>
  );
}
