import { DataGrid, GridColDef, GridToolbar} from "@mui/x-data-grid"
import './Datatable.scss'
import { Link } from "react-router-dom";
// import {useMutation, useQueryClient } from "@tanstack/react-query";a

type Props={
  columns:GridColDef[],
  rows:object[];
  slug:string;
}
const Datatable = (props:Props) => {
  

//   const handelDelete=(id:number)=>{
//     // delete the item;
//     // console.log(id+"has been deleted ")/
// mutation.mutate(id)
//   }


 const actionColumn:GridColDef ={
  field:"action",
  headerName:"Action",
  width:100,
  renderCell:(params)=>{
    return(
      <div className="action">
        <Link to={`/${props.slug}/${params.row.id}`}>
          <img src="/view.svg" slot=""></img>
        </Link>

        <div className="delete" >
        <img src="/delete.svg" alt=""></img>
        </div>
      </div>
    )

  }
 }
  
  return (
    <div className="datatable">
    
       <DataGrid
       className="dataGrid"
        rows={props.rows}
        columns={[...props.columns,actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
       slots={{toolbar:GridToolbar}}
       slotProps={{
        toolbar:{
          showQuickFilter:true,
          quickFilterProps:{debounceMs:500}
        }
       }}

        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  )
}

export default Datatable