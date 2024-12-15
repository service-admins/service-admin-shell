import { useEffect } from "react";
import { Root } from "service-admin-iit/exposes";

export default function IITEntry() {
  useEffect(() => {
    const root = new Root("iit");

    root.render();

    return () => {
      root.unmount();
    };
  }, []);

  return <div id="iit"></div>;
}
