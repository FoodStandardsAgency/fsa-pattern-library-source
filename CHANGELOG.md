# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Upcoming release template] - 1971-11-03

### Added
-

### Changed
-

### Deprecated
- 

### Removed
- 

### Fixed
-

### Security
-


## [0.0.75] - 2022-03-24 (Changes in Chart & Related content components)

### Changed
- Related content : top text, item images and optional links on items added.
- Make Chart source optional

### Fixed
- The Chart image should resize to its container


## [0.0.74] - 2022-03-22 (New Components, updates and fixes)

### Added
- Add General/DropdownMenu and Article/WebToolStudiesTable components
- Table examples in text block

### Changed
- Updated the links in the Cookie Banner component to have a similar behavior as the ones in the Temporary message component
- Changed bottom padding for the MyHACCP version of the header
- Change focus order and remove submenu from secondary menu in contact form

### Fixed
- Allow tables to have headers in different positions


## [0.0.73] - 2022-03-21 (Fixes for Footnotes & chart block)

### Changed
- Hide footnotes block if no links

### Fixed
- Updating chartblock js logic to work with multiple elements


## [0.0.72] - 2022-03-21 (Various fixes)

### Added
- Polyfill for download attribute in IE11
- FHRS's local authority component
- FHRS layout
- FHRS page

### Changed
- Add download option to button component
- Add a 'by search' variation of the local authority component

### Fixed
- Revision log component add missing border
- Hide arrow from screenreaders on breadcrumb if the arrow isn't visible
- Use correct variable for generating the previous label's name in the multipage function


## [0.0.71] - 2022-03*18 (Revision log component)

### Added
- Add revision log update to article hero component
- Add new revision log component


## [0.0.70] - 2022-03-17 (Footnotes updated and fixes)

### Fixed
- Updated external link styling in navigation
- Fixed styling on the footnotes
- Fixed footnote example


## [0.0.69] - 2022-03-17 (MyHACCP changes)

### Changed
- Styling fixes for the header component (MyHACCP)
- Modified Article Hero component to be able to show only the title without buttons


## [0.0.68] - 2022-03-16 (Fixing browser issues)

### Changed
- Added postcss addon to storybook

### Fixed
- Fixing side effect on Error box
- Fixing linting issue due to prefix (added because autoprefixer doesn't generate it)
- Fix for object-fit-image polyfill


## [0.0.67] - 2022-03-16 (New components, updates & fixes)

### Added
- Add external link example to the subject listing section
- Site map component

### Changed
- Remove underline on external links in subject listing

### Fixed
- Add link styling to form input and error box for login
- Removed top padding for My HACCP variation of the header, as per designs.


## [0.0.66] - 2022-03-15 (Pipeline fix)

### Fixed
- Fixing pipeline error


## [0.0.65] - 2022-03-15 (Added features to existing components and bugfixes)

### Added
- Added a description below the chart title

### Changed
- Hide map button and field on IE11

### Fixed
- Add margin to author div in the quote block
- Improve screen reader accessibility on the navigation menu
- Add css-vars-ponyfill back in to fix scss imports on Storybook
- Change 'initial' to 'transparent' so that hover states look correct on IE11
- Add names to form input/submit buttons for Drupal form API
- Prevent text overflow on error boxes on IE11
- Changing example to show a table instead of a random text
- Fixing button styling when nested in textBlock
- Fixing an error with the table element


## [0.0.64] - 2022-03-10 (New components in chartblock and bugfixes)

### Added
- Switch between table/data view button for ChartBlock
- Source link for ChartBlock

### Changed
- Fix the margins of ChartBlock download buttons and the size of ChartBlock placeholder image.
- Add ChartBlock to the simple article page
- Change the params in searchNoResults to allow hiding of 'remove all filters' link
- Updated styling on searchNoResults
- Hide filters header if there are no results
- Fixed Header contact buttons aligned on left for wide screens

### Fixed
- Fixed the placeholder in input field


## [0.0.63] - 2022-03-09 (New Skip to main content component and bugfixes)

### Added
- Skip to main content component

### Changed
- Change the template of footnotes.
- Changed the static storybook build to not display warning messages (prod)
- Moved element-closest-polyfill in index.js as it's used in several places
- Add Skip to Main Content link examples to landing pages
- Increase z-index of skip link so that it sits on top of cookie banner in Drupal
- Hide temporary message on mobile menu
- Added a placeholder option on the input field

### Removed
- Removed CssPonyfill as it's been replaced by postcss-variables

### Fixed
- Error in Pdf buttons, multipage guide variant
- Prevent icon from cutting off on small screens in the quote block
- Fixed font-size in input field
- Header link focus states

## [0.0.62] - 2022-03-08 (Fixing spacing, Chart component)

### Added
- Chart component
- Footnotes component

### Changed
- Add "_target" attribute for Button component.
- Remove DOMContentFirstLoad to fix tables on Drupal

### Fixed
- Fixed spacing issues on search elements
- Fixed centered layout spacing
- Fixed alignment on Article Hero when no type is displayed


## [0.0.61] - 2022-03-07 (Fixing spacing & css variables)

### Fixed
- Fixed few layout and spacing issues
- Fixed css variables for IE11


## [0.0.60] - 2022-03-04 (Table component)

### Added
- Product details component
- Allergens table component

### Changed
- Text block component. Add styling for table elements.
- articleAlert example page. Add Allergens Table and TextBlock table examples.


## [0.0.59] - 2022-03-03 (Submit searchbar & fixes)

### Fixed
- Fixed submit action for the search bar
- Fixed width of element in header for IE11


## [0.0.58] - 2022-03-03 (Spacing fixes & amends)

### Fixed
- Fixed spacing between the search elements
- Fixed the spacing in the header, following the MyHACCP variant
