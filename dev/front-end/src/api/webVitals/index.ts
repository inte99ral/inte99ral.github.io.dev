// # src/api/webVitals/index.ts

// ## Import Declaration =====================================================

// ### API & Library:

import { ReportHandler } from 'web-vitals';

// ## Function ===============================================================

// ### reportWebVitals
/**
 * @description
 *
 * If you want to start measuring performance in your app, pass a function
 *
 * to log results (for example: reportWebVitals(console.log)) or send to an analytics endpoint.
 *
 * @see Learn more: https://bit.ly/CRA-vitals
 */
export const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};
