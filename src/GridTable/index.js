import AddIcon from "@mui/icons-material/AddRounded";
import EditIcon from "@mui/icons-material/Edit";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";
import * as React from "react";

export const GridTable = () => {
  const columns = [
    { field: "id", headerName: "ID#", width: 90 },
    {
      field: "streetAdd1",
      headerName: "Street Addr1",
      width: 150,
      editable: true,
    },
    {
      field: "streetAdd2",
      headerName: "Street Addr2",
      width: 150,
      editable: true,
    },
    {
      field: "city",
      headerName: "City",
      //   type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "state",
      headerName: "State",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 90,
    },
    {
      field: "zipCode",
      headerName: "Zip Code",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
    },
    {
      field: "effectDate",
      headerName: "Effective Date",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
    },
    {
      field: "expDate",
      headerName: "Expiration Date",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
    },
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      width: 140,
      disableClickEventBubbling: true,
      renderCell: (params) => {
        return (
          <div
            className="d-flex justify-content-between align-items-center"
            style={{ cursor: "pointer" }}
          >
            <EditIcon index={params.row.id} fontSize="10" /> Edit
          </div>
        );
      },
    },
  ];

  const rows = [
    {
      id: 1,
      streetAdd1: "132, My Street, Kingston, New York 12401",
      streetAdd2: "71 ST. NICHOLAS DRIVE",
      city: "New York",
      state: "FL",
      zipCode: 32092,
      effectDate: "10/01/2023",
      expDate: "11/01/2023",
      firstName: "Jon",
      age: 35,
    },
    {
      id: 2,
      streetAdd1: "132, My Street, Kingston, New York 12401",
      streetAdd2: "71 ST. NICHOLAS DRIVE",
      city: "New York",
      state: "FL",
      zipCode: 32092,
      effectDate: "10/01/2023",
      expDate: "11/01/2023",
      firstName: "Cersei",
      age: 42,
    },
    {
      id: 3,
      streetAdd1: "132, My Street, Kingston, New York 12401",
      streetAdd2: "71 ST. NICHOLAS DRIVE",
      city: "New York",
      state: "FL",
      zipCode: 32092,
      effectDate: "10/01/2023",
      expDate: "11/01/2023",
      firstName: "Jaime",
      age: 45,
    },
    {
      id: 4,
      streetAdd1: "132, My Street, Kingston, New York 12401",
      streetAdd2: "71 ST. NICHOLAS DRIVE",
      city: "New York",
      state: "FL",
      zipCode: 32092,
      effectDate: "10/01/2023",
      expDate: "11/01/2023",
      firstName: "Arya",
      age: 16,
    },
    // {
    //   id: 5,
    //   streetAdd1: "132, My Street, Kingston, New York 12401",
    //   streetAdd2: "71 ST. NICHOLAS DRIVE",
    //   city: "New York",
    //   state: "FL",
    //   zipCode: 32092,
    //   effectDate: "10/01/2023",
    //   expDate: "11/01/2023",
    //   firstName: "Daenerys",
    //   age: null,
    // },
    // {
    //   id: 6,
    //   streetAdd1: "132, My Street, Kingston, New York 12401",
    //   streetAdd2: "71 ST. NICHOLAS DRIVE",
    //   city: "New York",
    //   state: "FL",
    //   zipCode: 32092,
    //   effectDate: "10/01/2023",
    //   expDate: "11/01/2023",
    //   firstName: null,
    //   age: 150,
    // },
    // {
    //   id: 7,
    //   streetAdd1: "132, My Street, Kingston, New York 12401",
    //   streetAdd2: "71 ST. NICHOLAS DRIVE",
    //   city: "New York",
    //   state: "FL",
    //   zipCode: 32092,
    //   effectDate: "10/01/2023",
    //   expDate: "11/01/2023",
    //   firstName: "Ferrara",
    //   age: 44,
    // },
    // {
    //   id: 8,
    //   streetAdd1: "132, My Street, Kingston, New York 12401",
    //   streetAdd2: "71 ST. NICHOLAS DRIVE",
    //   city: "New York",
    //   state: "FL",
    //   zipCode: 32092,
    //   effectDate: "10/01/2023",
    //   expDate: "11/01/2023",
    //   firstName: "Rossini",
    //   age: 36,
    // },
    // {
    //   id: 9,
    //   streetAdd1: "132, My Street, Kingston, New York 12401",
    //   streetAdd2: "71 ST. NICHOLAS DRIVE",
    //   city: "New York",
    //   state: "FL",
    //   zipCode: 32092,
    //   effectDate: "10/01/2023",
    //   expDate: "11/01/2023",
    //   firstName: "Harvey",
    //   age: 65,
    // },
  ];
  const [rowData, setRowData] = React.useState(rows);
  const [columnData, setColumnData] = React.useState(columns);
  return (
    <Box sx={{ height: 260, width: "100%", padding: "2%" }}>
      <DataGrid
        rows={rowData}
        columns={columnData}
        hideFooterPagination
        hideFooter
        hideFooterSelectedRowCount
        experimentalFeatures={{ newEditingApi: true }}
      />
      <Button
        variant="outlined"
        style={{ marginTop: 10 }}
        startIcon={<AddIcon />}
        onClick={() => {
          const addRowData = rowData.concat({
            id: 5,
            streetAdd1: "132, My Street, Kingston, New York 12401",
            streetAdd2: "71 ST. NICHOLAS DRIVE",
            city: "New York",
            state: "FL",
            zipCode: 32092,
            effectDate: "10/01/2023",
            expDate: "11/01/2023",
            firstName: "Daenerys",
            age: null,
          });
          setRowData(addRowData);
        }}
      >
        Add Service Locations
      </Button>
    </Box>
  );
};
