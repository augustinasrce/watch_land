import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { WLDevProfiles } from "../../../services/specs";


const AWS = (props:any) => {
    const [ isAuth, setIsAuth ] = useState(false);
    const [ profile, setProfile ] = useState(WLDevProfiles.Custom)

    // TODO
    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsAuth(true)
    }

    return (
        isAuth ? (
            <Outlet></Outlet>
        ):(     

        <div className="row pt-5">
            <div className="col-sm-12 col-md-6 offset-md-3">
                <form action="" className="card" onSubmit={handleSubmit}>
                    <div className="card-header">
                        <p className="mb-0">AWS Authentication</p>
                    </div>
                    <div className="card-body">
                        <div className="row align-items-center">
                            <div className="col-sm-12 col-md-2">
                                <label htmlFor="aws-profile" className="col-form-label">Profile</label>
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <select onChange={(ev:any)=>setProfile(ev.target.value) } required className="form-select" id="aws-profile" aria-label="Default select example">
                                    <option value={WLDevProfiles.Custom} selected>Programmatic Access</option>
                                    <option value={WLDevProfiles.AWS}>Watchland dev</option>
                                    <option value="aws:profile:1">profile-1</option>
                                    <option value="aws:profile:2">profile-2</option>
                                </select>
                            </div>
                            <div className="col-sm-12 col-md-4">
                                <span id="aws-profile-helper" className="form-text">
                                {profile == WLDevProfiles.Custom ? '' : profile == WLDevProfiles.AWS ? 'Watchland test profile':'AWS Profile' }
                                </span>
                            </div>
                        </div>
                        { profile == WLDevProfiles.Custom ? ([
                            <div className="row align-items-center pt-3">
                                <div className="col-sm-12 col-md-2">
                                    <label htmlFor="aws-key" className="col-form-label">Key</label>
                                </div>
                                <div className="col-sm-12 col-md-6">
                                    <input type="text" id="aws-key" className="form-control" required aria-describedby="aws-key"/>
                                </div>
                                <div className="col-sm-12 col-md-4">
                                    <span id="aws-key-helper" className="form-text">
                                    AWS Key Id
                                    </span>
                                </div>
                            </div>,
                            <div className="row align-items-center pt-3">
                                <div className="col-sm-12 col-md-2">
                                    <label htmlFor="aws-key-secret" className="col-form-label">Secret</label>
                                </div>
                                <div className="col-sm-12 col-md-6">
                                    <input type="password" id="aws-key-secret" required className="form-control" aria-describedby="aws-key-secret"/>
                                </div>
                                <div className="col-sm-12 col-md-4">
                                    <span id="aws-secret-helper" className="form-text">
                                    AWS Key Secret
                                    </span>
                                </div>
                            </div>
                        ]):null }
                        <div className="row">
                            <div className="col-sm-12 col-md-8 text-right pt-3">
                                <button className="btn btn-primary">
                                    { profile == WLDevProfiles.Custom ? 'Authenticate':'Connect'}
                                </button>
                            </div>
                        </div>
                        
                    </div>
                </form>     
            </div>
        </div>             
        )
    )
};

export default AWS;
