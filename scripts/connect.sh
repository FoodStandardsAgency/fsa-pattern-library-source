#!/bin/bash

repo_root=$(pwd)

source "$repo_root/.env"

while true; do
  echo 'Building asset';
  yarn build
  echo 'Finished building asset';
  rm -r ~/Sites/food.gov.uk/vendor/food-standards-agency/fsa-frontend/dist/;
  echo 'Copying dist to' ${DRUPAL_PATTERN_LIBRARY_URL};
  cp -r ~/Sites/fsa-pattern-library-source/dist ${DRUPAL_PATTERN_LIBRARY_URL}
  echo 'Finished copying dist';
  sleep 10
done