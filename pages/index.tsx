import React from "react";
import Link from "next/link";
import { GetStaticProps, GetStaticPropsResult } from "next";

import { Hero } from "@/components/Hero";
import { GitHubIcon } from "@/components/icons/GitHubIcon"
import { Button } from "@/components/common/Button"
import WhatIsFlowershow from "@/components/WhatIsFlowershow";
import Features from "@/components/Features";
import SelfPublishSteps from "@/components/SelfPublishSteps";
import CloudPublishSteps from "@/components/CloudPublishSteps";
import type { CustomAppProps } from "./_app";


type Props = CustomAppProps;

const heroProps = {
    title: "Publish your markdown notes. For free, no coding.",
    subtitle: "Turn your markdown notes into an elegant website and tailor it to your needs.",
    highlights: [
        "Easy to use",
        "Obsidian syntax compatible",
        "Open-source"
    ],
    infoBadges: [
        (<Link
            href="https://github.com/datopian/obsidian-flowershow"
            className="rounded-full bg-secondary-500/10 px-3 py-1 text-sm font-medium leading-6 text-secondary ring-1 ring-inset ring-secondary/20">
            Just shipped: Obsidian Flowershow Plugin v1.0<span className="ml-2">🚀</span>
        </Link>),
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

export default function Home() {
    return (
        <main>
            <Hero {...heroProps} />
            <WhatIsFlowershow />
            <div className="py-10 sm:px-2 lg:relative lg:px-0" id="overview">
                <div className="prose dark:prose-invert mx-auto max-w-6xl px-4 lg:max-w-6xl lg:px-8 xl:px-12">
                    <h2 className="text-center">🚀 Now available as Obsidian plugin! 🚀</h2>
                    <p>
                        Flowershow is now available as an Obsidian plugin! This means you can now
                        publish your digital garden directly from Obsidian, in just a few easy steps, without having to use the command line at all!
                        <p>👉 See our <a href="/docs/publish-howto">self-publish howto</a> to get started.</p>
                        PS: It's so good, the Flowershow CLI has been deprecated and will no longer be maintained 😎
                        <p>🚧 TBD: Support for configuring Flowershow from the Obsidian settings UI.</p>
                    </p>
                </div>
            </div>
            <SelfPublishSteps />
            <CloudPublishSteps />
            <Features />
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
