import './base.scss';
import cssVars from 'css-vars-ponyfill';

import './components/general/Breadcrumb/breadcrumb';
import './components/general/Button/Button';
import './components/search/FiltersSelected/filtersSelected';
import './components/search/ListingItem/ListingItem';
import './components/search/Pagination/pagination';
import './components/search/SearchBarHeader/searchBarHeader';
import './components/search/SearchNoResults/searchNoResults';
import './components/search/Showing/showing';
import './components/search/SortBy/sortBy';
import './components/form/Checkbox/checkout';

import landingLinksJs from './components/landing/LandingLinks/LandingLinks';
import searchBar from "./components/search/SearchBar/searchBar";

// Fixes css vars on legacy browsers (i.e. IE11)
cssVars();

landingLinksJs();
searchBar();
