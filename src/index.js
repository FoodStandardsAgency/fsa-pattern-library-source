import './base.scss';
import 'url-polyfill';
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
import './components/forms/ErrorBox/ErrorBox';
import './components/form/TitleAndText/titleAndText';
import './components/form/Checkbox/checkbox';
import './layout/twoColumn/twoColumn';
import './layout/formLayout/formLayout';
import './components/landing/LandingLinks/LandingLinks';

import searchBar from "./components/search/SearchBar/searchBar";
import sortBy from "./components/search/SortBy/sortBy"
import pagination from "./components/search/Pagination/pagination";

// Fixes css vars on legacy browsers (i.e. IE11)
cssVars();
searchBar();
sortBy();
pagination();
