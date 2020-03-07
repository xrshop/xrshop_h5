import VueRouter, { Location } from 'vue-router';

declare module 'vue-router/types/router' {
  export interface VueRouter {
    addQuery(
      query: Location['query'],
      onComplete?: Function | undefined,
      onAbort?: (err: Error) => void | undefined
    ): void;
    replaceQuery(
      query: Location['query'],
      onComplete?: Function | undefined,
      onAbort?: (err: Error) => void | undefined
    ): void;
  }
}

export default class VueRouterPlus extends VueRouter {
  addQuery(
    query: Location['query'],
    onComplete?: Function | undefined,
    onAbort?: (err: Error) => void | undefined,
  ) {
    this.push(
      {
        query: {
          ...this.currentRoute.query,
          ...query,
        },
      },
      onComplete,
      onAbort,
    );
  }

  replaceQuery(
    query: Location['query'],
    onComplete?: Function | undefined,
    onAbort?: (err: Error) => void | undefined,
  ) {
    this.replace(
      {
        query: {
          ...this.currentRoute.query,
          ...query,
        },
      },
      onComplete,
      onAbort,
    );
  }
}
