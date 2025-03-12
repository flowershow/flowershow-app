import React from "react";
import { GetStaticProps, GetStaticPropsResult } from "next";

import { Hero } from "@/components/Hero";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/common/Button"
import WhatIsFlowershow from "@/components/WhatIsFlowershow";
import { Features } from "@/components/Features";

import type { CustomAppProps } from "./_app";


type Props = CustomAppProps;

const heroProps = {
    title: "Publish your Obsidian vault quickly, easily and for free",
    subtitle: "Fast and easy way to publish your digital garden – no coding required. Sign up, connect your vault, and have your site online in 2 minutes! Fully-featured free forever plan available.",
    highlights: [
        "Obsidian compatibile",
        "Quick and easy",
        "Free forever plan",
    ],
    infoBadges: [
    ],
    ctaButtons: [
        (<Button target="_blank" href="https://tally.so/r/3EN1yX">
            <span>Try Flowershow for free</span>
        </Button>),
    ]
}

const features = [
    {
        title: "Markdown and Obsidian Syntax Support",
        description:
            "Flowershow was designed with Obsidian users in mind, so it aims to fully support Obsidian syntax, including CommonMark, GitHub Flavoured Markdown and Obsidian extensions, like Wiki links. All of your Markdown files are parsed as MDX. This means you not only can write your content using good old Markdown, but also enrich it with dynamic visualizations, immersive user interactions and much more!",
        link: "/docs/syntax",
        imageSrc: "/markdown.png",
    },
    {
        title: "Mermaid and MathJax support",
        description:
            "Display Mermaid diagrams within your notes as well as math exaptions, where you can use LaTeX notations to denote formulas.",
        link: "/docs/mermaid",
        imageSrc: "/math_and_mermaid.png",
    },
    {
        title: "Table of Contents and Sitemap",
        description:
            "You can add a table of contents to your markdown pages as well as adding a site-wide table of contents in a LHS sidebar to allow your users to easily navigate to other pages on your website.",
        link: "/docs/site-wide-toc",
        imageSrc: "/toc_and_sitemap.png",
    },
    {
        title: "Page Comments",
        description: "Enable page comments powered by Giscus - a comments system based on GitHub Discussions.",
        link: "/docs/site-wide-toc",
        imageSrc: "/comments.png",
    },
    {
        title: "Elegant Layout",
        description: "Display your content in an elegant format supporting title, description, authors, publish date, featured image and more.",
        link: "/docs/site-wide-toc",
        imageSrc: "/layout.png",
    },
    {
        title: "Hero Section",
        description: "aaa",
        link: "/docs/site-wide-toc",
        imageSrc: "/hero.png",
    },
    // {
    //     title: "Custom CSS",
    //     description: "aaa",
    //     link: "/docs/site-wide-toc",
    //     imageSrc: "/tbd.png",
    // },
];

export default function Home() {
    return (
        <main>
            <Hero {...heroProps} />
            <WhatIsFlowershow />
            {/* <CloudPublishSteps/> */}
            <Features features={features} />
            <CTASection
                title="Join Flowershow Early Access"
                subtitle="Be part of shaping the future of digital garden publishing. Your feedback will help us build the perfect tool for you."
                cta="Get early access"
                href="https://tally.so/r/3EN1yX"
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
