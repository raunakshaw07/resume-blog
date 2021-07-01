import React, { forwardRef, useState } from "react";
import MaterialTable from "material-table";
import moment from "moment";
import ShowBlog from "./ShowBlog";
import Modal from "../helpers/Modal";

import DeleteIcon from "@material-ui/icons/Delete";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";

const BlogTable = ({ truncate, blog }) => {
  const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => (
      <ChevronRight {...props} ref={ref} />
    )),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => (
      <ChevronLeft {...props} ref={ref} />
    )),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => (
      <ArrowDownward {...props} ref={ref} />
    )),
    ThirdStateCheck: forwardRef((props, ref) => (
      <Remove {...props} ref={ref} />
    )),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  };
  const [selectedRow, setSelectedRow] = useState(null);
  const [open, setOpen] = useState(false);
  const [dispBlog, setDispBlog] = useState(null);
  const [state] = React.useState({
    columns: [
      {
        title: "Title",
        field: "title",
        sorting: false,
      },
      {
        title: "Body",
        field: "body",
        sorting: false,
        render: (rowdata) => <p>{truncate(rowdata.body, 20)}</p>,
      },
      {
        title: "Date",
        field: "createdAt",
        defaultSort: "desc",
        render: (rowData) => (
          <div style={{ display: "flex" }}>
            <p>{moment(rowData.createdAt).format("MMM Do, YYYY")}</p>
          </div>
        ),
      },
    ],
  });
  return (
    <div className="admin-blog">
      <div className="create">
        <a href="/admin/create">
          <i className="fas fa-plus-circle"></i> Create Blog
        </a>
      </div>
      <MaterialTable
        icons={tableIcons}
        title="Blogs"
        columns={state.columns}
        data={blog}
        actions={[
          {
            icon: DeleteIcon,
            tooltip: "Delete Blog",
            onClick: (event, rowdata) => {
              console.log("delete");
              blog = blog.filter((bl) => bl.id !== rowdata._id);
            },
          },
          {
            icon: LabelImportantIcon,
            tooltip: "Read Message",
            onClick: (event, rowdata) => {
              console.log("Read");
              setOpen(true);
              setDispBlog(rowdata);
            },
          },
        ]}
        onRowClick={(evt, selectedRow) =>
          setSelectedRow(selectedRow.tableData.id)
        }
        options={{
          headerStyle: {
            fontSize: "1.3rem",
            fontWeight: "bolder",
            backgroundColor: "rgba(217, 151, 250, 0.2)",
          },
          rowStyle: (rowData) => ({
            backgroundColor:
              selectedRow === rowData.tableData.id ? "#EEE" : "#FFF",
          }),
          exportButton: true,
        }}
      />

      <Modal open={open}>
        <ShowBlog blog={dispBlog} setOpen={setOpen} />
      </Modal>
    </div>
  );
};

export default BlogTable;
