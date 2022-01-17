---
name: Developer Workflow
about: Defines all the requirements, setup and coding conventions of this project.
title: ''
labels: enhancement
assignees: ''

---

## Requirements
FSA Pattern Library uses ES6 features, so it is recommended to have a recent version of [Node.js](https://nodejs.org/en/) installed globally. 
You will also need to have [Yarn](https://yarnpkg.com/) installed globally to run the commands (the project was generated using [Yarn](https://yarnpkg.com/)).
These are the only global requirements as this project uses [Webpack](https://webpack.js.org/) in lieu of task runners. 

## Installation
To get the project started, complete the following steps:

- Install [Node.js](https://nodejs.org/en/)
- Install [Yarn](https://yarnpkg.com/) `npm install --global yarn`
- Install project dependencies by running `yarn`

## Workflow summary

This is the workflow in place for this project:
- Base your work on the `develop` branch,
- Create a new feature branch from it,
- While developing, run `yarn storybook` to launch a local instance of storybook,
- Commit all of your changes to this branch,
- Once done, create a PR in Github.

## Folder hierarchy

Every component is compartmentalised in its own section:
- General: used for sitewide components like Header, Footer or Navigation.
- Form: used for components specific to forms like Input fields, Checkboxes or Dropdowns.
- Search: used for components specific to the search page, such as Search field, Filters or Pagination.
- Contact, Landing and Article: used for components specific to these types of content/pages.

Your new component should sit under one of these categories. The folder structure should be as follows:
```
NewComponent
- assets
-- asset.svg
- newComponent.html.twig
- newComponent.js
- newComponent.scss
- newComponent.stories.js
```

The folder name should be in (upper) CamelCase and all the files in (lower) camelCase.
All the assets should be SVGs and grouped in the `assets` folder.

## General coding standards & naming conventions

- All the code should be indented using 2 white spaces.
- The Javascript variables should be named using `camelCase`.
- The Twig variables and properties should be named using `snake_case`.
- The CSS classes should be named following the `BEM` convention.

## JavaScript development

All the Javascript of this project needs to be written in Vanilla Javascript.

This project uses ESLint so it is recommended to install an ESLint extension in your IDE.

The file `index.js` is the entry point for all the assets used by this theme. This file contains imports of the base styling and some IE11 polyfills. These imports should not be removed ever.

NPM dependencies can be imported at the beginning of every JavaScript file with following line of code:
```
import defaultMember from 'module-name'; 
import 'module-name';
```

The css & template files must be imported  at the beginning of every JavaScript file with following lines of code:
```
import './newComponent.html.twig';
import './newComponent.scss';
```

This allows [Webpack](https://webpack.js.org/) to find the files and compile them.

This project uses Babel to transpile modern JavaScript into a form that can be used across browsers.

To export a JavaScript module use the following syntax: 
```
export default function () {
  window.addEventListener('DOMContentLoaded', function () {
    // Your code
  }, { once: true });
}
```

There are number of other really useful ES6 features that can be also used, like:

- Arrows
- Classes
- Template strings
- Destructuring
- Spread
- Block-scoped binding constructs

### Javascript naming conventions

Use camelCase for the name of your functions and variables.

## CSS development

All the CSS of this project is written using SASS.

Upon compilation, all the CSS files are extracted and bundled into one file using [Webpack](https://webpack.js.org/), provided the file is referenced in the Javascript file.

### Units
This project is built using Rems for responsive values such as paddings and margins while Px is reserved for fixed sized components such as borders.

### CSS custom properties

CSS Custom properties can be used in this theme. To support older IE browsers CSS custom properties should only be used inside of a :root selector.

CSS Custom properties are defined at the beginning of the lib.scss file with following line of code:

```
:root {
  --body-font: 'Open Sans', sans-serif;
  --body-normal: 400;
}
```

CSS Custom properties can be reused throughout the CSS files using the var() function.

```
html {
  font-family: var(--body-font);
}
```

### Media Queries

This theme uses a mobile first approach, so your base CSS should be done for mobile and most of your media queries will target the wider screens.

All the different breakpoints have been defined in the lib.scss file:
```
$fsa-xs: 500px;
$fsa-md: 768px;
```

These breakpoints should never change and can be used as reguar SASS variables:
```
@media screen and (min-width: $fsa-lg) {
  width: 100%;
}
```

### Mixins

This project uses the SASS mixins to define any rule that should be widely applied on the project, such as grids.

Since this project needs to be compatible with IE11, we have defined our own grid system which should be applied to every component.
This will also ensure the components behave as expected on all the defined breakpoints.

There is a set of 4 mixins dedicated to the grid:

- `grid-container`: The grid's wrapper. Required.
- `grid-row`: The grid's row. Need to be at least one, even if there is only 1 row in the grid. 
- `grid-cols($count, $basis: 12)`: Defines on how many columns ($count) the element should expand. $basis defines the size of the grid (12 by default, 4 on mobile).
- `cols-push($count, $basis: 12)`: Allows to create a column gap ($count) before the element. $basis defines the size of the grid (12 by default, 4 on mobile).

Here is an example of how to use these mixins:
Given the following HTML
```
<div class="myComponent__wrapper">
  <div class="myComponent__row">
    <div class="myComponent__col">
      <h1>Hello there!</h1>
    </div>
  </div>
</div>
```
Here is the matching SASS
```
.myComponent {
  &__wrapper {
    @include grid-container;
  }
  &__row {
    @include grid-row;
  }
  &__col {
    @include grid-cols(4, 4);
    @media screen and (min-width: $fsa-lg) {
      @include grid-cols(8); // 12 is a default value, expands on 8 columns out of 12
      @include cols-push(2); // pushing the element by 2 columns. Component will be displayed from column 3 to 10
    }
  }
}
```

## Selectors and nesting

Custom selectors should be declared whenever possible using the SASS nested syntax.

Taking the previous example:
```
.myComponent {
  &__wrapper {
    @include grid-container;
  }
  &__row {
    @include grid-row;
  }
  &__col {
    @include grid-cols(4, 4);
    @media screen and (min-width: $fsa-lg) {
      @include grid-cols(8); // 12 is a default value, expands on 8 columns out of 12
      @include cols-push(2); // pushing the element by 2 columns. Component will be displayed from column 3 to 10
    }
  }
}
```

Here is how the generated CSS will look like:

```
.myComponent .myComponent__wrapper {
  // rules of the mixin
}
.myComponent .myComponent__row {
  // rules of the mixin
}
.myComponent .myComponent__col {
  // rules of the mixin
}
```

## CSS Naming conventions
This theme uses BEM as much as possible.

## Vector assets

All the assets in this project should be SVG files. 

To make sure each component is independent and modular, the SVG files a component uses should be placed in an `assets` folder at the component's level.

## Checklist before opening a PR

Before opening a PR, please make sure:
- to import your scss and twig files in the javascript file. Without this, Webpack won't be able to compile them.
- to import your newComponent in the index.js file.
- your folder hierarchy follows the proper structure.
- your code follows the coding standards and naming conventions defined.
- your code has been tested as AA accessibility compliant to the WCAG 2.1 AA standard.
- your code has been tested in all the browsers listed in the [GDS browser's list](https://www.gov.uk/service-manual/technology/designing-for-different-browsers-and-devices), including IE11.
- your code has been tested in all the different screensizes defined.
- Provide a thorough description of your component, its usage with screenshots.
