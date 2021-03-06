# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).


## [Upcoming release template] - 1971-11-03

### Added
-

### Changed
- Add data-default-value to dropdowns for React
- Add map button and placeholder to business hero component
- Add breadcrumb example to business search page
- Put local authority map regions in a more logical order
- Change local authority map highlight color to yellow

### Deprecated
-

### Removed
-

### Fixed
- Fix issue where enter in search boxes wasn't submitting
- Add label and submit types
- Allow business search input to take up full width when location is selected
- Add private business text to business hero
- When hygiene rating/status dropdowns are used in the ratings search box, update the associated radio button
- Add focus and hover states to the business hero map button

### Security
-


## [1.0.7] - 2022-07-08 (Add map functionality and default values for React site)

### Changed
- Add data-default-value to dropdowns for React
- Add map button and placeholder to business hero component

### Fixed
- Fix issue where enter in search boxes wasn't submitting
- Add label and submit types
- Allow business search input to take up full width when location is selected


## [1.0.6] - 2022-07-08 (Search bar fixes and refactor of DomContentLoaded functions)

### Changed
- Remove DomContentLoaded from individual components and move all into a single call

### Fixed
- Add data-value to search bar for React


## [1.0.2] - 2022-06-23 (FHRS components)

### Added
- FHIS badges
- New layout for the Local Authority Search page
- Added image-resizer library for the local authority map component
- Add mini variation of the hero for FHRS landing page
- Welsh example of the mini hero

### Changed
- Implement more than one type of fhis badge
- Add description option to business hero
- Add additional examples to FHRS page
- Reorganise FHRS Search card folders for clarity
- Define .regional-variation CSS class.

### Fixed
- Local authority map coordinates change on resize
- Mini hero image no longer cuts off inbetween screen sizes


## [1.0.1] - 2022-06-06 (MyHACCP translation bugfix and text change for FHRS)

### Changed
- Update text on FHRS Digital Badge page
- Added more comprehensive translation options to the multigroup and multifield components.


## [1.0.0] - 01-06-2022 (MyHACCP and FHRS component fixes)

### Added
- A new param for the search bar to exclude form html from the output for embedding into other forms.

### Changed
- Adjust the ratings search box layout so that the inputs are inline
- Add title prefix option to business hero
- Add a second version of the ratings search box for local authority searches
- Add subtitle option to titleAndText component

### Deprecated
-

### Removed
-

### Fixed
- Fixed incorrect handling of default value for the search bar.
- Fix broken text on fhrs api page
- Update margins on image section component
- Improved accessibility on ratings search box (use button instead of link)

### Security
-


## [0.1.10] - 2022-05-31 (new FHRS badge download component and fixes to the search box layouts)

### Added
- Add new badge download component

### Changed
- Adjust the ratings search box layout so that the inputs are inline
- Use unique ID for subgroups in navigation


## [0.1.9] - 2022-05-25 (new FHRS components and bugfixes on existing PL components)

### Added
- Add ratingsSearchBox for FHRS
- Add form field type (toggle button)
- Update titleAndText to include underlined option

### Changed
- Replace arrows when there's an external link in the promo group and service link components

### Fixed
- Fixing Sidebar overflow when reaching bottom of page and when reaching top of page when page already scrolled
- Fix disabled field opacity for accessibility


## [0.1.8] -  2022-05-16 (Updating input and text fields to have char limit and disabled/readonly features)

### Changed
- Update textarea and input form field types to add character limits
- Update textarea and input form field types to allow disabled and readonly settings


## [0.1.7] -  2022-05-16 (FHRS components, fixes and new features)

### Added
- Add display rating variations to the explanationBlock component
- Add a displayRating to the FHRS company page
- Add a legacy badge story to textAndTitle component
- Add a fhrsCompanyDigitalBadge page that include businessHero and the legacyBadge component
- Add WelshBusinessRatingAwaited story to searchCard component
- A FHRS home page.
- A FHRS version of the promoGroup component. Added this to the FHRS home page.
- A titleAndDescription component shared between latestTeaser and promoGroup.

### Changed
- Remove underline and color from external links in promo-group component
- Add text styling to description text in "TitleAndText component"

### Fixed
- Fix issue with invalid json in conditionals
- Fix issue where dropdown id was being set with extra "" and causing JS error


## [0.1.6] - 2022-05-09 (Ignore p tag in list)

### Fixed
- If there's a `<p>` tag in a list, ignore it and display its contents


## [0.1.5] - 2022-05-09 (Fix max-width images in content layout)

### Fixed
- Fixing max width of elements in content-layout-right (mainly for images)


## [0.1.4] -2022-05-09 (Fix max-width images in content layout)

### Fixed
- Fixing max width of elements in content-layout-right (mainly for images)


## [0.1.3] - 2022-05-05 (Fix HACCP element)

### Fixed
- Delete all id attributes for all inputs in multifieldGroup component to avoid problems with accessibility.


## [0.1.2] - 2022-05-04 (Fixing badge component and updating MultifieldGroup component)

### Changed
- Change a way to store data-items in multifieldGroup component.

### Fixed
- Include badge component into the build process.


## [0.1.1] - 2022-05-03 (New FHRS components and various fixes)

### Added
- FHRS searchCard component
- FHRS badge twig template
- A Scss Mixin for FHRS badges

### Changed
- Split the FHRS page into FHRS Company page and FHRS Search page
- Changed FHRS businessHero rating identifiers to comply with the API
- Changed FHRS businessHero styling to use the new mixin
- Changed FHRS businessHero divider from dots to a thin border

### Fixed
- Fix problems of radio inputs in multivalueField.


## [0.1.0] - 2022-04-29 (Fix for webToolProgressBar component)

### Fixed
- Improved styles for ".sr-desktop" class in webToolProgressBar component.


## [0.0.102] - 2022-04-27 (Fixing HACCP header)

### Fixed
- Missing user links on HACCP header


## [0.0.101] - 2022-04-27 (Update on HACCP component)

### Changed
- Added "label_prefix" property for items of webToolProgressBar component.


## [0.0.100] - 2022-04-26 (Various updates on PL, HACCP & FHRS components)

### Added
- Added a fhrs variation to the header component
- Added the fhrs header to the fhrs page

### Changed
- Add dynamic years array rather than generating the list from the start_year

### Fixed
- Fixed toggle problem on mobile header
- Made 'home' link visible on mobile header
- Set different IDs for inputs in multivalueField component.
- Avoid using the same IDs in multifieldGroup component.


## [0.0.99] - 2022-04-25 (Minor changes on file upload component)

### Changed
- Made file upload widget title not clickable
- Removed tab index from the hidden file input


## [0.0.98] - 2022-04-22 (New file upload component, few fixes and IE11 performances)

### Added
- File upload widget.
- Add a global variable to preview.js so that we know if JS is running in Storybook

### Fixed
- Fix slow loading speed on IE11
- Fixed styles for frozen state of multifieldGroup component.
- localGovernment component logo's horizontal overflowing.
- Use two different logos for the two localGovernment components on the FHRS page.
- Make businessHero component's hyperlinks underlined


## [0.0.97] - 2022-04-20 (Fix error handling for multifield group component)

### Fixed
- Proper error handling for radio inputs for multifieldGroup component.
- Delete an empty H2-label for multifieldGroup component to avoid problems during accessibility testing.


## [0.0.96] - 2022-04-19 (Language options for business hero and multifield group changes)

### Added
- FHRS' businessHero component in English and Welsh versions.
- Support for using a special template for 1st item in multiFieldGroup component.

### Changed
- Handle radio elements in multifieldGroup component.


## [0.0.95] - 2022-04-14 (Multifield fixes)

### Changed
- Redesigned elements for multivalueField component.
- Changed logic of attaching for webToolProgressBar.

### Fixed
- The initial process for every multifieldGroup will be run only once.


## [0.0.94] - 2022-04-13 (UUID package and tooltip handling)

### Added
- Add UUID package.

### Changed
- Handling tooltips components in "dynamic" mode.


## [0.0.93] - 2022-04-12 (0.0.92 failed - re-releasing)


## [0.0.92] - 2022-04-12 (0.0.91 failed - re-releasing)



## [0.0.91] - 2022-04-12 (Dropdown: Duplicate value in data-value for react app)

### Changed
- Dropdown: Duplicate value in data-value for react app


## [0.0.90] - 2022-04-12 (various fixes on PL and HACCP components)

### Changed
- moving (required) closer to the field label
- Add "frozen steps" state for multifieldGroup component.
- Add support for a select tag in multifield group component.
- Replacing See more by more in in navigation
- Add placeholder prop for multifieldGroup.

### Fixed
- Fix double listening for multivalue field component.


## [0.0.89] - 2022-04-08 (various fixes on PL and HACCP components)

### Fixed
- Putting back the padding on the search no results component.
- Fixed issue with not displaying html markup on the Related Content block description.
- Fixed top margin for Related Content block with markup.
- Adapt Web Tool studies table.
- Adapt Progress bar.
- Tooltip component.


## [0.0.88] - 2022-04-08 (HACCP changes & new component)

### Added
- Develop "updateErrors" event for multifieldGroup component.

### Changed
- Adapt styles for tooltip and guidance popup.


## [0.0.87] - 2022-04-07 (Accessibility fixes and updates on components)

### Changed
- Related content - inline links within items have the correct link style.
- Implement the logic of "error inputs" for multifield groups.
- Adjust the logis of multifield groups generally.

### Fixed
- Fixing accessibility issues.


## [0.0.86] - 2022-04-05 (Accessibility fix and improvement)

### Changed
- Improve guidance popup and a little fix for errorbox.

### Fixed
- Fixed some accessibility issues on the dropdown menu component.


## [0.0.85] - 2022-04-05 (fixes on HACCP components)

### Changed
- Adapt styles for guidance popup component.
- Say open/close for tooltip component.
- Adapt webToolProgressBar component.


## [0.0.84] - 2022-04-04 (fixes on HACCP components)

### Changed
- Local authority anchor links will wrap when it overflows
- Improve the behavior of multivalueField component.
- Update styles for "save page" component.
- Update styles for progress bar component.
- Update tooltip component.

### Fixed
- Revision log fix heading from h4 to h4 and give correct font.


## [0.0.83] - 2022-03-31 (HACCP components & fixes)

### Added
- Guidance Popup component.

### Changed
- Fix color in tooltip component for "error input" case.
- Improvements for webToolStudiesTable component.


## [0.0.82] - 2022-03-31 (HACCP components)

### Added
- Add multivalueField and multifieldGroup components.

### Changed
- Buttons, multistepFunction and saveProgress components are supports id attribute.

### Removed
- Callbacks support.


## [0.0.81] - 2022-03-30 (Import typo)

### Fixed
- Import typo


## [0.0.80] - 2022-03-30 (Fixes and removing "react" variants)

### Changed
- Add callbacks for saveProgress action buttons.
- Updated webToolStudiesTable component.
- Added markup field to allow other types of element to be children on the itembs block.
- Adapted the components which had "react" variants to handle both options
- Updated all the include paths to be from @components

### Removed
- Removed all the "react" specific templates


## [0.0.79] - 2022-03-30 (HACCP components & fixes)

### Added
- White logo for expanded primary navigation for MyHACCP.
- Add haccp namespace and move webtool components to there.
- Add saveProgress component.

### Changed
- Added missing placeholder to the search bar for MyHACCP version of the header.
- Revision log added article simple page
- Revision log styling fixes
- Related content remove image, as not needed.

### Fixed
- Removed unneeded right padding for the external links in the footer navigation.


## [0.0.78] - 2022-03-29 (New and updated HACCP components)

### Added
- Add Form/Tooltip component.

### Changed
- Add a 'by search' variation of the local authority component.
- InputField, Radio, Checkbox, Dropdown, Textarea components.
- Create a wrapper for DOMContentLoaded and fix the events behavior.


## [0.0.77] - 2022-03-28 (Added webtoolprogressbar & reexporting sitemap)

### Added
- Add Article/WebToolProgressBar component.

### Fixed
- Missing Sitemap component.


## [0.0.76] - 2022-03-25 (New FHRS components, updated components)

### Added
- FHRS's local authority component
- FHRS layout
- FHRS page

### Changed
- Make Chart source optional
- Make top section of revision log open rev log on click
- Revision log now closed by default

### Fixed
- The Chart image should resize to its container


## [0.0.75] - 2022-03-24 (Changes in Chart & Related content components)

### Changed
- Related content : top text, item images and optional links on items added.
- Make Chart source optional

### Fixed
- The Chart image should resize to its container


## [0.0.74] - 2022-03-22 (New Components, updates and fixes)

### Added

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

### Changed

-

### Deprecated

-

### Removed

-

### Fixed

-

### Security

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

### Changed

- Add download option to button component

### Fixed

- Revision log component add missing border
- Hide arrow from screenreaders on breadcrumb if the arrow isn't visible
- Use correct variable for generating the previous label's name in the multipage function

## [0.0.71] - 2022-03\*18 (Revision log component)

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

- Add "\_target" attribute for Button component.
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
