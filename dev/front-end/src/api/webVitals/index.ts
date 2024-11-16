import { MetricType } from 'web-vitals';

export const reportWebVitals = (onPerfEntry?: (metric: MetricType) => void) => {
  (async () => console.log(`front-end ${process.env.REACT_APP_VERSION}`))();
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ onCLS, onINP, onFCP, onLCP, onTTFB }) => {
      onCLS(onPerfEntry);
      onINP(onPerfEntry);
      onFCP(onPerfEntry);
      onLCP(onPerfEntry);
      onTTFB(onPerfEntry);
    });
  }
};

// import { ReportHandler } from 'web-vitals';
// import { server } from 'api/rest';

// export const reportWebVitals = (onPerfEntry?: ReportHandler) => {
//   (async () =>
//     console.log(
//       `front-end ${process.env.REACT_APP_VERSION}v \n back-end ${await server.getServerVersion()}v`,
//     ))();
//   if (onPerfEntry && onPerfEntry instanceof Function) {
//     import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
//       getCLS(onPerfEntry);
//       getFID(onPerfEntry);
//       getFCP(onPerfEntry);
//       getLCP(onPerfEntry);
//       getTTFB(onPerfEntry);
//     });
//   }
// };
