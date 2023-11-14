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
                src="/images/cta-bg.jpg"
                alt=""
                width={2245}
                height="100"
                unoptimized
            />
            <div className="relative mx-auto max-w-3xl text-center">
                <h2 className="mt-2 text-3xl text-primary font-bold tracking-tight sm:text-4xl">
                    {title}
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary">
                    {subtitle}
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Button href={href}>
                        <span>{cta}</span>
                    </Button>
                </div>

            </div>
        </div>
    )
}
