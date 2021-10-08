import './base.scss';
import cssVars from 'css-vars-ponyfill';

import './components/Breadcrumb/breadcrumb';
import './components/Button/Button';
import './components/FiltersSelected/filtersSelected';
import './components/ListingItem/ListingItem';
import './components/Pagination/pagination';
import './components/SearchBarHeader/searchBarHeader';
import './components/SearchNoResults/searchNoResults';
import './components/Showing/showing';
import './components/SortBy/sortBy';

import landingLinksJs from './components/LandingLinks/LandingLinks';
import searchBar from "./components/SearchBar/searchBar";

// Fixes css vars on legacy browsers (i.e. IE11)
cssVars();

landingLinksJs();
searchBar();
