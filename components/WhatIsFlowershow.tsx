import { FeaturesTiles } from "@/components/FeatureTiles"

const features = [
    {
        imageSrc: "/images/obsidian_icon.png",
        imageAlt: "",
        title: "Crafted for Obsidian",
        description: `Works with your existing Obsidian notes out of the box.No need
to modify the syntax or change file layout. Not an obsidian fan?
Flowershow will work with any CommonMark or GFM markdown files.`
    },
    {
        imageSrc: "/images/park.png",
        imageAlt: "",
        title: "Elegant & Functional",
        description: `Clean and elegant default theme with dark and light mode, hero,
navbar, backlinks section and support for internal links,
backlinks, math, mermaid, callouts and more.`
    },
    {
        imageSrc: "/images/farming.png",
        imageAlt: "",
        title: "Customize and extend(if that’s your thing!)",
        description: `Want to spice things up ? Flowershow is easy to extend, tweak and
customize and is built on standard, modern web stack – React,
NextJS and Tailwind.`
    },
    {
        imageSrc: "/images/data.png",
        imageAlt: "",
        title: "Backed by an experienced team",
        description: `We’ve been building content and data driven products for over a
decade, and we’re passionate about sharing knowledge and ideas
with others. We love markdown as much as we love open-source (a lot!).`
    }
]



export default function WhatIsFlowershow() {
    return (
        <div className="py-10 sm:px-2 lg:relative lg:px-0" id="overview">
            <div className="prose dark:prose-invert mx-auto max-w-6xl px-4 lg:max-w-6xl lg:px-8 xl:px-12">
                <h2 className="text-center">What is Flowershow?</h2>
                <p>
                    Flowershow is an open-source tool for easily converting your markdown
                    files into an elegant website. It's built on a standard, modern web
                    stack – React, Next.js, and Tailwind and shipped with a basic default
                    theme to get you started with just a few clicks.
                </p>
            </div>
            <FeaturesTiles features={features} />
        </div>
    );
}
