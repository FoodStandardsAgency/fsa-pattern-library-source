import './base.scss';
import 'url-polyfill';
import 'dwnld-attr-polyfill';
import objectFitImages from 'object-fit-images';
import 'element-closest-polyfill';

/* General Components */
import './components/general/Breadcrumb/breadcrumb';
import './components/general/Button/button';
import './components/general/Header/header';
import './components/general/Hero/hero';
import './components/general/Link/link';
import './components/general/SiteMap/siteMap';
import './components/general/ExternalLink/externalLink';
import './components/general/MailLink/mailLink';
import './components/general/Footer/footer';
import './components/general/Feedback/feedback';
import './components/general/CookieBanner/cookieBanner';
import './components/general/TemporaryMessage/temporaryMessage';
import './components/general/NationalArchiveLink/nationalArchiveLink';
import './components/general/ErrorResponse/errorResponse';
import './components/general/SkipToMainContent/skipToMainContent';
import navigation from './components/general/Navigation/navigation';
import header from './components/general/Header/header';
import dropdownMenu from './components/general/DropdownMenu/dropdownMenu';
import guidancePopup from './components/general/GuidancePopup/guidancePopup';

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
import './components/search/RatingCta/ratingCta';
import datepicker from './components/search/Datepicker/datepicker';
import accordion from './components/search/Accordion/accordion';

/* Form Components */
import './components/form/Checkbox/checkbox';
import './components/form/Dropdown/dropdown';
import './components/form/ErrorBox/errorBoxs';
import './components/form/MessageBox/messageBox';
import './components/form/MultistepFunction/multistepFunction';
import './components/form/Radio/radio';
import './components/form/Tabs/tabs';
import './components/form/TitleAndText/titleAndText';
import './components/form/EmailField/emailField';
import './components/form/Step/step';
import './components/form/FileUpload/fileUpload';
import mapField from './components/form/MapField/mapField';
import tooltip from './components/form/Tooltip/tooltip';
import multivalueField from './components/form/MultivalueField/multivalueField';
import multifieldGroup from './components/form/MultifieldGroup/multifieldGroup';
import toggleButton from './components/form/ToggleButton/toggleButton';
import inputField from './components/form/InputField/inputField';
import textArea from './components/form/Textarea/textarea';

/* Landing Components */
import './components/landing/LandingLinks/landingLinks';
import './components/landing/LargePromoGroup/largePromoGroup';
import './components/landing/LatestTeaser/latestTeaser';
import './components/landing/PromoGroup/promoGroup';
import './components/landing/ServiceLinks/serviceLinks';
import './components/landing/CampaignBlock/campaignBlock';
import './components/landing/LandingText/landingText';
import './components/landing/LandingTitle/landingTitle';
import './components/landing/TitleAndDescription/titleAndDescription';

/* Contact Components */
import './components/contact/HelpSecondaryMenu/helpSecondaryMenu';
import './components/contact/PromoLinks/promoLinks';

/* Article Components */
import './components/article/DocumentDownload/documentDownload';
import './components/article/ArticleHero/articleHero';
import './components/article/RegionalVariationBlock/regionalVariationBlock';
import './components/article/BackTo/backTo';
import './components/article/ContentMetaData/contentMetaData';
import './components/article/RelatedContent/relatedContent';
import './components/article/SubjectListing/subjectListing';
import './components/article/ExplanationBlock/explanationBlock';
import './components/article/QuoteBlock/quoteBlock';
import './components/article/TeamContacts/teamContacts';
import './components/article/ProductDetails/productDetails';
import './components/article/AllergensTable/allergensTable';
import footNotes from './components/article/FootNotes/footNotes';
import revisionLogBottom from './components/article/RevisionLogBottom/revisionLogBottom';
import backToTop from './components/article/BackToTop/backToTop';
import pdfAndPrintButtons from './components/article/PdfAndPrintButtons/pdfAndPrintButtons';
import stickySidebar from './components/article/StickySidebar/stickySidebar';
import tableOfContents from '@components/components/article/TableOfContents/tableOfContents';
import textBlock from './components/article/TextBlock/textBlock';
import chartBlock from './components/article/ChartBlock/chartBlock';

/* HACCP components */
import './components/haccp/WebToolStudiesTable/webToolStudiesTable';
import webtoolProgressBar from './components/haccp/WebToolProgressBar/webToolProgressBar';

/* FHRS components */
import './components/fhrs/LocalAuthority/localAuthority';
import './components/fhrs/SearchCard/searchCard';
import './components/fhrs/Badge/badge';
import ratingsSearchBox from './components/fhrs/RatingsSearchBox/ratingsSearchBox';
import badgeDownload from './components/fhrs/BadgeDownload/badgeDownload';
import localAuthorityMap from './components/fhrs/LocalAuthorityMap/localAuthorityMap';
import businessHero from './components/fhrs/BusinessHero/businessHero';

/* HACCP components */
import './components/haccp/SaveProgress/saveProgress';

/* Multipage guide Components */
import './components/multipageguide/GuideHero/guideHero';
import './components/multipageguide/Pagination/pagination';

/* Layout Components */
import './layout/formLayout/formLayout';
import './layout/twoColumn/twoColumn';
import './layout/fullWidth/fullWidth';
import './layout/contentLayout/contentLayout';
import './layout/contactLayout/contactLayout';
import './layout/fhrsLayout/fhrsLayout';

import breadcrumbJs from './components/general/Breadcrumb/breadcrumb';
import pagination from './components/search/Pagination/pagination';
import searchBar from './components/search/SearchBar/searchBar';
import sortBy from './components/search/SortBy/sortBy';

export default function () {
  // Components
  backToTop();
  footNotes();
  revisionLogBottom();
  breadcrumbJs();
  pagination();
  searchBar();
  sortBy();
  navigation();
  datepicker();
  accordion();
  header();
  pdfAndPrintButtons();
  stickySidebar();
  tableOfContents();
  textBlock();
  chartBlock();
  mapField();
  dropdownMenu();
  webtoolProgressBar();
  tooltip();
  multivalueField();
  multifieldGroup();
  guidancePopup();
  toggleButton();
  ratingsSearchBox();
  inputField();
  textArea();
  localAuthorityMap();
  badgeDownload();
  businessHero();
  // Fixes object-fit on legacy browsers
  objectFitImages();
}
