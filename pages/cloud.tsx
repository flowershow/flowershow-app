import React from "react";
import { GetStaticProps, GetStaticPropsResult } from "next";

import { Hero } from "../components/Hero";
import Features from "../components/Features";

import type { CustomAppProps } from "./_app";

type Props = CustomAppProps;

const highlights = [
    "A",
    "B",
    "C"
]

export default function Home() {
    return (
        <main>
            <Hero highlights={highlights} />

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
            <Features />
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
