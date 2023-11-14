import React from "react";
import { GetStaticProps, GetStaticPropsResult } from "next";

import { Hero } from "@/components/Hero";
import { FeaturesTiles } from "@/components/FeatureTiles";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/common/Button"

import type { CustomAppProps } from "../_app";


type Props = CustomAppProps;

const heroProps = {
    title: "Avoid the hassle and complexity of deploying yourself.",
    subtitle: "With Flowershow Cloud you can turn your markdown into a website in a couple of clicks.",
    highlights: [
        "All of Flowershow goodness",
        "Always up to date with latest Flowershow",
        "Run off GitHub",
    ],
    infoBadges: [
        (<h2 className="max-w-lg text-3xl font-bold tracking-tight text-secondary dark:text-white sm:text-4xl">
            Flowershow Cloud
        </h2>)
    ],
    ctaButtons: [
        (<Button href="/cloud/waitlist">
            <span>Get started</span>
        </Button>),
    ]
}

const features = [
    {
        imageSrc: "/images/obsidian_icon.png",
        imageAlt: "",
        title: "Always up to date with latest Flowershow",
        description: `Works with your existing Obsidian notes out of the box.No need
to modify the syntax or change file layout. Not an obsidian fan?
Flowershow will work with any CommonMark or GFM markdown files.`
    },
    {
        imageSrc: "/images/park.png",
        imageAlt: "",
        title: "Instant publishing",
        description: `Clean and elegant default theme with dark and light mode, hero,
navbar, backlinks section and support for internal links,
backlinks, math, mermaid, callouts and more.`
    },
    {
        imageSrc: "/images/farming.png",
        imageAlt: "",
        title: "All of Flowershow goodness",
        description: `Want to spice things up ? Flowershow is easy to extend, tweak and
customize and is built on standard, modern web stack – React,
NextJS and Tailwind.`
    },
    {
        imageSrc: "/images/data.png",
        imageAlt: "",
        title: "Run off GitHub",
        description: `We’ve been building content and data driven products for over a
decade, and we’re passionate about sharing knowledge and ideas
with others. We love markdown as much as we love open-source (a lot!).`
    }
]

export default function Home() {
    return (
        <main>
            <Hero {...heroProps} />
            <FeaturesTiles features={features} />
            <CTASection
                title="Join our waitlist"
                subtitle="Some subtitle"
                cta="Join"
                href="/cloud/waitlist"
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
