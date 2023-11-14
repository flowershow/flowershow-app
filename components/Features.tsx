import React from "react";
import Feature from "./Feature";


interface Props {
    features: {
        title: string,
        description: string,
        link: string,
        imageSrc: string
    }[]
}

export const Features: React.FC<Props> = ({ features }) => {
    return (
        <>
            <div className="prose dark:prose-invert mx-auto max-w-screen-xl px-4 py-6 lg:items-center text-center">
                <h2>Features</h2>
                <p>
                    Here are some of the cool features that are currently supported by
                    Flowershow
                </p>
            </div>

            {features.map((feature, index) => (
                <Feature key={feature.title} feature={feature} index={index} />
            ))}
        </>
    );
}
