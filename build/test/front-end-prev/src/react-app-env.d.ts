/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production';
    REACT_APP_VERSION: string;
    REACT_APP_SERVER: string;
    REACT_APP_NUMBER: number;
  }
}
