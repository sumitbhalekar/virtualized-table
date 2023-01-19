import { PropTypes } from "prop-types";
import * as React from "react";
import { AutoSizer, Column, SortDirection, Table } from "react-virtualized";
import "react-virtualized/styles.css";

export const VirtualizedTable = (props) => {
  const {
    rowsData,
    columnsData,
    tableHeight,
    tableWidth,
    rowHeight,
    headerHeight,
    headerStyle,
    sortByValue,
    sortByDirection,
  } = props;

  const [sortedList, setSortedList] = React.useState(rowsData);

  const sortAction = (sortBy, sortDirection) => {
    const data1 = rowsData?.sort(function (a, b) {
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
          rowCount={rowsData?.length}
          rowGetter={({ index }) => sortedList[index]}
          sort={(p) => {
            sortAction(p.sortBy, p.sortDirection);
          }}
          sortState
          sortBy={sortByValue}
          sortDirection={sortByDirection}
        >
          {columnsData?.map(
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
  sortAction: PropTypes.func,
};
