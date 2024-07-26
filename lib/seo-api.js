import { configurations, getStrapiBaseUrl } from "@/lib/utils";
import qs from "qs";
export async function getHomePageSeo() {
  const apiUrl = getStrapiBaseUrl();
  const query = qs.stringify({
    populate: {
      seo: {
        populate: {
          metaImage: true,
          metaSocial: {
            populate: {
              image: true,
            },
          },
        },
      },
    },
    publicationState: "live",
    locale: ["en"],
  });

  const res = await fetch(
    `${apiUrl}/api/home-page?${query}`,

    configurations({ cache: "no-store" })
  );
  if (!res.ok) {
    throw new Error("Failed to fetch home page seo data");
  }

  return res.json();
}

/* ****************** Services Listing/Main page*************************/
export async function getServicesMainPageSeo() {
  const apiUrl = getStrapiBaseUrl();
  const query = qs.stringify({
    populate: {
      seo: {
        populate: {
          metaImage: true,
          metaSocial: {
            populate: {
              image: true,
            },
          },
        },
      },
    },
    publicationState: "live",
    locale: ["en"],
  });

  const res = await fetch(
    `${apiUrl}/api/service-page?${query}`,

    configurations({ cache: "no-store" })
  );
  if (!res.ok) {
    throw new Error("Failed to fetch service page seo data");
  }

  return res.json();
}
// services details page
export async function getServicesDetailsPageSeo(slug) {
  const apiUrl = getStrapiBaseUrl();
  const query = qs.stringify({
    populate: {
      seo: {
        populate: {
          metaImage: true,
          metaSocial: {
            populate: {
              image: true,
            },
          },
        },
      },
    },
    publicationState: "live",
    locale: ["en"],
  });

  const res = await fetch(
    `${apiUrl}/api/services/${slug}?${query}`,

    configurations({ cache: "no-store" })
  );
  if (!res.ok) {
    throw new Error("Failed to fetch service detail page seo data");
  }

  return res.json();
}
/* Get sectors deatils page seo */
export async function getSectorsDetailsPageSeo(slug) {
  const apiUrl = getStrapiBaseUrl();
  const query = qs.stringify({
    populate: {
      seo: {
        populate: {
          metaImage: true,
          metaSocial: {
            populate: {
              image: true,
            },
          },
        },
      },
    },
    publicationState: "live",
    locale: ["en"],
  });

  const res = await fetch(
    `${apiUrl}/api/sectors/${slug}?${query}`,
    configurations({ cache: "no-store" })
  );
  if (!res.ok) {
    throw new Error("Failed to fetch service detail page seo data");
  }

  return res.json();
}

export async function getMainPageSeoData(endpoint) {
  const apiUrl = getStrapiBaseUrl();
  const query = qs.stringify({
    populate: {
      seo: {
        populate: {
          metaImage: true,
          metaSocial: {
            populate: {
              image: true,
            },
          },
        },
      },
    },
    publicationState: "live",
    locale: ["en"],
  });

  const res = await fetch(
    `${apiUrl}/api/${endpoint}?${query}`,

    configurations({ cache: "no-store" })
  );
  if (!res.ok) {
    throw new Error(`Failed to fetch ${endpoint} seo data`);
  }

  return res.json();
}
