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
import './components/search/CollapsibleCheckbox/collapsibleCheckbox';
import './components/form/ErrorBox/ErrorBox';
import './components/form/TitleAndText/titleAndText';
import './components/form/Checkbox/checkbox';
import './components/form/Radio/radio';
import './components/landing/LandingLinks/LandingLinks';
import './layout/twoColumn/twoColumn';
import './layout/formLayout/formLayout';
import './layout/fullWidth/fullWidth';

import searchBar from "./components/search/SearchBar/searchBar";
import breadcrumbJs from './components/general/Breadcrumb/breadcrumb';

// Fixes css vars on legacy browsers (i.e. IE11)
cssVars();
searchBar();
breadcrumbJs();
