import React from "react";
import { GetStaticProps, GetStaticPropsResult } from "next";

import { Hero } from "@/components/Hero";
/* import { FeaturesTiles } from "@/components/FeatureTiles"; */
import { CTASection } from "@/components/CTASection";
import { Pricing } from "@/components/Pricing";
import { Button } from "@/components/common/Button"

import type { CustomAppProps } from "../_app";


type Props = CustomAppProps;

const heroProps = {
    title: "Avoid the hassle and complexity of deploying yourself.",
    subtitle: "With Flowershow Cloud you can turn your markdown into a website in a couple of clicks.",
    highlights: [
        "All of Flowershow goodness",
        "Always up to date with latest Flowershow",
        "Obsidian compatible",
        "Run off GitHub",
    ],
    infoBadges: [
        (<h2 className="max-w-lg text-3xl sm:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-indigo-400 ">
            Flowershow Cloud
        </h2>)
    ],
    ctaButtons: [
        (<Button target="_blank" rel="noreferer" href="https://cloud.datahub.io/">
            <span>Get started for free</span>
        </Button>),
    ]
}

/* const features = [{
*     imageSrc: "/images/sync.png",
*     imageAlt: "",
*     title: "Always up to date with the latest Flowershow",
*     description: `Flowershow Cloud ensures you're always using the latest version of Flowershow template.
* There's no need for manual updates.`
* },
* {
*     imageSrc: "/images/bolt.png",
*     imageAlt: "",
*     title: "Instant publishing",
*     description: `Your content goes live instantly thanks to server-side rendering.
* No waiting for builds - updates to your markdown files are reflected immediately on your site.`
* },
* {
*     imageSrc: "/images/star.png",
*     imageAlt: "",
*     title: "All of Flowershow goodness",
*     description: `Flowershow Cloud uses the core Flowershow template to render your sites,
* offering all its features that bring the best out of your content and present it in an elegant website layout.`
* },
* {
*     imageSrc: "/images/github.png",
*     imageAlt: "",
*     title: "Run off-GitHub",
*     description: `Flowershow Clour renders your markdown files off of your GitHub repository,
* directly into a live site with no additional hosting steps.`
* }
* ] */

export default function Home() {
    return (
        <main>
            <Hero {...heroProps} />
            <Pricing />
            <CTASection
                title="Start using Flowershow Cloud now!"
                subtitle="Try it for free and see how easy it is to turn your markdown into an elegant website."
                cta="Get started for free"
                href="https://cloud.datahub.io/"
            />
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
