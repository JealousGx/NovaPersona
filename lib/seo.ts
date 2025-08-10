import { Metadata } from "next";

export const siteConfig = {
  name: "NovaPersona",
  title: "AI-powered personal branding assistant.",
  description:
    "Empowers students and professionals to build a powerful and consistent personal brand online by leveraging AI for content optimization and portfolio creation.",
  url: process.env.NEXT_PUBLIC_APP_URL || "https://novapersona.vercel.app",
  ogImage: `${process.env.NEXT_PUBLIC_APP_URL}/assets/og-image.png`,
};

export const createMetadata = (pageMetadata: {
  title: string;
  description: string;
  image?: string;
  urlPath?: string;
  keywords?: string[];
  robots?: { index?: boolean; follow?: boolean };
}): Metadata => {
  const {
    title,
    description,
    image,
    urlPath,
    keywords = [],
    robots,
  } = pageMetadata;
  const ogImageUrl = image || siteConfig.ogImage;
  const url = `${siteConfig.url}${urlPath ? `/${urlPath}` : ""}`;

  const combinedKeywords = [...new Set([...keywords])];

  return {
    title: {
      default: title,
      template: `%s - ${siteConfig.title}`,
    },
    metadataBase: new URL(siteConfig.url),
    applicationName: siteConfig.name,
    description,
    alternates: {
      canonical: siteConfig.url,
    },
    publisher: siteConfig.name,
    creator: siteConfig.name,
    keywords: combinedKeywords,
    icons: {
      icon: [
        { url: "/assets/favicon/favicon.ico", sizes: "any" },
        {
          url: "/assets/favicon/favicon-32x32.png",
          sizes: "32x32",
          type: "image/png",
        },
        {
          url: "/assets/favicon/favicon-16x16.png",
          sizes: "16x16",
          type: "image/png",
        },
        { url: "/assets/favicon/favicon.svg", type: "image/svg+xml" },
      ],
      apple: [
        {
          url: "/assets/favicon/apple-icon-180x180.png",
          sizes: "180x180",
          type: "image/png",
        },
        {
          url: "/assets/favicon/apple-icon-152x152.png",
          sizes: "152x152",
          type: "image/png",
        },
        {
          url: "/assets/favicon/apple-icon-120x120.png",
          sizes: "120x120",
          type: "image/png",
        },
        {
          url: "/assets/favicon/apple-icon-114x114.png",
          sizes: "114x114",
          type: "image/png",
        },
        {
          url: "/assets/favicon/apple-icon-72x72.png",
          sizes: "72x72",
          type: "image/png",
        },
        {
          url: "/assets/favicon/apple-icon-60x60.png",
          sizes: "60x60",
          type: "image/png",
        },
      ],
      shortcut: [
        {
          url: "/assets/favicon/favicon-16x16.png",
          sizes: "16x16",
          type: "image/png",
        },
        {
          url: "/assets/favicon/favicon-32x32.png",
          sizes: "32x32",
          type: "image/png",
        },
        {
          url: "/assets/favicon/favicon-96x96.png",
          sizes: "96x96",
          type: "image/png",
        },
      ],
    },
    manifest: `/assets/favicon/manifest.json`,
    openGraph: {
      title,
      description,
      url,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      siteName: siteConfig.title,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
      creator: "@khiljimateenn",
    },
    robots,
    appleWebApp: {
      capable: true,
      title: siteConfig.name,
      statusBarStyle: "default",
    },
    formatDetection: {
      telephone: false,
    },
    authors: [
      {
        name: "JealousGx",
        url: "https://jealous.dev",
      },
    ],
    verification: {
      google: "",
      me: "@me",
    },
  };
};
