import { CheckCircleIcon } from "@heroicons/react/solid"
import { ReactElement } from "react"


interface Props {
    title: string,
    subtitle: string,
    highlights: string[],
    infoBadges?: ReactElement[],
    ctaButtons?: ReactElement[]
}

export const Hero: React.FC<Props> = ({
    title,
    subtitle,
    highlights,
    infoBadges,
    ctaButtons
}) => {
    return (
        <div className="relative isolate">
            <div className="mt-8 pb-20 sm:mt-10 xl:mt-12 lg:flex lg:items-center lg:gap-x-10">
                {/* left column */}
                <div className="mx-auto max-w-2xl lg:mx-0 flex-1">
                    {infoBadges && (
                        <div className="mt-3 sm:mt-4 lg:mt-2 inline-flex space-x-6">
                            {infoBadges}
                        </div>
                    )}
                    <h1 className="mt-10 max-w-lg text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
                        {title}
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
                        {subtitle}
                    </p>
                    <div className="mt-6">
                        {highlights.map((h, i) => (
                            <p key={i} className="flex space-x-2 text-lg leading-8 items-baseline font-medium text-primary dark:text-primary-dark">
                                <span className="left-1 top-1 h-5 w-5 text-secondary">
                                    <CheckCircleIcon aria-hidden />
                                </span>
                                <span>
                                    {h}
                                </span>
                            </p>
                        ))}

                    </div>
                    {ctaButtons && (
                        <div className="mt-10 flex items-center gap-x-6">
                            {ctaButtons}
                        </div>
                    )}
                    <p className="mt-8">
                        Built with<span className="text-xl mx-1.5">❤</span>by
                        <a
                            href="https://www.datopian.com/"
                            target="_blank"
                            className="font-medium"
                        >
                            <img
                                src="/images/datopian-logo-black.png"
                                alt="Datopian Logo"
                                className="mx-1.5 mb-1.5 h-5 inline dark:hidden"
                            />
                            <img
                                src="/images/datopian-logo.png"
                                alt="Datopian Logo"
                                className="mx-1.5 mb-1.5 h-5 hidden dark:inline"
                            />
                            <span>
                                Datopian
                            </span>
                        </a>
                    </p>
                </div>
                {/* right column */}
                <div className="mx-auto max-w-2xl mt-24 lg:mt-0 lg:mx-0 flex-1">
                    <div
                        className="relative"
                    >
                        <img
                            src="/images/obsidian_dark_new.png"
                            alt=""
                            className="relative -top-8 w-3/4 rounded-lg hidden dark:block"
                        />
                        <img
                            src="/images/flowershow_dark.png"
                            alt=""
                            className="absolute top-12 left-1/3 w-3/4 rounded-lg hidden dark:block"
                        />
                        <img
                            src="/images/obsidian_light_new.png"
                            alt=""
                            className="relative -top-8 w-3/4 rounded-lg dark:hidden"
                        />
                        <img
                            src="/images/flowershow_light.png"
                            alt=""
                            className="absolute top-12 left-1/3 w-3/4 rounded-lg dark:hidden"
                        />
                    </div>
                </div>
            </div>
        </div >
    )
}
