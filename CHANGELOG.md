# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).


## [Upcoming release] - 1971-11-03

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


## [Upcoming release] - 1971-11-03

### Added
- Add external link example to the subject listing section
- Add new revision log componenet

### Changed
- Remove underline on external links in subject listing

### Deprecated
- 

### Removed
- 

### Fixed
- Add link styling to form input and error box for login

### Security
- 


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