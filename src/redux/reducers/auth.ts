
import { AuthTarget, AuthType, AwsState, AzureState, gCloudState, IAuthAction, IAuthState } from "../specs/authSpecs";

const AUTH_STATE = { aws:[], azure:[], gcloud:[] }
const authReducer = (state:IAuthState = AUTH_STATE , action:IAuthAction) => {
    
    const connect = ()=>{
        if(action.target == AuthTarget.AWS) state.aws.push(action.payload as AwsState)
        if(action.target == AuthTarget.Azure) state.azure.push(action.payload as AzureState)
        if(action.target == AuthTarget.gCloud) state.gcloud.push(action.payload as gCloudState)
    }

    const disconnect = ()=>{}

    if(action.type == AuthType.Connect) connect()
    if(action.type == AuthType.Disconnect) disconnect()

    return state
}

// const _handleConnect = (type:string, payload)=>{
//     if(action.type == AuthActionTypes.AwsConnect){
//         state.aws.push(action.payload)
//     }
//     if(action.type == AuthActionTypes.AzureConnect){
//         state.azure.push(action.payload)
//     }
//     if(action.type == AuthActionTypes.gCloudConnect){
//         state.gcloud.push(action.payload)
//     }
// }
export { authReducer };