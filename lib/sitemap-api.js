import { configurations, getStrapiBaseUrl } from "@/lib/utils";
import qs from "qs";
export async function getSitemapServices() {
  const apiUrl = getStrapiBaseUrl();
  const query = qs.stringify({
    sort: ["id:asc"],
    fields: ["slug"],
    publicationState: "live",
    locale: ["en"],
  });

  const res = await fetch(
    `${apiUrl}/api/services?${query}`,

    configurations({ cache: "no-store" })
  );
  if (!res.ok) {
    throw new Error("Failed to fetch about page data");
  }

  return res.json();
}
export async function getSitemapSectors() {
  const apiUrl = getStrapiBaseUrl();
  const query = qs.stringify({
    sort: ["id:asc"],
    fields: ["slug"],
    publicationState: "live",
    locale: ["en"],
  });

  const res = await fetch(
    `${apiUrl}/api/sectors?${query}`,

    configurations({ cache: "no-store" })
  );
  if (!res.ok) {
    throw new Error("Failed to fetch about page data");
  }

  return res.json();
}

export async function getSitemapCaseStudies() {
  const apiUrl = getStrapiBaseUrl();
  const query = qs.stringify({
    sort: ["id:asc"],
    fields: ["slug"],
    publicationState: "live",
    locale: ["en"],
  });

  const res = await fetch(
    `${apiUrl}/api/case-studies?${query}`,

    configurations({ cache: "no-store" })
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data for case studies");
  }

  return res.json();
}

/********************** Blog sitemap************************** */
export async function getSitemapBlogs() {
  const apiUrl = getStrapiBaseUrl();
  const query = qs.stringify({
    sort: ["id:asc"],
    fields: ["slug"],
    publicationState: "live",
    locale: ["en"],
  });

  const res = await fetch(
    `${apiUrl}/api/blogs?${query}`,

    configurations({ cache: "no-store" })
  );
  if (!res.ok) {
    throw new Error("Failed to fetch blog data for sitemap");
  }

  return res.json();
}
