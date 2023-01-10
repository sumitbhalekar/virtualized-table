import AddIcon from "@mui/icons-material/AddRounded";
import EditIcon from "@mui/icons-material/Edit";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import * as React from "react";
import { AutoSizer, Column, Table } from "react-virtualized";
import "react-virtualized/styles.css";
import { default as styled } from "styled-components";

export const VirtualizedTable = () => {
  const TableStyles = styled.div`
    .ReactVirtualized__Table__headerRow {
      display: flex;
      align-items: center;
    }

    .ReactVirtualized__Table__row {
      display: flex;
      align-items: center;
    }

    .ReactVirtualized__Table__rowColumn {
      flex: 1;
    }
    .ReactVirtualized__Table__headerTruncatedText {
      display: inline-block;
      max-width: 100%;
      white-space: normal;
      overflow: visible;
    }
  `;

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

  const [rowData, setRowData] = React.useState(rows);

  const _cellRenderer = ({ cellData }) => {
    return (
      <div
        className="d-Washingtonex justify-content-between align-items-center"
        style={{ cursor: "pointer" }}
      >
        <EditIcon fontSize="10" /> Edit
      </div>
    );
  };

  const headerRenderer = ({ label }) => {
    return (
      <div style={{ flexDirection: "row", display: "flex" }}>
        <div className="d-Washingtonex justify-content-between align-items-center">
          {label}
        </div>
      </div>
    );
  };

  return (
    <Box sx={{ padding: "2%", borderWidth: 1, borderColor: "gray" }}>
      <AutoSizer style={{ height: "100%" }} disableHeight>
        {({ height, width }) => (
          <TableStyles>
            <Table
              headerHeight={40}
              width={1150}
              height={350}
              rowHeight={40}
              rowCount={rowData.length}
              rowGetter={({ index }) => rowData[index]}
            >
              <Column
                label="Id"
                dataKey="id"
                width={50}
                headerRenderer={headerRenderer}
                headerStyle={{
                  fontSize: 14,
                  textTransform: "initial",
                  display: "flex",
                  alignItems: "center",
                }}
              />
              <Column
                width={200}
                label="Street Add1"
                dataKey="streetAdd1"
                className="headerStyle"
                headerStyle={{
                  fontSize: 14,
                  textTransform: "initial",
                  display: "flex",
                  alignItems: "center",
                }}
                headerRenderer={headerRenderer}
              />
              <Column
                width={200}
                label="Street Add2"
                dataKey="streetAdd2"
                headerStyle={{
                  fontSize: 14,
                  textTransform: "initial",
                  display: "flex",
                  alignItems: "center",
                }}
                headerRenderer={headerRenderer}
              />
              <Column
                width={100}
                label="City"
                dataKey="city"
                headerStyle={{
                  fontSize: 14,
                  textTransform: "initial",
                  display: "flex",
                  alignItems: "center",
                }}
                headerRenderer={headerRenderer}
              />
              <Column
                width={100}
                label="State"
                dataKey="state"
                headerStyle={{
                  fontSize: 14,
                  textTransform: "initial",
                  display: "flex",
                  alignItems: "center",
                }}
                headerRenderer={headerRenderer}
              />
              <Column
                width={100}
                label="Zip Code"
                dataKey="zipCode"
                headerStyle={{
                  fontSize: 14,
                  textTransform: "initial",
                  display: "flex",
                  alignItems: "center",
                }}
                headerRenderer={headerRenderer}
              />
              <Column
                width={150}
                label="Effective Date"
                dataKey="effectDate"
                headerStyle={{
                  fontSize: 14,
                  textTransform: "initial",
                  display: "flex",
                  alignItems: "center",
                }}
                headerRenderer={headerRenderer}
              />
              <Column
                width={150}
                label="Expiration Date"
                dataKey="expDate"
                headerStyle={{
                  fontSize: 14,
                  textTransform: "initial",
                  display: "flex",
                  alignItems: "center",
                }}
                headerRenderer={headerRenderer}
              />
              <Column
                width={100}
                dataKey="actions"
                headerStyle={{
                  fontSize: 14,
                  textTransform: "initial",
                  display: "flex",
                  alignItems: "center",
                }}
                cellRenderer={_cellRenderer}
              />
            </Table>
            <Button
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
            </Button>
          </TableStyles>
        )}
      </AutoSizer>
    </Box>
  );
};
