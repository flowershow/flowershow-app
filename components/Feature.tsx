import React from "react";
import Link from "next/link";

interface FeatureProps {
  feature: {
    title: string;
    description: string;
    link?: string;
    imageSrc: string;
  };
  index: number;
}

export default function Feature({ feature, index }: FeatureProps) {
  const isEven = index % 2 === 0;
  
  return (
    <section 
      className="overflow-hidden mt-8 sm:grid sm:grid-cols-2 sm:items-start"
      aria-labelledby={`feature-${index}`}
    >
      <div className={`p-8 ${!isEven ? 'order-2' : ''}`}>
        <div className="mx-auto max-w-xl text-center sm:text-left">
          <h2 
            id={`feature-${index}`}
            className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl"
          >
            {feature.title}
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 md:mt-6 sm:block">
            {feature.description}
          </p>
          { feature.link && (
          <div className="mt-6 md:mt-8">
            <Link
              href={feature.link}
              className="inline-flex items-center text-sky-600 hover:text-sky-700 hover:underline font-medium"
              aria-label={`Learn more about ${feature.title}`}
            >
              Learn more
              <svg 
                className="ml-2 w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
          )}
        </div>
      </div>
      <img
        alt={feature.title}
        src={feature.imageSrc}
        className={`lg:max-h-[25rem] ${!isEven ? 'order-1' : ''}`}
        loading={index < 2 ? "eager" : "lazy"}
      />
    </section>
  );
}
