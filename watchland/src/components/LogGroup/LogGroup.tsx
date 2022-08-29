import { FC, useEffect, useState } from "react";
import { getProviderGroups } from "../../services/services";
import { ProviderTypes } from "../../utils/enum";
import { IProviderGroup } from "../../utils/interfaces";
import AWS from "../Providers/AWS/AwsGroups";
import Azure from "../Providers/Azure/Azure";
import GoogleCloud from "../Providers/gCloud/GoogleCloud";
import TableItem from "../Table/Table";

interface IProviderPros {
  type: ProviderTypes;
}

const LogGroup: FC<IProviderPros> = ({ type }) => {
  const [groups, setGroups] = useState<IProviderGroup[]>();

  useEffect(() => {
    loadGroups();
  }, [type]);

  const loadGroups = async () => {
    const groups: IProviderGroup[] = await getProviderGroups(type);
    setGroups(groups);
  };


  return (
    <div>Groups</div>
    // !groups ? 
    //   null :
    //   type == ProviderTypes.AWS ? ( 
    //     <AWS groups={groups} details={false}/>
    //   ) : 
    //   type == ProviderTypes.AZURE ? ( 
    //     <Azure groups={groups} details={false}/>
    //   ) : ( 
    //     <GoogleCloud groups={groups} details={false}/>
    //   )
  )
};

export default LogGroup;
