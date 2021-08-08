declare module '*.jpg';
declare module '*.gif';
declare module '*.png';
declare module '*.svg';

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}
