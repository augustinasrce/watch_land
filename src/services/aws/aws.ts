import * as Watchland from "watch-land-ts-client";

export const CloudWatch = new Watchland.CloudWatch.Client();

export const configClient = async (key: string, secret: string, region = "eu-west-1") => {
  // AWS connection
  const config: Watchland.CloudWatch.Specs.ICloudWatchConfig = {
    options: {
      region: region,
      accessKeyId: key,
      secretAccessKey: secret
    }
  };

  let isConnected = false;
  // Add the watchers to the client
  try {
    await CloudWatch.addWatcher(config);
    isConnected = true;
  } catch {
    console.log("Connection error")
  }
  return isConnected;
};
