import qs from "qs";
import { configurations, getStrapiBaseUrl } from "./utils";

export async function getRodicSportsData() {
  const apiUrl = getStrapiBaseUrl();
  const query = qs.stringify({
    populate: {
      coverImage: true,
      block: {
        populate: {
          gallery: {
            populate: {
              imageVideo: true,
              videoThumbnail: true,
            },
          },
        },
      },
    },
  });
  const res = await fetch(
    `${apiUrl}/api/rodic-sport?${query}`,
    configurations({ cache: "no-store" })
  );

  if (!res.ok) {
    throw new Error("Failed to fetch rodic sports page data");
  }

  return res.json();
}
export async function getEmployeeEngagementData() {
  const apiUrl = getStrapiBaseUrl();
  const query = qs.stringify({
    populate: {
      coverImage: true,
      block: {
        populate: {
          gallery: {
            populate: {
              imageVideo: true,
              videoThumbnail: true,
            },
          },
        },
      },
    },
  });
  const res = await fetch(
    `${apiUrl}/api/employee-engagement?${query}`,
    configurations({ cache: "no-store" })
  );

  if (!res.ok) {
    throw new Error("Failed to fetch employee engagement page data");
  }

  return res.json();
}

export async function getEmployeeWelfareData() {
  const apiUrl = getStrapiBaseUrl();
  const query = qs.stringify({
    populate: {
      coverImage: true,
      block: {
        populate: {
          gallery: {
            populate: {
              imageVideo: true,
              videoThumbnail: true,
            },
          },
        },
      },
    },
  });
  const res = await fetch(
    `${apiUrl}/api/employee-welfare?${query}`,
    configurations({ cache: "no-store" })
  );

  if (!res.ok) {
    throw new Error("Failed to fetch employee welfare page data");
  }

  return res.json();
}

export async function getSiteSettings() {
  const apiUrl = getStrapiBaseUrl();
  const query = qs.stringify({
    // populate: {
    //   coverImage: true,
    //   block: {
    //     populate: {
    //       gallery: {
    //         populate: {
    //           imageVideo: true,
    //         },
    //       },
    //     },
    //   },
    // },
  });
  const res = await fetch(
    `${apiUrl}/api/site-setting?${query}`,
    configurations({ cache: "no-store" })
  );

  if (!res.ok) {
    throw new Error("Failed to fetch site settings  data");
  }

  return res.json();
}
