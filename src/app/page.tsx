// import Image from "next/image";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import BlogCard from "@/components/BlogCard";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-5xl font-bold">
        Welcome to <a href="">This Blog Page!</a>
      </h1>
      <BlogCard />

    </div>
  );
}
