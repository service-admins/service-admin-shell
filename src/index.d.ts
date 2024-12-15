declare module "service-admin-iit/exposes" {
  const basePath: string;
  const menus: {
    name: string;
    list: {
      name: string;
      list: {
        name: string;
        path: string;
      }[];
    }[];
  }[];
  export class Root {
    constructor(id: string): void;

    render(): void;

    unmount(): void;
  }
}
