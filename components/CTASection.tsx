import Image from "next/image";
import { Button } from "@/components/common/Button";


interface Props {
    title: string,
    subtitle: string,
    href: string,
    cta: string
}

export const CTASection: React.FC<Props> = ({ title, subtitle, href, cta }) => {
    return (
        <div
            className="relative overflow-hidden py-20 px-6 rounded-md"
        >
            <Image
                className="absolute left-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
                src="/images/bg4.jpg"
                alt=""
                width={2245}
                height="100"
                unoptimized
            />
            {/* <a href="https://www.freepik.com/free-photo/artistic-blurry-colorful-wallpaper-background_38064839.htm#page=3&query=background%20gradient&position=0&from_view=search&track=ais&uuid=f2d6e88d-0e5d-48e4-a7a0-1ea4033c232a">Image by user3802032</a> on Freepik */}
            <div className="relative mx-auto max-w-3xl text-center">
                <h2 className="mt-2 text-3xl text-gray-900 font-bold tracking-tight sm:text-4xl">
                    {title}
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-800">
                    {subtitle}
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Button color="dark" href={href}>
                        <span>{cta}</span>
                    </Button>
                </div>

            </div>
        </div>
    )
}
