import {
  getSitemapCaseStudies,
  getSitemapSectors,
  getSitemapServices,
} from "@/lib/sitemap-api";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;
// STATIC SITE MAP
const routes = [
  "",
  "about-us",
  "awards-recognition",
  "contact",
  "services",
  "sectors",
  "case-studies",
  "privacy-policy",
  "teams",
  "green-initiatives",
  "career",
  "rodic-sports",
  "employee-engagement",
  "employee-welfare",
];
const getAllRoutes = routes.map((sites) => {
  return {
    url: `${SITE_URL}/${sites}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
  };
});

export default async function sitemap() {
  const { data: sectorsList } = await getSitemapSectors();
  const { data: servicesList } = await getSitemapServices();
  const { data: caseStudiesList } = await getSitemapCaseStudies();
  const sectors = sectorsList?.map((items) => {
    return {
      url: `${SITE_URL}/sectors/${items?.attributes?.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
    };
  });
  const services = servicesList?.map((items) => {
    return {
      url: `${SITE_URL}/services/${items?.attributes?.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
    };
  });
  const caseStudies = caseStudiesList?.map((items) => {
    return {
      url: `${SITE_URL}/case-studies/${items?.attributes?.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
    };
  });
  return [
    ...getAllRoutes, // static sitemap
    ...sectors, // dynamic sitemap
    ...services, // dynamic sitemap
    ...caseStudies,
  ];
}
