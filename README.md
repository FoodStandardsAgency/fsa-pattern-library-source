# FSA Pattern Library

The pattern library for the Food Standards Agency.

This repository is for developing patterns for use with food.gov.uk or related services.

## Dependencies

Yarn
Node 14

## Quick start

Use `yarn` to install followed by: 

* `yarn storybook` to load a local instance of storybook on http://localhost:6006/
* `yarn build-storybook` to build a local static version of storybook (This runs automatically on push and updates https://github.com/FoodStandardsAgency/fsa-pattern-library)
* `yarn build` to build compiled js and css assets. (This runs automatically on push and updates https://github.com/FoodStandardsAgency/fsa-pattern-library-assets)

## Running locally 
If you want to use Storybook with the main site locally, copy `.env.local` into `.env` and 
change the DRUPAL_PATTERN_LIBRARY_PATH to the location of the pattern library folder in your Drupal project. 

Then run `make local` to build locally.
```
make local
```