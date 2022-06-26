import { FC, useEffect, useState } from 'react';
import { getProviderGroups } from '../../services/services';
import { ProviderTypes } from '../../utils/enum';
import { IProviderGroup } from '../../utils/interfaces';
import TableItem from '../TableItem/TableItem';
import './Provider.scss';


interface IProviderPros{
  type:ProviderTypes
}

const DEFAULT_STATE:IProviderGroup[] = [{ id:0, stream:'', lastEvent:'' }]

const Provider:FC<IProviderPros> = ({type}) => {
  const [service, setService] = useState<IProviderGroup[]>(DEFAULT_STATE);

  useEffect(() => {
    loadService()
  }, [])

  const loadService = async () => {
    const services:IProviderGroup[] = await getProviderGroups(type)
    setService(services)
  }

  return (
    <div>
      <TableItem groups={service} />
    </div>
  )
}

export default Provider;
