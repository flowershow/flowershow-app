import React from "react";
import { Fragment } from 'react'
import { GetStaticProps, GetStaticPropsResult } from "next";
import type { CustomAppProps } from "./_app";
import { CheckIcon, MinusIcon } from '@heroicons/react/solid'

type Props = CustomAppProps;

export default function PricingPage() {
    return (
        <main>
        <div className="py-12 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <h1 className="py-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        Pricing
                    </h1>
                </div>
                <p className="mx-auto mt-6 text-center text-lg leading-8 text-gray-600 dark:text-white">
                    Start sharing your digital garden for free. Upgrade to get extra premium features.
                </p>
                <div className="mx-auto mt-12 text-center px-4 py-2 bg-secondary/10 rounded-lg">
                    <p className="text-sm text-secondary">
                        <span className="mr-2">🎉</span>
                        Beta period: All Pro features are temporarily enabled for free. They will become premium-only features soon.
                    </p>
                </div>

                {/* xs to md */}
                <div className="mx-auto mt-12 max-w-md space-y-8 sm:mt-16 md:hidden">
                    {tiers.map((tier) => (
                        <section
                            key={tier.id}
                            className={classNames(
                                tier.mostPopular ? 'rounded-xl bg-gray-400/5 dark:bg-gray-400/10 ring-1 ring-inset ring-gray-200' : '',
                                'p-8'
                            )}
                        >
                            <h3 id={tier.id} className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                                {tier.name}
                            </h3>
                            <p className="mt-2 flex items-baseline gap-x-1 text-gray-900 dark:text-white">
                                <span className="text-4xl font-bold">{tier.priceMonthly}</span>
                                <span className="text-sm font-semibold">/month</span>
                            </p>
                            <a
                                href={tier.href}
                                target="_blank"
                                aria-describedby={tier.id}
                                className={classNames(
                                    tier.mostPopular
                                        ? 'bg-secondary text-white hover:bg-secondary/80'
                                        : 'text-secondary ring-1 ring-inset ring-secondary/50 hover:ring-secondary/70',
                                    'mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary/70'
                                )}
                            >
                                {tier.cta}
                            </a>
                            <ul role="list" className="mt-10 space-y-4 text-sm leading-6 text-gray-900 dark:text-white">
                                {sections.map((section) => (
                                    <li key={section.name}>
                                        <ul role="list" className="space-y-4">
                                            {section.features.map((feature) =>
                                                feature.tiers[tier.name] ? (
                                                    <li key={feature.name} className="flex gap-x-3">
                                                        {feature.status === "IN_PROGRESS" ? (
                                                            <div className="text-center">🚧</div>
                                                        ) : (
                                                            <CheckIcon className="h-6 w-5 flex-none text-secondary" aria-hidden="true" />
                                                        )}
                                                        <span>
                                                            {feature.name}{' '}
                                                            {typeof feature.tiers[tier.name] === 'string' ? (
                                                                <span className="text-sm leading-6 text-gray-500">({feature.tiers[tier.name]})</span>
                                                            ) : null}
                                                        </span>
                                                    </li>
                                                ) : null
                                            )}
                                        </ul>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    ))}
                </div>

                {/* lg+ */}
                <div className="isolate mt-20 mx-auto hidden md:block">
                    <div className="relative -mx-8">
                        {tiers.some((tier) => tier.mostPopular) ? (
                            <div className="absolute inset-x-4 inset-y-0 -z-10 flex">
                                <div
                                    className="flex w-1/3 px-4"
                                    aria-hidden="true"
                                    style={{ marginLeft: `${(tiers.findIndex((tier) => tier.mostPopular) + 1) * 31}%` }}
                                >
                                    <div className="w-full rounded-t-xl border-x border-t border-gray-900/10 dark:border-white/10 bg-gray-400/5 dark:bg-gray-500/5" />
                                </div>
                            </div>
                        ) : null}
                        <table className="w-full table-fixed border-separate border-spacing-x-8 text-left">
                            <caption className="sr-only">Pricing plan comparison</caption>
                            <colgroup>
                                <col className="w-1/3" />
                                <col className="w-1/3" />
                                <col className="w-1/3" />
                            </colgroup>
                            <thead>
                                <tr>
                                    <td />
                                    {tiers.map((tier) => (
                                        <th key={tier.id} scope="col" className="px-6 pt-6 xl:px-8 xl:pt-8">
                                            <div className="text-sm font-semibold leading-7 text-gray-900 dark:text-white">{tier.name}</div>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">
                                        <span className="sr-only">Price</span>
                                    </th>
                                    {tiers.map((tier) => (
                                        <td key={tier.id} className="px-6 pt-2 xl:px-8">
                                            <div className="flex items-baseline gap-x-1 text-gray-900 dark:text-white">
                                                <span className="text-4xl font-bold">{tier.priceMonthly}</span>
                                                <span className="text-sm font-semibold leading-6">/month</span>
                                            </div>
                                            <a
                                                href={tier.href}
                                                target="_blank"
                                                className={classNames(
                                                    tier.mostPopular
                                                        ? 'bg-secondary text-white hover:bg-secondary/60'
                                                        : 'text-secondary/80 ring-1 ring-inset ring-secondary/50 hover:ring-secondary/70',
                                                    'mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6'
                                                )}
                                            >
                                                {tier.cta}
                                            </a>
                                        </td>
                                    ))}
                                </tr>
                                {sections.map((section, sectionIdx) => (
                                    <Fragment key={section.name}>
                                        <tr>
                                            <th
                                                scope="colgroup"
                                                colSpan={4}
                                                className={classNames(
                                                    sectionIdx === 0 ? 'pt-8' : 'pt-16',
                                                    'pb-4 text-sm font-semibold leading-6 text-gray-900 dark:text-white'
                                                )}
                                            >
                                                {section.name}
                                                <div className="absolute inset-x-8 mt-4 h-px bg-gray-900/10 dark:bg-white/20" />
                                            </th>
                                        </tr>
                                        {section.features.map((feature) => (
                                            <tr key={feature.name}>
                                                <th scope="row" className="py-4 text-sm font-normal leading-6 text-gray-900 dark:text-white">
                                                    {feature.name}
                                                    <div className="absolute inset-x-8 mt-4 h-px bg-gray-900/5 dark:bg-white/10" />
                                                </th>
                                                {tiers.map((tier) => (
                                                    <td key={tier.id} className="px-6 py-4 xl:px-8">
                                                        {typeof feature.tiers[tier.name] === 'string' ? (
                                                            <div className="text-center text-sm leading-6 text-gray-500 dark:text-white">
                                                                {feature.tiers[tier.name]}
                                                            </div>
                                                        ) : (
                                                            <>
                                                                {feature.status === "IN_PROGRESS" ? (
                                                                    <div className="text-center">🚧</div>
                                                                ) : (
                                                                    feature.tiers[tier.name] === true ? (
                                                                        <CheckIcon className="mx-auto h-5 w-5 text-secondary" aria-hidden="true" />
                                                                    ) : (
                                                                        <MinusIcon className="mx-auto h-5 w-5 text-gray-400 dark:text-white" aria-hidden="true" />
                                                                    )
                                                                )}
                                                                <span className="sr-only">
                                                                    {feature.tiers[tier.name] === true ? 'Included' : 'Not included'} in {tier.name}
                                                                </span>
                                                            </>
                                                        )}
                                                    </td>
                                                ))}                                            </tr>
                                        ))}
                                    </Fragment>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
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

const tiers = [
    {
        name: 'Free',
        id: 'tier-free',
        href: "https://tally.so/r/3EN1yX",
        priceMonthly: '$0',
        description: 'Perfect for personal digital gardens and small projects',
        mostPopular: true,
        cta: "Get early access"
    },
    {
        name: 'Pro',
        id: 'tier-pro',
        priceMonthly: '$5',
        description: 'For creators who want more customization and features',
        mostPopular: false,
        cta: "Free during beta"
    },
]
const sections = [
    {
        name: 'Core Features',
        features: [
            { name: 'Wiki-style links', tiers: { Free: true, Pro: true } },
            { name: 'Mermaid diagrams', tiers: { Free: true, Pro: true } },
            { name: 'Math equations', tiers: { Free: true, Pro: true } },
            { name: 'Table of contents', tiers: { Free: true, Pro: true } },
            { name: 'Obsidian plugin', tiers: { Free: true, Pro: true } },
        ],
    },
    {
        name: 'Customization',
        features: [
            { name: 'Custom CSS', tiers: { Free: true, Pro: true } },
            { name: 'Custom domain', tiers: { Pro: true } },
            { name: 'Remove Flowershow branding', tiers: { Pro: true } },
            { name: 'Full-text search', tiers: { Free: true, Pro: true }, status: "IN_PROGRESS" },
        ],
    },
    {
        name: 'Content',
        features: [
            { name: 'Unlimited public sites', tiers: { Free: false, Pro: true } },
            { name: 'Unlimited site size', tiers: { Free: false, Pro: true } },
        ],
    },
    {
        name: 'Support',
        features: [
            { name: 'Community support', tiers: { Free: true, Pro: true } },
            { name: 'Priority support', tiers: { Pro: true } },
            { name: 'Onboarding assistance', tiers: { Pro: true } },
        ],
    },
]


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}