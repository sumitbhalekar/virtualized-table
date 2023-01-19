import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ImportExportIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import * as React from "react";
import { SortDirection } from "react-virtualized";
import "./App.css";
import { CardView } from "./CardView";
import { VirtualizedTable } from "./VirtualizedTable";

function App() {
  const [sortByValue, setSortByValue] = React.useState("id");
  const [sortByDirection, setSortByDirection] = React.useState(
    SortDirection.ASC
  );

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
      id: "1",
      streetAdd1: "1321, My Street, Kingston, New York 12401",
      streetAdd2: "71 ST. NICHOLAS DRIVE",
      city: "New York",
      state: "Washington",
      zipCode: 32091,
      effectDate: "11/01/2023",
      expDate: "11/01/2023",
      firstName: "Jon",
      age: 35,
    },
    {
      id: "2",
      streetAdd1: "1322, My Street, Kingston, New York 12401",
      streetAdd2: "72 ST. NICHOLAS DRIVE",
      city: "New York",
      state: "Washington",
      zipCode: 32092,
      effectDate: "12/01/2023",
      expDate: "12/01/2023",
      firstName: "Cersei",
      age: 42,
    },
    {
      id: "3",
      streetAdd1: "1323, My Street, Kingston, New York 12401",
      streetAdd2: "73 ST. NICHOLAS DRIVE",
      city: "New York",
      state: "Washington",
      zipCode: 32093,
      effectDate: "13/01/2023",
      expDate: "13/01/2023",
      firstName: "Jaime",
      age: 45,
    },
    {
      id: "4",
      streetAdd1: "1324, My Street, Kingston, New York 12401",
      streetAdd2: "74 ST. NICHOLAS DRIVE",
      city: "New York",
      state: "Washington",
      zipCode: 32094,
      effectDate: "14/01/2023",
      expDate: "14/01/2023",
      firstName: "Arya",
      age: 16,
    },
  ];

  const simpleHeaderRenderer = (value) => {
    return (
      <ColumnFilterContainer label={value.label} dataKey={value.dataKey} />
    );
  };

  const ColumnFilterContainer = (props) => {
    const { label, dataKey } = props;
    return (
      <div
        style={{ display: "inline-flex" }}
        onClick={() => {
          setSortByValue(dataKey);
          setSortByDirection(
            sortByDirection === SortDirection.ASC
              ? SortDirection.DESC
              : SortDirection.ASC
          );
        }}
      >
        {label}
        <div style={{ display: "inline-flex" }}>
          <SwapVertIcon style={{ fontSize: 18, marginTop: 2 }} />
          {dataKey === sortByValue &&
            (sortByDirection === SortDirection.ASC ? (
              <ArrowUpwardIcon style={{ fontSize: 16, marginTop: 2 }} />
            ) : (
              <ArrowDownwardIcon style={{ fontSize: 16, marginTop: 2 }} />
            ))}
        </div>
      </div>
    );
  };

  const columns = [
    {
      label: "Id",
      dataKey: "id",
      width: 50,
      headerRenderer: simpleHeaderRenderer,
    },
    {
      width: 200,
      label: "Street Add1",
      dataKey: "streetAdd1",
      headerRenderer: simpleHeaderRenderer,
    },
    {
      width: 200,
      label: "Street Add2",
      dataKey: "streetAdd2",
      headerRenderer: simpleHeaderRenderer,
    },
    {
      width: 100,
      label: "City",
      dataKey: "city",
      headerRenderer: simpleHeaderRenderer,
    },
    {
      width: 100,
      label: "State",
      dataKey: "state",
      headerRenderer: simpleHeaderRenderer,
    },
    {
      width: 100,
      label: "Zip Code",
      dataKey: "zipCode",
      headerRenderer: simpleHeaderRenderer,
    },
    {
      width: 150,
      label: "Effective date",
      dataKey: "effectDate",
      headerRenderer: simpleHeaderRenderer,
    },
    {
      width: 150,
      label: "Expiration date",
      dataKey: "expDate",
      headerRenderer: simpleHeaderRenderer,
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
      <CardView
        cardBody={
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
            sortByValue={sortByValue}
            sortByDirection={sortByDirection}
          />
        }
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
