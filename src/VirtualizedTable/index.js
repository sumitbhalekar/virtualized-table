import { PropTypes } from "prop-types";
import * as React from "react";
import { AutoSizer, Column, SortDirection, Table } from "react-virtualized";
import "react-virtualized/styles.css";

export const VirtualizedTable = (props) => {
  const rowFinalData = props.rowsData;
  const colFinalData = props.columnsData;
  const tableHeight = props.tableHeight;
  const tableWidth = props.tableWidth;
  const rowHeight = props.rowHeight;
  const headerHeight = props.headerHeight;
  const headerStyle = props.headerStyle;
  const sortByValue = props.sortByValue;
  const sortByDirection = props.sortByDirection;

  const [sortedList, setSortedList] = React.useState(rowFinalData);

  const sortFunctionality = ({ sortBy, sortDirection }) => {
    const data1 = rowFinalData.sort(function (a, b) {
      var x = a[sortBy];
      var y = b[sortBy];
      return x - y;
    });
    const sortedData =
      sortDirection === SortDirection.DESC ? data1.reverse() : data1;
    setSortedList(sortedData);
  };

  return (
    <AutoSizer disableHeight>
      {({ height, width }) => (
        <Table
          headerHeight={headerHeight}
          width={tableWidth}
          height={tableHeight}
          rowHeight={rowHeight}
          rowCount={rowFinalData.length}
          rowGetter={({ index }) => sortedList[index]}
          sort={sortFunctionality}
          sortBy={sortByValue}
          sortDirection={sortByDirection}
        >
          {colFinalData?.map(
            ({ dataKey, cellRenderer, headerRenderer, ...other }, index) => {
              return (
                <Column
                  key={dataKey}
                  headerStyle={headerStyle}
                  headerRenderer={headerRenderer}
                  cellRenderer={cellRenderer}
                  dataKey={dataKey}
                  {...other}
                />
              );
            }
          )}
        </Table>
      )}
    </AutoSizer>
  );
};

VirtualizedTable.propTypes = {
  rowsData: PropTypes.array,
  columnsData: PropTypes.array,
  tableHeight: PropTypes.number,
  tableWidth: PropTypes.number,
  headerHeight: PropTypes.number,
  rowHeight: PropTypes.number,
  headerStyle: PropTypes.object,
  sortByValue: PropTypes.string,
  sortByDirection: PropTypes.string,
};
