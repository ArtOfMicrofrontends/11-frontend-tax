let Info = undefined;

export function setup(api) {
  api.registerExtension("balance-info", {
    bootstrap: () =>
      import("./Info.svelte").then((content) => {
        Info = content.default;
      }),
    mount: (target, props) =>
      new Info({
        target,
        props,
      }),
    unmount: (_, info) => info.$destroy(),
  });
}
