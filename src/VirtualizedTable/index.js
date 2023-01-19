import { PropTypes } from "prop-types";
import * as React from "react";
import { AutoSizer, Column, Table } from "react-virtualized";
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
    sortAction,
  } = props;

  return (
    <AutoSizer disableHeight>
      {({ height, width }) => (
        <Table
          headerHeight={headerHeight}
          width={tableWidth}
          height={tableHeight}
          rowHeight={rowHeight}
          rowCount={rowsData?.length}
          rowGetter={({ index }) => rowsData[index]}
          sortBy={sortByValue}
          sortDirection={sortByDirection}
          sort={sortAction ? (p) => sortAction(p) : () => {}}
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
