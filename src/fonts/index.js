import RingsideWideSSmMediumWebWoff2 from './RingsideWideSSm-Medium_Web.woff2';
import RingsideRegularSSmBoldWebbWoff2 from './RingsideRegularSSm-Bold_Web.woff2';
import RingsideRegularSSmBookWebbWoff2 from './RingsideRegularSSm-Book_Web.woff2';

const RingsideWideSSmMediumWeb = {
  fontFamily: 'RingsideWideSSm-Medium_Web',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('RingsideWideSSmMediumWeb'),
    local('RingsideWideSSm-Medium_Web'),
    url(${RingsideWideSSmMediumWebWoff2}) format('woff2')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const RingsideRegularSSmBoldWebb = {
  fontFamily: 'RingsideRegularSSm-Bold_Web',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('RingsideRegularSSmBoldWebb'),
    local('RingsideRegularSSm-Bold_Web'),
    url(${RingsideRegularSSmBoldWebbWoff2}) format('woff2')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const RingsideRegularSSmBookWebb = {
  fontFamily: 'RingsideRegularSSm-Book_Web',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('RingsideRegularSSmBookWebb'),
    local('RingsideRegularSSm-Book_Web'),
    url(${RingsideRegularSSmBookWebbWoff2}) format('woff2')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

export {
  RingsideWideSSmMediumWeb,
  RingsideRegularSSmBoldWebb,
  RingsideRegularSSmBookWebb,
};
