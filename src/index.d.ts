declare module "service-admin-iit/iit" {
  export default function (): JSX.Element;
}

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
}
