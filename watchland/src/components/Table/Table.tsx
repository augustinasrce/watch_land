import { Link } from "react-router-dom";
import { IProviderGroup } from "../../utils/interfaces";
import { ITableCell } from "../spec";
// import Group from "../Groups/Groups";
import "./Table.scss";

interface ITableProps {
  headers:string[]
  body:ITableCell[][]
}

const Table = ({ headers, body  }: ITableProps) => {
  return (
   
    <div className="container">

      <table className="table">
        <thead>
          <tr>
          {[
            ...headers.map((header:string)=>{
              return (
                <th scope="col">{ header }</th>
              )
            })
          ]}
          </tr>
        </thead>
        <tbody>
        {[
          ...body.map((cells:ITableCell[])=>{
            return (
              <tr>
                {[
                  ...cells.map((cell:ITableCell)=>{
                    return (
                      <td>
                      { cell.isLink ? (
                        <Link to={{ pathname: cell.link }}>{cell.message}</Link>
                      ) : cell.message }
                      </td>
                    )
                  })
                ]}
              </tr>
            )
          })
        ]}

          
              {/* // return (

                
                <td>
                { cell.isLink ? (
                  <Link to={{ pathname: cell.link }}>{cell.message}</Link>
                ) : cell.message }
                </td>
              // ) */}
          

          {/* {[
            ...groups.map((group: IProviderGroup) => {
              return (
                <tr className="group" key={group.id}>
                  <td className="group-id">{group.id}</td>
                  <td>
                    <Link
                      to={{
                        pathname: `/${type}/${group.id}`
                      }}
                      className="group-stream"
                    >
                      {group.stream}
                    </Link>
                  </td>
                </tr>
              );
              // return <Group group={group} />;
            })
          ]} */}
        </tbody>
       </table>
    </div>
  );
};

export default Table;
