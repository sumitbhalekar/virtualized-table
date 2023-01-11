import ImportExportIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import * as React from "react";
import "./App.css";
import { VirtualizedTable } from "./VirtualizedTable";

function App() {
  // const [rowData, setRowData] = React.useState();

  const simpleEditCellRenderer = () => {
    return (
      <div
        className="d-Washingtonex justify-content-between align-items-center"
        style={{ cursor: "pointer", width: 70 }}
      >
        <EditIcon fontSize="10" /> Edit
      </div>
    );
  };

  const simpleCellRenderer = () => {
    return (
      <div
        className="d-Washingtonex justify-content-between align-items-center"
        style={{ cursor: "pointer", width: 70 }}
      >
        <ImportExportIcon fontSize="10" /> Remove
      </div>
    );
  };

  const rows = [
    {
      id: 1,
      streetAdd1: "132, My Street, Kingston, New York 12401",
      streetAdd2: "71 ST. NICHOLAS DRIVE",
      city: "New York",
      state: "Washington",
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
      state: "Washington",
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
      state: "Washington",
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
      state: "Washington",
      zipCode: 32092,
      effectDate: "10/01/2023",
      expDate: "11/01/2023",
      firstName: "Arya",
      age: 16,
    },
  ];

  const columns = [
    {
      label: "Id",
      dataKey: "id",
      width: 50,
    },
    {
      width: 200,
      label: "Street Add1",
      dataKey: "streetAdd1",
    },
    {
      width: 200,
      label: "Street Add2",
      dataKey: "streetAdd2",
    },
    {
      width: 100,
      label: "City",
      dataKey: "city",
    },
    {
      width: 100,
      label: "State",
      dataKey: "state",
    },
    {
      width: 100,
      label: "Zip Code",
      dataKey: "zipCode",
    },
    {
      width: 150,
      label: "Effective date",
      dataKey: "effectDate",
    },
    {
      width: 150,
      label: "Expiration date",
      dataKey: "expDate",
    },
    {
      width: 100,
      dataKey: "actions",
      cellRenderer: simpleEditCellRenderer,
    },
    {
      width: 100,
      dataKey: "actions",
      cellRenderer: simpleCellRenderer,
    },
  ];

  return (
    <>
      <VirtualizedTable
        rowsData={rows}
        columnsData={columns}
        tableHeight={350}
        tableWidth={1150}
        headerHeight={40}
        rowHeight={40}
        headerStyle={{
          fontSize: 14,
          textTransform: "initial",
          display: "flex",
          alignItems: "center",
        }}
      />
      {/* <Button
        variant="outlined"
        style={{ marginTop: 20, width: 250 }}
        startIcon={<AddIcon />}
        onClick={() => {
          const addRowData = rowData.concat({
            id: rowData.length + 1,
            streetAdd1: "132, My Street, Kingston, New York 12401",
            streetAdd2: "71 ST. NICHOLAS DRIVE",
            city: "New York",
            state: "Washington",
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
      </Button> */}
    </>
  );
}

export default App;
