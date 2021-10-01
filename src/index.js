import './base.scss';
import cssVars from 'css-vars-ponyfill';

import './pattern-library/components/Breadcrumb/breadcrumb';
import './pattern-library/components/Button/Button';
import './pattern-library/components/FiltersSelected/filtersSelected';
import './pattern-library/components/ListingItem/ListingItem';
import './pattern-library/components/Pagination/pagination';
import './pattern-library/components/SearchBarHeader/searchBarHeader';
import './pattern-library/components/SearchNoResults/searchNoResults';
import './pattern-library/components/Showing/showing';
import './pattern-library/components/SortBy/sortBy';

import landingLinksJs from './pattern-library/components/LandingLinks/LandingLinks';
import searchBar from "./pattern-library/components/SearchBar/searchBar";

// Fixes css vars on legacy browsers (i.e. IE11)
cssVars();

landingLinksJs();
searchBar();
