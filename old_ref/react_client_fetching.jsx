"use client";

import NewsList from "@/components/news-list";
import { useEffect, useState } from "react";

export default function NewsPage() {
  const [news, setNews] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchNews() {
      setIsLoading(true);
      const response = await fetch('http://localhost:8080/news');

      if (!response.ok) {
        setError("Couldn't fetch news");
        setIsLoading(false);
      }

      const news = await response.json();
      setIsLoading(false);
      setNews(news);
    }

    fetchNews();
  }, [])

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  let newsContent;

  if (news) {
    newsContent = <NewsList news={news} />;
  }


  return (
    <div>
      <h1>News Page</h1>
      {newsContent}
    </div>
  );
}
