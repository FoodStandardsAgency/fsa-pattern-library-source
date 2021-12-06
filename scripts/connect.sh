#!/bin/bash
while true; do
  echo 'Building asset';
  yarn build
  echo 'Finished building asset';
  rm -r ~/Sites/food.gov.uk/vendor/food-standards-agency/fsa-frontend/dist/;
  echo 'Copying dist to  ~/Sites/food.gov.uk/vendor/food-standards-agency/fsa-frontend/dist/';
  cp -r ~/Sites/fsa-pattern-library-source/dist ~/Sites/food.gov.uk/vendor/food-standards-agency/fsa-frontend/dist/
  echo 'Finished copying dist';
  sleep 10
done