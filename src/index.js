import './base.scss';
import cssVars from 'css-vars-ponyfill';

import buttonJs from './pattern-library/components/Button/Button';
import listingItemJs from './pattern-library/components/ListingItem/ListingItem';

// Fixes css vars on legacy browsers (i.e. IE11)
cssVars();

buttonJs();
listingItemJs();
