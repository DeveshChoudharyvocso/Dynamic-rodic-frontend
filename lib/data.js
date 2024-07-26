import qs from "qs";
import { configurations, getStrapiBaseUrl } from "./utils";

export async function getAPIDataDynamic(slug) {
  if (!slug) return;
  console.log("slugg value>>>>>", slug);
  const apiUrl = getStrapiBaseUrl();
  const query = qs.stringify({
    filters: {
      slug: {
        $eq: slug,
      },
    },
    populate: {
      Block: {
        populate: {
          services: {
            populate: {
              coverImage: true,
              image: true,
            },
          },
        },
      },
    },
    pagination: {
      pageSize: 10,
      page: 1,
    },
    publicationState: "live",
    locale: ["en"],
  });
  const res = await fetch(
    `${apiUrl}/api/pages?${query}`,
    configurations({ cache: "no-store" })
  );

  if (!res.ok) {
    throw new Error("Failed to fetch home page data Dynamically.");
  }

  return res.json();
}

// export async function getAPIDataDynamic(slug) {
//   const apiUrl = getStrapiBaseUrl();

//   // Prepare the base query object
//   const baseQuery = {
//     populate: {
//       Block: {
//         populate: {
//           alternateContentBlock: true,
//           Slider: {
//             populate: {
//               image: true,
//             },
//           },
//         },
//       },

//       DiscoverRodic: {
//         populate: {
//           image: true,
//           button: true,
//         },
//       },
//       Stats: {
//         populate: {
//           icon: true,
//         },
//       },
//       services: {
//         populate: {
//           services: {
//             populate: {
//               homePageImage: true,
//               icon: true,
//             },
//           },
//           button: true,
//         },
//       },
//       insights: {
//         populate: {
//           blogs: {
//             populate: {
//               coverImage: true,
//               blog_category: {
//                 fields: ["name", "slug"],
//               },
//             },
//           },
//           button: true,
//         },
//       },
//       career: {
//         populate: {
//           primary: true,
//           secondary: true,
//           image: true,
//           Gallery: {
//             populate: {
//               image: true,
//             },
//           },
//         },
//       },
//       caseStudies: {
//         populate: {
//           caseStudies: {
//             populate: {
//               coverImage: true,
//               overview: {
//                 populate: {
//                   sectors: {
//                     fields: ["heading"],
//                     populate: {
//                       icon: true,
//                     },
//                   },
//                 },
//               },
//             },
//           },
//           button: true,
//         },
//       },
//       sectorsWeSpecializedIn: {
//         populate: {
//           sectors: {
//             populate: {
//               homePageImage: true,
//               icon: true,
//             },
//           },
//           button: true,
//         },
//       },
//       Leadership: {
//         populate: {
//           leaderships: {
//             populate: {
//               image: true,
//             },
//           },
//           button: true,
//         },
//       },
//       GetInTouch: {
//         populate: {
//           button: true,
//         },
//       },
//       videos: {
//         populate: {
//           video: true,
//           thumbnail: true,
//         },
//       },
//       Footer: {
//         populate: {
//           socialMediaProfile: {
//             populate: {
//               icon: true,
//             },
//           },
//           client_and_partners: {
//             populate: {
//               image: true,
//             },
//           },
//         },
//       },
//     },
//     pagination: { pageSize: 10, page: 1 },
//     publicationState: "live",
//     locale: ["en"],
//   };

//   let query;

//   if (slug) {
//     // If slug is provided, filter data based on slug
//     query = qs.stringify({
//       filter: { slug: { $eq: slug } },
//       ...baseQuery,
//     });
//   } else {
//     // If no slug provided, assume it's home page data
//     query = qs.stringify({
//       filter: { isHomePage: true }, // Assuming isHomePage is a field that indicates homepage data
//       ...baseQuery,
//     });
//   }

//   const res = await fetch(
//     `${apiUrl}/api/pages?${query}`,
//     configurations({ cache: "no-store" })
//   );

//   if (!res.ok) {
//     throw new Error("Failed to fetch page data dynamically.");
//   }

//   return res.json();
// }

// ----------Dynamic Function End Here------------------------

export async function getAPIData() {
  const apiUrl = getStrapiBaseUrl();
  const query = qs.stringify({
    populate: {
      heroSection: {
        populate: {
          image: true,
        },
      },
      DiscoverRodic: {
        populate: {
          image: true,
          button: true,
        },
      },
      Stats: {
        populate: {
          icon: true,
        },
      },
      services: {
        populate: {
          services: {
            populate: {
              homePageImage: true,
              icon: true,
            },
          },
          button: true,
        },
      },
      insights: {
        populate: {
          blogs: {
            populate: {
              coverImage: true,
              blog_category: {
                fields: ["name", "slug"],
              },
            },
          },
          button: true,
        },
      },
      career: {
        populate: {
          primary: true,
          secondary: true,
          image: true,
          Gallery: {
            populate: {
              image: true,
            },
          },
        },
      },
      caseStudies: {
        populate: {
          caseStudies: {
            populate: {
              coverImage: true,
              overview: {
                populate: {
                  sectors: {
                    fields: ["heading"],
                    populate: {
                      icon: true,
                    },
                  },
                },
              },
            },
          },
          button: true,
        },
      },
      sectorsWeSpecializedIn: {
        populate: {
          sectors: {
            populate: {
              homePageImage: true,
              icon: true,
            },
          },
          button: true,
        },
      },
      Leadership: {
        populate: {
          leaderships: {
            populate: {
              image: true,
            },
          },
          button: true,
        },
      },
      GetInTouch: {
        populate: {
          button: true,
        },
      },
      videos: {
        populate: {
          video: true,
          thumbnail: true,
        },
      },
      Footer: {
        populate: {
          socialMediaProfile: {
            populate: {
              icon: true,
            },
          },
          client_and_partners: {
            populate: {
              image: true,
            },
          },
        },
      },
    },
    pagination: {
      pageSize: 10,
      page: 1,
    },
    publicationState: "live",
    locale: ["en"],
  });
  const res = await fetch(
    `${apiUrl}/api/pages?${query}`,
    configurations({ cache: "no-store" })
  );

  if (!res.ok) {
    throw new Error("Failed to fetch home page data");
  }

  return res.json();
}

export async function getData() {
  const apiUrl = getStrapiBaseUrl();
  const query = qs.stringify({
    populate: {
      heroSection: {
        populate: {
          image: true,
        },
      },
      DiscoverRodic: {
        populate: {
          image: true,
          button: true,
        },
      },
      Stats: {
        populate: {
          icon: true,
        },
      },
      services: {
        populate: {
          services: {
            populate: {
              homePageImage: true,
              icon: true,
            },
          },
          button: true,
        },
      },
      insights: {
        populate: {
          blogs: {
            populate: {
              coverImage: true,
              blog_category: {
                fields: ["name", "slug"],
              },
            },
          },
          button: true,
        },
      },
      career: {
        populate: {
          primary: true,
          secondary: true,
          image: true,
          Gallery: {
            populate: {
              image: true,
            },
          },
        },
      },
      caseStudies: {
        populate: {
          caseStudies: {
            populate: {
              coverImage: true,
              overview: {
                populate: {
                  sectors: {
                    fields: ["heading"],
                    populate: {
                      icon: true,
                    },
                  },
                },
              },
            },
          },
          button: true,
        },
      },
      sectorsWeSpecializedIn: {
        populate: {
          sectors: {
            populate: {
              homePageImage: true,
              icon: true,
            },
          },
          button: true,
        },
      },
      Leadership: {
        populate: {
          leaderships: {
            populate: {
              image: true,
            },
          },
          button: true,
        },
      },
      GetInTouch: {
        populate: {
          button: true,
        },
      },
      videos: {
        populate: {
          video: true,
          thumbnail: true,
        },
      },
      Footer: {
        populate: {
          socialMediaProfile: {
            populate: {
              icon: true,
            },
          },
          client_and_partners: {
            populate: {
              image: true,
            },
          },
        },
      },
    },
    pagination: {
      pageSize: 10,
      page: 1,
    },
    publicationState: "live",
    locale: ["en"],
  });
  const res = await fetch(
    `${apiUrl}/api/home-page?${query}`,
    configurations({ cache: "no-store" })
  );

  if (!res.ok) {
    throw new Error("Failed to fetch home page data");
  }

  return res.json();
}

// get LeaderShip data
export async function getLeadershipPage() {
  const apiUrl = getStrapiBaseUrl();
  const query = qs.stringify({
    populate: {
      coverImage: true,
      Leadership: {
        populate: {
          team_category: true,
          teams: {
            populate: {
              teams: {
                populate: {
                  image: true,
                  leadership: {
                    populate: {
                      image: true,
                    },
                  },
                },
              },
            },
          },
        },
      },
      contentBlock: {
        populate: {
          image: true,
        },
      },
    },

    pagination: {
      pageSize: 10,
      page: 1,
    },
    publicationState: "live",
    locale: ["en"],
  });
  const res = await fetch(
    `${apiUrl}/api/leadership-page?${query}`,
    configurations({ cache: "no-store" })
  );

  if (!res.ok) {
    throw new Error("Failed to fetch Leadership page data");
  }

  return res.json();
}

// get award page data
export async function getAwardPage() {
  const apiUrl = getStrapiBaseUrl();
  const query = qs.stringify({
    populate: {
      contentBlock: {
        populate: {
          image: true,
        },
      },
      coverImage: true,
      button: true,
    },
    pagination: {
      pageSize: 10,
      page: 1,
    },
    publicationState: "live",
    locale: ["en"],
  });
  const res = await fetch(
    `${apiUrl}/api/awards-recognition?${query}`,
    configurations({ cache: "no-store" })
  );

  if (!res.ok) {
    throw new Error("Failed to fetch about page data");
  }

  return res.json();
}

// get about page data
export async function getAboutPage() {
  const apiUrl = getStrapiBaseUrl();
  const query = qs.stringify({
    populate: {
      mainContentBlock: {
        populate: {
          image: true,
        },
      },
      contentBlock: {
        populate: {
          image: true,
        },
      },

      coverImage: true,
      button: true,
    },
    publicationState: "live",
    locale: ["en"],
  });
  const res = await fetch(
    `${apiUrl}/api/about-us?${query}`,
    configurations({ cache: "no-store" })
  );

  if (!res.ok) {
    throw new Error("Failed to fetch about page data");
  }

  return res.json();
}

// Contact-us  Page
export async function getContactPage() {
  const apiUrl = getStrapiBaseUrl();
  const query = qs.stringify({
    populate: {
      coverImage: true,
      address: true,
      corporateOffice: {
        populate: {
          address: true,
        },
      },
      image: true,
      button: true,
    },
    pagination: {
      pageSize: 10,
      page: 1,
    },
    publicationState: "live",
    locale: ["en"],
  });
  const res = await fetch(
    `${apiUrl}/api/contact?${query}`,
    configurations({ cache: "no-store" })
  );

  if (!res.ok) {
    throw new Error("Failed to fetch about page data");
  }

  return res.json();
}

// display main navigaton

export async function displayMainNavigation() {
  const apiUrl = getStrapiBaseUrl();
  const res = await fetch(`${apiUrl}/api/navigation/render/main-navigation`, {
    cache: "no-store",
  });
  // if (!res.ok) {
  //   throw new Error("Failed to fetch about page data");
  // }
  return res.json();
}

// Blog Main Page
export async function getBlogBanner() {
  const apiUrl = getStrapiBaseUrl();
  const query = qs.stringify({
    populate: {
      coverImage: true,
    },
    publicationState: "live",
    locale: ["en"],
  });
  const res = await fetch(
    `${apiUrl}/api/blog-page?${query}`,
    configurations({ cache: "no-store" })
  );

  if (!res.ok) {
    throw new Error("Failed to fetch about page data");
  }

  return res.json();
}

// Blog sub Pages
export async function getSingleBlog(slug) {
  const apiUrl = getStrapiBaseUrl();
  const query = qs.stringify({
    populate: {
      coverImage: true,
    },
    publicationState: "live",
    locale: ["en"],
  });

  const res = await fetch(
    `${apiUrl}/api/blogs/${slug}?${query}`,

    configurations({ cache: "no-store" })
  );
  if (!res.ok) {
    throw new Error("Failed to fetch Blog single page data");
  }

  return res.json();
}

export async function getBlogListing(searchQuery) {
  const apiUrl = getStrapiBaseUrl();
  const query = qs.stringify({
    sort: ["createdAt:desc"],
    filters: {
      blog_category: {
        slug: {
          $eq: searchQuery?.q || "news",
        },
      },
    },
    populate: {
      coverImage: true,
      blog_category: true,
    },

    pagination: {
      pageSize: 10,
      page: 1,
    },
    publicationState: "live",
    locale: ["en"],
  });
  const res = await fetch(
    `${apiUrl}/api/blogs?${query}`,
    configurations({ cache: "no-store" })
  );

  if (!res.ok) {
    throw new Error("Failed to fetch about page data");
  }

  return res.json();
}
// --------------------------------Case Study Pages--------------------------------
// case-study Main Page

export async function getCaseStudyMainPage() {
  const apiUrl = getStrapiBaseUrl();
  const query = qs.stringify({
    populate: {
      coverImage: true,
      button: true,
      case_studies: {
        populate: {
          homePageImage: true,
        },
      },
      contentBlock: {
        populate: {
          image: true,
        },
      },
      bottomBlock: {
        populate: {
          image: true,
        },
      },
    },
    pagination: {
      pageSize: 10,
      page: 1,
    },
    publicationState: "live",
    locale: ["en"],
  });
  const res = await fetch(
    `${apiUrl}/api/case-studies-page?${query}`,
    configurations({ cache: "no-store" })
  );

  if (!res.ok) {
    throw new Error("Failed to fetch about page data");
  }

  return res.json();
}
export async function getCaseStudiesListing() {
  const apiUrl = getStrapiBaseUrl();
  const query = qs.stringify({
    sort: ["createdAt:DESC"],
    filters: {
      type: {
        $eq: "PROJECT",
      },
    },
    populate: {
      coverImage: true,
      sectors: {
        populate: {
          icon: true,
        },
      },
    },
    pagination: {
      pageSize: 100,
      page: 1,
    },
    publicationState: "live",
    locale: ["en"],
  });
  const res = await fetch(
    `${apiUrl}/api/case-studies?${query}`,
    configurations({ cache: "no-store" })
  );

  if (!res.ok) {
    throw new Error("Failed to fetch about page data");
  }

  return res.json();
}
export async function getSingleCaseStudy(slug) {
  const apiUrl = getStrapiBaseUrl();
  const query = qs?.stringify({
    populate: {
      coverImage: true,
      // @ts-ignore
      caseStudies: {
        populate: {
          image: true,
          CTAPrimary: true,
          CTASecondary: true,
        },
      },
      sectors: {
        select: ["heading"],
      },
      services: {
        select: ["heading"],
      },
      overview: {
        populate: {
          service_providers: {
            select: ["heading"],
          },
          sectors: {
            select: ["heading"],
          },
          videoSection: {
            populate: {
              video: true,
              thumbnail: true,
            },
          },
        },
      },
      objective: {
        populate: {
          image: true,
        },
      },
      workPerformed: {
        populate: {
          image: true,
        },
      },
    },

    publicationState: "live",
    locale: ["en"],
  });

  const res = await fetch(
    `${apiUrl}/api/case-studies/${slug}?${query}`,

    configurations({ cache: "no-store" })
  );
  if (!res.ok) {
    throw new Error("Failed to fetch Case Study page data");
  }

  return res.json();
}

// service main Page

export async function getServiceMainPage() {
  const apiUrl = getStrapiBaseUrl();
  const query = qs.stringify({
    populate: {
      coverImage: true,
      services: {
        populate: {
          coverImage: true,
          homePageImage: true,
        },
      },
      contentBlock: {
        populate: {
          image: true,
        },
      },
      bottomBlock: {
        populate: {
          image: true,
        },
      },
    },
    pagination: {
      pageSize: 10,
      page: 1,
    },
    publicationState: "live",
    locale: ["en"],
  });
  const res = await fetch(
    `${apiUrl}/api/service-page?${query}`,
    configurations({ cache: "no-store" })
  );

  if (!res.ok) {
    throw new Error("Failed to fetch about page data");
  }

  return res.json();
}

/* ------------------------------------Servies Pages-------------------------------------------------- */
export async function getSingleService(slug) {
  const apiUrl = getStrapiBaseUrl();
  const query = qs?.stringify({
    populate: {
      coverImage: true,
      image: true,
      keyServices: {
        populate: {
          image: true,
        },
      },
    },
  });

  const res = await fetch(
    `${apiUrl}/api/services/${slug}?${query}`,

    configurations({ cache: "no-store" })
  );
  if (!res.ok) {
    throw new Error("Failed to fetch Services page data");
  }

  return res.json();
}
// services listing data
export async function getServicesListing() {
  const apiUrl = getStrapiBaseUrl();
  const query = qs.stringify({
    sort: ["createdAt:DESC"],
    populate: {
      homePageImage: true,
      icon: true,
    },
    pagination: {
      pageSize: 10,
      page: 1,
    },
    publicationState: "live",
    locale: ["en"],
  });
  const res = await fetch(
    `${apiUrl}/api/services?${query}`,
    configurations({ cache: "no-store" })
  );

  if (!res.ok) {
    throw new Error("Failed to fetch sectors listing page data");
  }

  return res.json();
}
// Footer-Section

// services
export async function getServices() {
  const apiUrl = getStrapiBaseUrl();
  const query = qs.stringify({
    sort: ["id:asc"],
    fields: ["slug", "heading"],
    populate: {
      icon: true,
    },
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

// sectors
export async function getSectors() {
  const apiUrl = getStrapiBaseUrl();
  const query = qs.stringify({
    sort: ["id:asc"],
    fields: ["slug", "heading"],
    populate: {
      icon: true,
    },
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

// green-initiative Page
export async function getGreenInitiative() {
  const apiUrl = getStrapiBaseUrl();
  const query = qs.stringify({
    populate: {
      contentBlock: {
        populate: {
          image: true,
        },
      },
      coverImage: true,
      button: true,
    },
    pagination: {
      pageSize: 10,
      page: 1,
    },
    publicationState: "live",
    locale: ["en"],
  });
  const res = await fetch(
    `${apiUrl}/api/green-initiative?${query}`,
    configurations({ cache: "no-store" })
  );

  if (!res.ok) {
    throw new Error("Failed to fetch green-initiative page data");
  }

  return res.json();
}
// CSR
export async function getCSR() {
  const apiUrl = getStrapiBaseUrl();
  const query = qs.stringify({
    populate: {
      contentBlock: {
        populate: {
          image: true,
        },
      },
      coverImage: true,
      button: true,
    },
    pagination: {
      pageSize: 10,
      page: 1,
    },
    publicationState: "live",
    locale: ["en"],
  });
  const res = await fetch(
    `${apiUrl}/api/csr?${query}`,
    configurations({ cache: "no-store" })
  );

  if (!res.ok) {
    throw new Error("Failed to fetch CSR page data");
  }

  return res.json();
}
// projects (Case-study)
export async function getProjects() {
  const apiUrl = getStrapiBaseUrl();
  const query = qs.stringify({
    sort: ["id:desc"],
    filters: {
      type: {
        eq: "PROJECT",
      },
      featured: {
        $eq: true,
      },
    },
    fields: ["slug", "heading"],
    publicationState: "live",
    locale: ["en"],
  });

  const res = await fetch(
    `${apiUrl}/api/case-studies?${query}`,

    configurations({ cache: "no-store" })
  );
  if (!res.ok) {
    throw new Error("Failed to fetch about page data");
  }

  return res.json();
}

/* ------------------------------------Sectors Pages-------------------------------------------------- */
export async function getSingleSectors(slug) {
  const apiUrl = getStrapiBaseUrl();
  const query = qs?.stringify({
    populate: {
      coverImage: true,
      image: true,
      keyServices: {
        populate: {
          image: true,
        },
      },
      case_studies: true,
      contentBlock: {
        populate: {
          image: true,
        },
      },
    },
  });

  const res = await fetch(
    `${apiUrl}/api/sectors/${slug}?${query}`,

    configurations({ cache: "no-store" })
  );
  if (!res.ok) {
    throw new Error("Failed to fetch Services page data");
  }

  return res.json();
}

export async function getSectorsMainPage() {
  const apiUrl = getStrapiBaseUrl();
  const query = qs.stringify({
    populate: {
      coverImage: true,
      sectors: {
        populate: {
          homePageImage: true,
          sectors: {
            populate: {
              image: true,
            },
          },
        },
      },
      contentBlock: {
        populate: {
          image: true,
        },
      },
      bottomBlock: {
        populate: {
          image: true,
        },
      },
    },
    pagination: {
      pageSize: 10,
      page: 1,
    },
    publicationState: "live",
    locale: ["en"],
  });
  const res = await fetch(
    `${apiUrl}/api/sectors-page?${query}`,
    configurations({ cache: "no-store" })
  );

  if (!res.ok) {
    throw new Error("Failed to fetch about page data");
  }

  return res.json();
}

// sectors listing url
export async function getSectorsListing() {
  const apiUrl = getStrapiBaseUrl();
  const query = qs.stringify({
    sort: ["createdAt:DESC"],
    populate: {
      homePageImage: true,
      icon: true,
    },
    pagination: {
      pageSize: 10,
      page: 1,
    },
    publicationState: "live",
    locale: ["en"],
  });
  const res = await fetch(
    `${apiUrl}/api/sectors?${query}`,
    configurations({ cache: "no-store" })
  );

  if (!res.ok) {
    throw new Error("Failed to fetch sectors listing page data");
  }

  return res.json();
}
/* ***********************Career Page******************************** */
export async function getCareerPage() {
  const apiUrl = getStrapiBaseUrl();
  const query = qs.stringify({
    populate: {
      coverImage: true,
      contentBlock: {
        populate: {
          image: true,
        },
      },
      bottomBlock: {
        populate: {
          image: true,
        },
      },
      videoSection: {
        populate: {
          video: true,
          thumbnail: true,
        },
      },
      ImageAndVideo: {
        populate: {
          image: true,
          thumbnail: true,
        },
      },
      keyServices: {
        populate: {
          image: true,
        },
      },
    },
    pagination: {
      pageSize: 10,
      page: 1,
    },
    publicationState: "live",
    locale: ["en"],
  });
  const res = await fetch(
    `${apiUrl}/api/career?${query}`,
    configurations({ cache: "no-store" })
  );

  if (!res.ok) {
    throw new Error("Failed to fetch career page data");
  }

  return res.json();
}
/*** case studies for services single page * */
export async function servicesCaseStudies(slug) {
  console.log(slug);
  const apiUrl = getStrapiBaseUrl();
  const query = qs.stringify({
    filters: {
      type: {
        $eq: "PROJECT",
      },
      services: {
        slug: {
          $eq: slug,
        },
      },
    },
    populate: {
      coverImage: true,
      services: {
        populate: {
          icon: true,
        },
      },
    },
    pagination: {
      pageSize: 10,
      page: 1,
    },
    publicationState: "live",
    locale: ["en"],
  });
  const res = await fetch(
    `${apiUrl}/api/case-studies?${query}`,
    configurations({ cache: "no-store" })
  );

  if (!res.ok) {
    throw new Error("Failed to fetch career page data");
  }

  return res.json();
}

/* Case Studies for sectors single page */
export async function sectorsCaseStudies(slug) {
  const apiUrl = getStrapiBaseUrl();
  const query = qs.stringify({
    filters: {
      type: {
        $eq: "PROJECT",
      },
      sectors: {
        slug: {
          $eq: slug,
        },
      },
    },
    populate: {
      coverImage: true,
      sectors: {
        populate: {
          icon: true,
        },
      },
    },
    pagination: {
      pageSize: 10,
      page: 1,
    },
    publicationState: "live",
    locale: ["en"],
  });
  const res = await fetch(
    `${apiUrl}/api/case-studies?${query}`,
    configurations({ cache: "no-store" })
  );

  if (!res.ok) {
    throw new Error("Failed to fetch career page data");
  }

  return res.json();
}
