"use client";

import { DUMMY_NEWS } from "@/dummy-news";
import { useRouter } from "next/navigation";

export default function InterceptedImagePage({ params }) {
  const router = useRouter();

  const newsItemSlug = params.slug;
  const newsItem = DUMMY_NEWS.find(
    (newsItem) => newsItem.slug === newsItemSlug
  );

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="modal-backdrop" onClick={router.back}>
      <dialog className="modal" open>
        <img src={`/images/news/${newsItem.image}`} />
      </dialog>
    </div>
  );
}
