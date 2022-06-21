import { ProviderTypes } from "../utils/enum";
import { AwsApiProvider } from "./aws";
import { AzureApiProvider } from "./azure";
import { GoogleApiProvider } from "./google";

export const getProviderGroups = (type:ProviderTypes)=>{
    const providers = {
        "aws":AwsApiProvider,
        "azure":AzureApiProvider,
        "google":GoogleApiProvider
    }
    const provider = new providers[type]()
    return provider.getGroups()
}