# Dauria Search

## Overview

Libra is an open-source, Landsat-8 imagery browser. It relies on [landsat-api](https://github.com/developmentseed/landsat-api) and an [AngularJS](https://angularjs.org/)-designed GUI to allow users to browse, sort, and download more than 275 Terabytes of open Landsat imagery.

See [here](http://www.developmentseed.org/blog/2015/01/15/dauria-image-search/),
[here](https://medium.com/@astrodigital/browsing-large-sets-of-satellite-imagery-7096db1a807f), and [here](http://www.developmentseed.org/blog/2015/01/22/announcing-libra/) for more information.

## Setting up your development environment
To set up the development environment for this app, you'll need to install the following on your system:

- [npm](https://www.npmjs.com/)
- [Compass](http://compass-style.org/) & [Sass](http://sass-lang.com/)
- [Grunt](http://gruntjs.com/) ( $ npm install -g grunt-cli )
- [Bower](http://bower.io/) ($ npm install -g bower)

After these basic requirements are met, run the following commands in the root project folder:
```
$ npm install
$ bower install
```

## Running the app
To start the app running, run the following command in the root project folder.

```
$ grunt serve
```
Serves the site at: `http://localhost:9090` (should automatically open in
your browser)

## Future improvements
- Determine a good way to show the total number of results being displayed
- Add animations where applicable
    - When switching into the single result pane
    - When the top filters drop down
- Make the scroll bar look a bit nicer
- Add a way to toggle between various basemaps
- Implement lazy loading for the results pane so not all images are loaded at
the same time
- Search/geocoding
- Different cluster sizes at different zoom levels
- Client size caching of results (TBD)
- Improved stack icons (2-3 circles for multiple results)

## Known issues

- Histograms disappear when opening modal (close filters on modal open for now)
- Date filter clicks back one day when opening for the first time
- When over water where no scenes are returned, error message says '...you zoomed in too much' which isn't technically the exact error
- We currently have an issue when drawing the histograms where we get the dreaded ```Error: $digest already in progress``` in the console. While this doesn't cause any visual issues, it does mean we can't run the test suite.

## Where to go from here?

Now that you have access to all this wonderful imagery, you may be wondering what do next. There are a number of open-source tools you can use to dive into the imagery on a deeper level. A few of them are listed below:

- [landsat-util](https://github.com/developmentseed/landsat-util)
- [GDAL](http://www.gdal.org/) [[Landsat-8 specific tutorial](https://www.mapbox.com/blog/processing-landsat-8/)]
- [QGIS](http://qgis.org) [[Tutorials](http://www.qgistutorials.com)]
- [rasterio](https://github.com/mapbox/rasterio)
