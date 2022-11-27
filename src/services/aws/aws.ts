import * as Watchland from "watch-land-ts-client";

export const CloudWatch = new Watchland.CloudWatch.Client();

export const configClient = (key: string, secret: string, region: string = "eu-west-1") => {
  // AWS connection
  const config: Watchland.CloudWatch.Specs.ICloudWatchConfig = {
    options: {
      region: region,
      accessKeyId: key,
      secretAccessKey: secret
    }
  };
  // Add the watchers to the client
  CloudWatch.addWatcher(config);

  // const watchers = CloudWatch.listWatchers();
  // console.log(watchers);

  // for (const w of watchers) {
  //   const watcher = CloudWatch.getWatcher(w);
  //   const wConfig = watcher?.getConfig();
  //   console.log(wConfig);
  // }
};
