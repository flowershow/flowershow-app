import { FeaturesTiles } from "@/components/FeatureTiles"

const features = [
    {
        imageSrc: "/images/obsidian_icon.png",
        imageAlt: "",
        title: "Crafted for Obsidian",
        description: `Works with your existing Obsidian notes out of the box. No need
to modify the syntax or change file layout. Not an obsidian fan?
Flowershow will work with any CommonMark or GFM markdown files.`
    },
    {
        imageSrc: "/images/bolt.png",
        imageAlt: "",
        title: "Instant Publishing",
        description: `No technical setup required. Just connect your vault and publish
with a click. Your content goes live instantly, and updates are
reflected immediately on your site.`
    },
    {
        imageSrc: "/images/star.png",
        imageAlt: "",
        title: "Elegant & Functional",
        description: `Clean and elegant. Perfect for digital gardens, documentation,
or any knowledge sharing.`
    },
    {
        imageSrc: "/images/sync.png",
        imageAlt: "",
        title: "Always Up to Date",
        description: `Flowershow ensures you're always using the latest features
without any maintenance. Focus on creating content while we handle
the technical details.`
    }
]

export default function WhatIsFlowershow() {
    return (
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8" id="overview">
            <div className="mx-auto max-w-3xl prose dark:prose-invert">
                <h2 className="text-center">What is Flowershow?</h2>
                <p>
                    Flowershow is the easiest way to turn your Obsidian vault into an elegant
                    website. No coding, no technical setup, no maintenance required. Just connect
                    your vault and publish with a click. Perfect for digital gardens, documentation,
                    blogs, or any knowledge sharing.
                </p>
            </div>
            <FeaturesTiles features={features} />
        </div>
    );
}
