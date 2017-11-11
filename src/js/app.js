//project Requirements
import $ from 'jquery';
import 'foundation-sites';
import 'slick-carousel';
import React from 'react';
import ReactDOM from 'react-dom';

//project files
import IntroSection from './intro';
import Accordion from './accordion';
import SlickBanner from './slick-banner';

//project styles
require('foundation-sites/assets/foundation.scss');
require('slick-carousel/slick/slick.scss');
require('slick-carousel/slick/slick-theme.scss');
require('../fonts/slick.eot');
require('../fonts/slick.svg');
require('../fonts/slick.ttf');
require('../fonts/slick.woff');

require('../scss/style.scss');

$(document).foundation();

$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
});
