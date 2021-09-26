import './base.scss';
import './pattern-library/components/Button/Button';
import cssVars from 'css-vars-ponyfill';

import listingItemJs from './pattern-library/components/ListingItem/ListingItem';

// Fixes css vars on legacy browsers (i.e. IE11)
cssVars();

listingItemJs();
