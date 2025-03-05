# Blog

New theme environment for University of Stirling Blog Version 2.0.0

## Development

Changes to this theme will affect all child themes based on this. Changes to be
pushed back to the repository so that other installations can be updated. This theme
uses NPM for dependency management and asset compilation.

First time only, install dependencies:

```
cd Documents/Stirling/wp-theme-uos-2/wp-theme-uos-2
npm install
```

Note: DO NOT edit dist/css/style.css and dist/js/script.js directly! Only edit scss and js/\*.js files.
Changes will be overwritten when next compiled.

Now that dependencies have been install, to edit styles and javascript, run:

```
cd Documents/Stirling/wp-theme-uos-2/wp-theme-uos-2
npm run dev
```

- runs a server
- hot reloads
- compiles sass

## Build for production

```
npm run build
```

- creates minified versions of the scripts

# University of Stirling theme

This is the theme for a basic University of Stirling Wordpress blog. It works as
a stand alone theme with branded header and footer with basic post styling.

## Installing the theme

1. `cd wp-content/themes`
2. `git clone https://gitlab.com/stiracuk/wp-theme-uos.git`

Activate the Theme through the 'Themes' menu in WordPress or create a child theme.

## Required plugins

The banner images and category images are managed with the [Unique Headers](https://en-gb.wordpress.org/plugins/unique-headers/) plugin.
Install and activate this plugin.

## Creating menus

There are two menu locations registered for Main Menu (news, research, etc) and
Top Right Menu (portal, search) menu links

Create new menus for these locations in Appearance > Menus for links to appear. If
menu items are categories, create those first in Posts > Categories.

## Header images

The default header image for the blog can be selected from Appearance > Header. From here,
select the header image from media library or upload a new one to appear as the header.

To have a different header image for each category, go to the the category edit screen
and set the field for "Upload header image".

Post pages will use the Featured Image field for the banner. This ensures that old
posts from existing blogs will have a banner image.

## Logo

The logo can be changed in Appearance > Customize > Display. If no logo is set, the default
logo as defined in the template (header.php) will be used.
