import React from "react";
import Link from "next/link";
import { GetStaticProps, GetStaticPropsResult } from "next";
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";

import { Hero } from "@/components/Hero";
import { GitHubIcon } from "@/components/icons/GitHubIcon"
import { Button } from "@/components/common/Button"
import SelfPublishSteps from "@/components/SelfPublishSteps";
/* import CloudPublishSteps from "@/components/CloudPublishSteps"; */
import type { CustomAppProps } from "./_app";


type Props = CustomAppProps;

const heroProps = {
    title: "Self-host your digital garden for free",
    subtitle: "The free, open-source version of Flowershow. Perfect for developers who want full control over their setup.",
    highlights: [
        "Free and open-source",
        "Full control over hosting",
        "All core features included",
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
            href="https://github.com/flowershow/flowershow"
            variant="outline"
        >
            <GitHubIcon />
            <span className="ml-3">Star on GitHub</span>
        </Button>)
    ]
}

// const features = [
//     {
//         title: "Blog Support",
//         description:
//             "Blog document type for your blog posts. This way you'll be able to fetch and display them on any of your pages by using our BlogsList component (or you can create a custom one).",
//         link: "/docs/blog",
//         imageSrc: "/images/blog.png",
//     },
//     {
//         title: "Tailwind support",
//         description:
//             "Flowershow comes with built-in tailwind support on any markdown page for styling your content.",
//         link: "/docs/tailwind",
//         imageSrc: "/images/tw.png",
//     },
//     {
//         title: "Custom dark and light themes",
//         description:
//             "Change the fonts and colors used throughout your website as well as switch between dark and light modes.",
//         link: "/docs/custom-theme",
//         imageSrc: "/images/theme.png",
//     },
// ];

export default function Home() {
    return (
        <main>
            <Hero {...heroProps} />
            {/* <Features features={features} /> */}
            <SelfPublishSteps />
            {/* <CloudPublishSteps /> */}
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
