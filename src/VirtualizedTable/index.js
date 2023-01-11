import * as React from "react";
import { AutoSizer, Column, Table } from "react-virtualized";
import "react-virtualized/styles.css";
import { number, PropTypes } from "prop-types";

export const VirtualizedTable = (props) => {
  const rowFinalData = props.rowsData;
  const colFinalData = props.columnsData;
  const tableHeight = props.tableHeight;
  const tableWidth = props.tableWidth;
  const rowHeight = props.rowHeight;
  const headerHeight = props.headerHeight;
  const headerStyle = props.headerStyle;

  return (
    <AutoSizer disableHeight>
      {({ height, width }) => (
        <Table
          headerHeight={headerHeight}
          width={tableWidth}
          height={tableHeight}
          rowHeight={rowHeight}
          rowCount={rowFinalData.length}
          rowGetter={({ index }) => rowFinalData[index]}
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
};
