import React from "react";

export default function CloudPublishSteps() {
    return (
        <div className="py-10 sm:px-2 lg:relative lg:px-0" id="how">
            <div className="prose dark:prose-invert mx-auto max-w-6xl p-4 lg:max-w-6xl lg:p-8 xl:p-12">
                <h2 className="text-center">
                    Publish your notes with Obsidian Flowershow plugin
                </h2>
                <p className="text-center">🚧 Coming soon! 🚧</p>
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 gap-4 lg:gap-12">
                    <div className="relative">
                        <div className="flex items-center space-x-4 sm:space-x-8">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-sky-200 bg-sky-100 text-xl text-sky-600 ring-2 ring-white dark:border-sky-900 dark:bg-[#163C57] dark:text-sky-500 dark:ring-gray-950">
                                1
                            </div>
                            <h3 className="m-0">
                                You have your Obsidian vault and you want to publish it.
                            </h3>
                        </div>
                        <p>If you haven't created your digital garden with Obsidian, but it's written in Markdown, you can still publish it with Flowershow Obsidian Plugin. Just open your digital garden in Obsidian and follow the steps below!</p>
                    </div>
                    <img
                        src="/images/obsidian_vault.png"
                        alt=""
                        className="lg:max-h-[20rem] m-0 lg:my-6"
                    />

                    <div className="relative">
                        <div className="flex items-center space-x-4 sm:space-x-8">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-sky-200 bg-sky-100 text-xl text-sky-600 ring-2 ring-white dark:border-sky-900 dark:bg-[#163C57] dark:text-sky-500 dark:ring-gray-950">
                                2
                            </div>
                            <h3 className="m-0">
                                Create a Flowershow account and get your API key.
                            </h3>
                        </div>
                    </div>
                    <img
                        src="#"
                        alt=""
                        className="lg:max-h-[20rem] m-0 lg:my-6"
                    />

                    <div className="relative">
                        <div className="flex items-center space-x-4 sm:space-x-8">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-sky-200 bg-sky-100 text-xl text-sky-600 ring-2 ring-white dark:border-sky-900 dark:bg-[#163C57] dark:text-sky-500 dark:ring-gray-950">
                                3
                            </div>
                            <h3 className="m-0">Install Obsidian Flowershow plugin.</h3>
                        </div>
                        <p>Then, configure it with your Flowershow account.</p>
                    </div>
                    <img
                        src="/images/plugin_install.png"
                        alt=""
                        className="lg:max-h-[20rem] m-0 lg:my-6"
                    />

                    <div className="relative">
                        <div className="flex items-center space-x-4 sm:space-x-8">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-sky-200 bg-sky-100 text-xl text-sky-600 ring-2 ring-white dark:border-sky-900 dark:bg-[#163C57] dark:text-sky-500 dark:ring-gray-950">
                                4
                            </div>
                            <h3 className="m-0">
                                Open the Flowershow Publish Status panel and publish your notes!
                            </h3>
                        </div>
                        <p>You can also use Flowershow commands from Obsidian command pallete to publish all or a single note.</p>
                    </div>
                    <img
                        src="/images/publish_status.png"
                        alt=""
                        className="lg:max-h-[20rem] m-0 lg:my-6"
                    />

                    <div className="relative">
                        <div className="flex items-center space-x-4 sm:space-x-8">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-sky-200 bg-sky-100 text-xl text-sky-600 ring-2 ring-white dark:border-sky-900 dark:bg-[#163C57] dark:text-sky-500 dark:ring-gray-950">
                                5
                            </div>
                            <h3 className="m-0">
                                Your digital garden is now live! 🎉
                            </h3>
                        </div>
                        <p>And now, you can add or modify your notes, and share them with the world!</p>
                    </div>
                    <img
                        src="/images/result_cloud.png"
                        alt=""
                        className="lg:max-h-[20rem] m-0 lg:my-6"
                    />
                </div>
            </div>
        </div>
    );
}
