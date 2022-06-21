import React, { FC, useEffect, useState } from 'react';
import { getProviderGroups } from '../../services/services';
import { ProviderTypes } from '../../utils/enum';
import Groups from '../Groups/Groups';
import './Provider.scss';

interface IProviderProps {
  type:ProviderTypes
}

const Provider: FC<IProviderProps> = ({type}) => {
  const [groups, setGroup] = useState([]);
  
  useEffect(() => {
    const providerGroups:any = getProviderGroups(type)
    setGroup(providerGroups)
  }, [type]);

  const grops = getProviderGroups(type)

  return (
    <div>
      {[...groups.map((group:any) => {
        return (
          <Groups data={group}></Groups>
        )
      })
      ]}
    </div>
  )
}

export default Provider;
