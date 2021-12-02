import './base.scss';
import 'url-polyfill';
import cssVars from 'css-vars-ponyfill';  

/* General Components */
import './components/general/Breadcrumb/breadcrumb';
import './components/general/Button/button';
import './components/general/Header/header';
import './components/general/Hero/hero';
import './components/general/Link/link';
import './components/general/DocumentDownload/documentDownload';

/* Search Components */
import './components/search/CollapsibleCheckbox/collapsibleCheckbox';
import './components/search/FiltersSelected/filtersSelected';
import './components/search/ListingItem/listingItem';
import './components/search/Pagination/pagination';
import './components/search/SearchBarHeader/searchBarHeader';
import './components/search/SearchNoResults/searchNoResults';
import './components/search/Showing/showing';
import './components/search/SortBy/sortBy';
import './components/search/FiltersHeader/filtersHeader';

/* Form Components */
import './components/form/Checkbox/checkbox';
import './components/form/ErrorBox/errorBoxs';
import './components/form/ExternalLink/externalLink';
import './components/form/InputField/inputField';
import './components/form/MessageBox/messageBox';
import './components/form/MultistepFunction/multistepFunction';
import './components/form/Radio/radio';
import './components/form/Tabs/tabs';
import './components/form/TitleAndText/titleAndText';
import './components/form/EmailField/emailField';
import './components/form/Textarea/textarea';

/* Landing Components */
import './components/landing/LandingLinks/landingLinks';
import './components/landing/LargePromoGroup/largePromoGroup';
import './components/landing/LatestTeaser/latestTeaser';
import './components/landing/PromoGroup/promoGroup';
import './components/landing/ServiceLinks/serviceLinks';

/* Layout Components */
import './layout/formLayout/formLayout';
import './layout/twoColumn/twoColumn';
import './layout/fullWidth/fullWidth';
import './layout/articleTwoColumn/articleTwoColumn';

import breadcrumbJs from './components/general/Breadcrumb/breadcrumb';
import pagination from "./components/search/Pagination/pagination";
import searchBar from "./components/search/SearchBar/searchBar";
import sortBy from "./components/search/SortBy/sortBy";

// Fixes css vars on legacy browsers (i.e. IE11)
cssVars();

breadcrumbJs();
pagination();
searchBar();
sortBy();
