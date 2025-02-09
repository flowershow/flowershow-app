import React from "react";
import { GetStaticProps, GetStaticPropsResult } from "next";
import { Pricing } from "@/components/Pricing";
import type { CustomAppProps } from "./_app";

type Props = CustomAppProps;

export default function PricingPage() {
    return (
        <main>
            <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-24 sm:pt-32">
                <div className="mx-auto max-w-4xl text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
                        Flowershow Cloud Pricing
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
                        Simple, transparent pricing for our hosted solution. Looking for the free self-hosted version? <a href="/self-hosted" className="text-primary hover:text-primary-dark">Check it out here</a>.
                    </p>
                </div>
            </div>
            <Pricing />
        </main>
    );
}

export const getStaticProps: GetStaticProps = async (): Promise<
    GetStaticPropsResult<Props>
> => {
    return {
        props: {
            meta: {
                title: "Pricing - Flowershow Cloud",
                description: "Simple and transparent pricing for Flowershow Cloud",
                urlPath: "/pricing",
                showToc: false,
                showEditLink: false,
                showSidebar: false,
                showComments: false,
            },
        },
    };
};