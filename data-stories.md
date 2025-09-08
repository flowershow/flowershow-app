---
title: Tell data-rich stories with Markdown
description: Mix prose with live tables and charts. Flowershow turns your markdown into beautiful, data-driven posts that render local or external CSVs with reusable table and plotting components.
layout: plain
showToc: false
showEditLink: false
showComments: false
---

<div className="bg-white py-12 sm:py-24">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-3xl text-center">
      <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
        The best way to create markdown-based <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-yellow-500">data-rich stories</span>
      </h1>
      <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
        Write like you always do—then drop in live tables and charts. Flowershow renders local or external CSV files, so your posts stay readable <em>and</em> explorable.
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <a
          href="https://cloud.flowershow.app/"
          className="rounded-md bg-orange-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow hover:bg-orange-300"
        >Start building for free</a>
      </div>
    </div>
  </div>
</div>

<div className="bg-white py-8 sm:py-12">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-3xl lg:text-center">
      <h2 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">Why Flowershow for Data-Rich Stories?</h2>
      <p className="mt-6 text-lg/8 text-gray-600">Blend narrative and numbers without a complex pipeline. Flowershow keeps your markdown front and center while giving you data-aware components that just work.</p>
    </div>
    <div className="mx-auto mt-16 max-w-3xl sm:mt-20 lg:mt-24 lg:max-w-5xl">
      <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-16">
        <div>
          <dt className="font-semibold text-gray-900">🧩 MDX-first authoring</dt>
          <dd className="mt-2 text-gray-600">Write in markdown; drop in table/plot components where you need them. Keep your content structure and frontmatter.</dd>
        </div>
        <div>
          <dt className="font-semibold text-gray-900">📊 CSV to Table</dt>
          <dd className="mt-2 text-gray-600">Render local or external CSVs as interactive tables with sorting, filtering, and pagination.</dd>
        </div>
        <div>
          <dt className="font-semibold text-gray-900">📈 Quick Charts</dt>
          <dd className="mt-2 text-gray-600">Line, bar, area, scatter—plot directly from CSVs with declarative props. No build steps or notebooks required.</dd>
        </div>
        <div>
          <dt className="font-semibold text-gray-900">🗂 Zero configuration</dt>
          <dd className="mt-2 text-gray-600">Keep your existing folder structure. Flowershow works with any markdown organization.</dd>
        </div>
        <div>
          <dt className="font-semibold text-gray-900">🔁 Always up-to-date</dt>
          <dd className="mt-2 text-gray-600">Point components at a CSV path or URL; update the file and your story updates with it.</dd>
        </div>
        <div>
          <dt className="font-semibold text-gray-900">🔍 SEO-friendly</dt>
          <dd className="mt-2 text-gray-600">Clean markup, meta tags, and social cards so your work is discoverable and shareable.</dd>
        </div>
      </dl>
    </div>
  </div>
</div>

<div className="overflow-hidden bg-white py-8 sm:py-12">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
      <div className="lg:pr-8 lg:pt-4">
        <div className="lg:max-w-lg">
          <h2 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Interactive Table from CSV</h2>
          <p className="mt-6 text-lg/8 text-gray-600">Point to a local or remote CSV and render a searchable, sortable table in one line of MDX.</p>
          <pre className="mt-6 overflow-x-auto rounded-lg bg-gray-50 p-4 text-sm leading-6 text-gray-800 ring-1 ring-gray-200">
          {`<FlatUiTable
              data={{ url: "/assets/global-co2-emissions.csv" }}
          />`}
          </pre>
        </div>
      </div>
      <FlatUiTable data={{ url: "/assets/global-co2-emissions.csv" }} />
    </div>
  </div>
</div>

<div className="overflow-hidden bg-white py-8 sm:py-12">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
      <div className="lg:pr-8 lg:pt-4">
        <div className="lg:max-w-lg">
          <h2 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Interactive Table from CSV</h2>
          <p className="mt-6 text-lg/8 text-gray-600">Create charts with a couple of props. Pull columns by name, pick a chart type, and you’re done.</p>
          <pre className="mt-6 overflow-x-auto rounded-lg bg-gray-50 p-4 text-sm leading-6 text-gray-800 ring-1 ring-gray-200">
{`<LineChart 
  data={{ url: "/assets/global-co2-emissions.csv" }}
  title="Global CO2 Emissions from fossil-fuels"
  xAxis="Year"
  yAxis="Total"
/>`}
          </pre>
        </div>
      </div>
      <LineChart 
        data={{ url: "/assets/global-co2-emissions.csv" }}
        title="Global CO2 Emissions from fossil-fuels"
        xAxis="Year"
        yAxis="Total"
      />
    </div>
  </div>
</div>




