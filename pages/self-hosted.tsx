import React from "react";
import Link from "next/link";
import { GetStaticProps, GetStaticPropsResult } from "next";
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";

import { Hero } from "@/components/Hero";
import { GitHubIcon } from "@/components/icons/GitHubIcon"
import { Button } from "@/components/common/Button"
import { Features } from "@/components/Features";
import SelfPublishSteps from "@/components/SelfPublishSteps";
/* import CloudPublishSteps from "@/components/CloudPublishSteps"; */
import type { CustomAppProps } from "./_app";


type Props = CustomAppProps;

const heroProps = {
    title: "Self-host your digital garden for free",
    subtitle: "The free, open-source version of Flowershow. Perfect for developers who want full control over their setup.",
    highlights: [
        "100% Free and open-source",
        "Full control over hosting",
        "All core features included",
        "Obsidian compatible"
    ],
    infoBadges: [
        (<span className="rounded-full bg-secondary-500/10 px-3 py-1 text-sm leading-6 ring-1 ring-inset ring-secondary/20">
            <span className="mr-1 font-semibold">Free Forever</span> 🌱
        </span>),
        /* (<Link
*     href="https://github.com/datopian/obsidian-flowershow"
*     className="rounded-full bg-secondary-500/10 px-3 py-1 text-sm font-medium leading-6 text-secondary ring-1 ring-inset ring-secondary/20">
*     Just shipped: Obsidian Flowershow Plugin v1.0<span className="ml-2">🚀</span>
* </Link>), */
        /* (<span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-300">
*     <span>Just shipped v1.0</span>
*     <ChevronRightIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
* </span>)
  */
    ],
    ctaButtons: [
        (<Button href="/docs/publish-howto">
            <span>Quick start</span>
        </Button>),
        (<Button
            href="https://github.com/datopian/flowershow"
            variant="outline"
        >
            <GitHubIcon />
            <span className="ml-3">Star on GitHub</span>
        </Button>)
    ]
}

const features = [
    {
        title: "Custom dark and light themes",
        description:
            "Change the fonts and colors used throughout your website as well as switch between dark and light modes.",
        link: "/docs/custom-theme",
        imageSrc: "/images/theme.png",
    },
    {
        title: "Table of contents",
        description:
            "You can add a table of contents to your markdown pages as well as adding a site-wide table of contents in a LHS sidebar to allow your users to easily navigate to other pages on your website.",
        link: "/docs/site-wide-toc",
        imageSrc: "/images/toc.png",
    },
    {
        title: "Blog Support",
        description:
            "Blog document type for your blog posts. This way you'll be able to fetch and display them on any of your pages by using our BlogsList component (or you can create a custom one).",
        link: "/docs/blog",
        imageSrc: "/images/blog.png",
    },
    {
        title: "Markdown, MDX syntax support",
        description:
            "Flowershow was designed with Obsidian users in mind, so it aims to fully support Obsidian syntax, including CommonMark, GitHub Flavoured Markdown and Obsidian extensions, like Wiki links. All of your Markdown files are parsed as MDX. This means you not only can write your content using good old Markdown, but also enrich it with dynamic visualizations, immersive user interactions and much more!",
        link: "/docs/syntax",
        imageSrc: "/images/obs_dark.png",
    },
    {
        title: "Tailwind support",
        description:
            "Flowershow comes with built-in tailwind support on any markdown page for styling your content.",
        link: "/docs/tailwind",
        imageSrc: "/images/tw.png",
    },
    {
        title: "Mermaid and MathJax support",
        description:
            "Display Mermaid diagrams within your notes as well as math exaptions, where you can use LaTeX notations to denote formulas.",
        link: "/docs/mermaid",
        imageSrc: "/images/mermaid.png",
    },
    {
        title: "Full-text search",
        description:
            "Flowershow supports search functionality to deliver realtime results for content available on all your pages. Clicking the result will lead the user to the relevant page.",
        link: "/docs/search",
        imageSrc: "/images/search.png",
    },
];

export default function Home() {
    return (
        <main>
            <Hero {...heroProps} />
            <SelfPublishSteps />
            {/* <CloudPublishSteps /> */}
            <Features features={features} />
        </main>
    );
}

export const getStaticProps: GetStaticProps = async (): Promise<
    GetStaticPropsResult<Props>
> => {
    return {
        props: {
            meta: {
                urlPath: "/",
                showToc: false,
                showEditLink: false,
                showSidebar: false,
                showComments: false,
            },
        },
    };
};
