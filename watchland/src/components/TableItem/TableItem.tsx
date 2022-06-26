import { FC } from 'react';
import { IProviderGroup } from '../../utils/interfaces';
import './TableItem.scss';

interface ITableItemProps{
  groups:IProviderGroup[]
}
const TableItem:FC<ITableItemProps> = (props:ITableItemProps) => (
  <div className="TableItem">
    {[...props.groups.map((group:IProviderGroup)=>{
      return (
        <div className="group">
          <div>ID:{group.id}</div>
          <div>Stream:{group.stream}</div>
          <div>Last event:{group.lastEvent}</div>
        </div>
        )
      })]}
  </div>
);

export default TableItem;
