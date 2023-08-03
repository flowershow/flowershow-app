import React from "react";

export default function SelfPublishSteps() {
    return (
        <div id="self-publish" className="py-10 sm:px-2 lg:relative lg:px-0">
            <div className="rounded-md prose dark:prose-invert mx-auto max-w-6xl p-4 lg:max-w-6xl lg:p-8 xl:p-12">
                <h2 className="text-center">
                    Self-publish your digital garden with Obsidian Flowershow plugin
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 gap-4 lg:gap-12">

                    <div className="relative">
                        <div className="flex items-center space-x-4 sm:space-x-8">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-fuchsia-200 bg-fuchsia-100 text-xl text-fuchsia-600 dark:border-fuchsia-900 dark:bg-[#561b5e] dark:text-fuchsia-400">
                                1
                            </div>
                            <h3 className="m-0">
                                You have your Obsidian vault and you want to publish it.
                            </h3>
                        </div>
                        <p>If you haven't created your digital garden with Obsidian, but it's written in Markdown, you can still publish it with Flowershow Obsidian Plugin.
                            Just open your digital garden in Obsidian and follow the steps below!
                        </p>
                    </div>
                    <img
                        src="/images/obsidian_vault.png"
                        alt=""
                        className="lg:max-h-[20rem] m-0 lg:my-6"
                    />

                    <div className="relative">
                        <div className="flex items-center space-x-4 sm:space-x-8">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-fuchsia-200 bg-fuchsia-100 text-xl text-fuchsia-600 dark:border-fuchsia-900 dark:bg-[#561b5e] dark:text-fuchsia-400">
                                2
                            </div>
                            <h3 className="m-0">Copy Flowershow template repository to your GitHub account and deploy it.</h3>
                        </div>
                        <p>Use <a href="https://github.com/datopian/flowershow#quick-clone-and-deploy">this "Deploy" button</a> to copy and deploy the repo automatically with Vercel.</p>
                    </div>
                    <img
                        src="/images/vercel_deploy.png"
                        alt=""
                        className="lg:max-h-[20rem] m-0 lg:my-6"
                    />

                    <div className="relative">
                        <div className="flex items-center space-x-4 sm:space-x-8">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-fuchsia-200 bg-fuchsia-100 text-xl text-fuchsia-600 dark:border-fuchsia-900 dark:bg-[#561b5e] dark:text-fuchsia-400">
                                3
                            </div>
                            <h3 className="m-0">Install Obsidian Flowershow plugin.</h3>
                        </div>
                        <p>Then, configure it, so that it has access to your Flowershow repository.</p>
                    </div>
                    <img
                        src="/images/plugin_install.png"
                        alt=""
                        className="lg:max-h-[20rem] m-0 lg:my-6"
                    />

                    <div className="relative">
                        <div className="flex items-center space-x-4 sm:space-x-8">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-fuchsia-200 bg-fuchsia-100 text-xl text-fuchsia-600 dark:border-fuchsia-900 dark:bg-[#561b5e] dark:text-fuchsia-400">
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
                        className="m-0 rounded-md lg:my-6"
                    />

                    <div className="relative">
                        <div className="flex items-center space-x-4 sm:space-x-8">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-fuchsia-200 bg-fuchsia-100 text-xl text-fuchsia-600 dark:border-fuchsia-900 dark:bg-[#561b5e] dark:text-fuchsia-400">
                                5
                            </div>
                            <h3 className="m-0">
                                Your digital garden is now live! 🎉
                            </h3>
                        </div>
                        <p>And now, you can add or modify your notes, and share them with the world!</p>
                    </div>
                    <img
                        src="/images/result.png"
                        alt=""
                        className="m-0 rounded-md lg:my-6"
                    />
                </div>
                <div className="text-center mt-12 text-lg">
                    👉 See our <a href="/docs/publish-howto">self-publish howto to learn more</a>!
                </div>
            </div>
        </div >
    );
}
