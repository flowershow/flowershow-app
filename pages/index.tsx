import React from "react";
import { GetStaticProps, GetStaticPropsResult } from "next";

import { Hero } from "@/components/Hero";
/* import { FeaturesTiles } from "@/components/FeatureTiles"; */
import { CTASection } from "@/components/CTASection";
import { Pricing } from "@/components/Pricing";
import { Button } from "@/components/common/Button"
import WhatIsFlowershow from "@/components/WhatIsFlowershow";

import type { CustomAppProps } from "./_app";


type Props = CustomAppProps;

const heroProps = {
    title: "Turn your Obsidian vault into a website in minutes",
    subtitle: "Flowershow Cloud is the simplest way to share your digital garden with the world. No technical setup required - just connect your vault and publish.",
    highlights: [
        "Free to get started",
        "Works with Obsidian out of the box",
        "Publish in under 2 minutes",
        "All your favorite features included",
    ],
    infoBadges: [
        (<h2 className="max-w-lg text-3xl sm:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-indigo-400 ">
            Flowershow Cloud
        </h2>)
    ],
    ctaButtons: [
        (<Button target="_blank" href="https://cloud.flowershow.app">
            <span>Start publishing for free</span>
        </Button>),
        (<Button target="_blank" href="/pricing" variant="outline" className="ml-4">
            <span>View pricing</span>
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
            <WhatIsFlowershow />
            {/** Why the name? **/}
            <div className="py-10 sm:px-2 lg:relative lg:px-0">
                <div className="prose dark:prose-invert mx-auto max-w-2xl px-4 lg:max-w-4xl lg:px-8 xl:px-12">
                    <h2 className="text-center">Why the name?</h2>
                    <p>
                        Flowershow is about sharing your digital garden -- putting it "on
                        show" to the world. And what do you have in your garden? Flowers!
                        Hence "Flowershow": it shows off your digital garden to the world!
                    </p>
                </div>
            </div>
            <CTASection
                title="Join the Flowershow community"
                subtitle="Join other Obsidian users who are already sharing their digital gardens with the world."
                cta="Start publishing for free"
                href="https://cloud.flowershow.app"
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
