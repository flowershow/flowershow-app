---
title: Data Visualization
description: Learn how to craft compelling data visualizations using Excalidraw, Charts, and Maps in Flowershow.
---

Explore various methods to craft compelling data visualizations, including interactive charts, using Obsidian and seamlessly publish your insights with Flowershow.

In this guide you can learn about:

1.  **Excalidraw**: Basic line and bar charts using inline CSV data.
2.  **Flowershow Components**: Using data-rich components like tables and charts.

## Excalidraw

You can create basic charts directly within Excalidraw drawings in Obsidian.

**Notes:**
*   Only line and bar charts are available.
*   Paste only 2 fields (columns) of data; otherwise, Excalidraw might struggle to identify the x and y axes.
*   **Flexibility**: While basic, you can edit the chart as a regular Excalidraw object (resize, change labels manually) to tell your story effectively.

## Flowershow Components

With Flowershow, you can easily add various visual and data-rich components to your datasets or data stories, making them more engaging and insightful.

You can check the full list and API of the available features in our [Storybook](https://storybook.portaljs.org).

### Inserting a component

1.  **Select the desired component** you want to add from the sidebar list in Storybook:

    ![Storybook Sidebar](/assets/storybook-sidebar.png)

2.  Click on **"Docs"**.
3.  Hit **"Show code"** at the bottom right of the showcased feature.

    ![Storybook Code](/assets/storybook-code.png)

4.  **Copy-paste the code** into your markdown file in your GitHub repository / Obsidian vault.
5.  **Update the parameters** (like the CSV URL or title).
6.  **Preview/Sync**: Navigate back to your app/site to see the changes.

> [!NOTE]
> To import data from a file, simply upload your data file (e.g., CSV) to your repository and replace the URL in the copied code. Relative paths are supported.

### Supported Features

You can use several data preview and data visualization components:

*   **Catalog**: If your dataset is part of a larger collection, list related datasets with search and facets.
*   **Excel**: Preview Excel files.
*   **Data Table**: Interactive tables with sorting and filtering.
*   **Iframe**: Embed external content.
*   **PdfViewer**: Display PDF documents.
*   **Line and Bar Charts**:
    *   Plotly charts
    *   VegaLite Charts
*   **Map**: Geospatial visualizations.

### Example: Line Chart

```jsx
<LineChart
  data={{ url: "/assets/global-co2-emissions.csv" }}
  title="Global CO2 Emissions"
  xAxis="Year"
  yAxis="Total"
/>
```
