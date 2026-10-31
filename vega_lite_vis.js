// SECTION 1: Evolution of Music (2 Charts)
var vg_1 = "json/streamgraph.json"; 
var vg_2 = "json/linechart.json";

// SECTION 2: Fan Favourites (4 Charts)
var vg_3 = "json/lollipop.json";
var vg_4 = "json/pictogram.json";
var vg_5 = "json/bumpchart.json";
var vg_6 = "json/barchart.json";

// SECTION 3: Beyond the Collection (3 Charts)
var vg_7 = "json/symbolmap.json";
var vg_8 = "json/donut.json";
var vg_9 = "json/slope.json"

// SECTION 4: Vinyls of Today (2 Maps)
var vg_10 = "json/choroplethmap.json";
var vg_11 = "json/dotmap.json";

// Embed all visualisations into the HTML divs (active ones for Section 1)
vegaEmbed("#vis-1", vg_1, {"actions": false}).catch(console.error);
vegaEmbed("#vis-2", vg_2, {"actions": false}).catch(console.error);

vegaEmbed("#vis-3", vg_3, {"actions": false}).catch(console.error);
vegaEmbed("#vis-4", vg_4, {"actions": false}).catch(console.error);
vegaEmbed("#vis-5", vg_5, {"actions": false}).catch(console.error);
vegaEmbed("#vis-6", vg_6, {"actions": false}).catch(console.error);

vegaEmbed("#vis-7", vg_7, {"actions": false}).catch(console.error);
vegaEmbed("#vis-8", vg_8, {"actions": false}).catch(console.error);
vegaEmbed("#vis-9", vg_9, {"actions": false}).catch(console.error);

vegaEmbed("#vis-10", vg_10, {"actions": false}).catch(console.error);
vegaEmbed("#vis-11", vg_11, {"actions": false}).catch(console.error);