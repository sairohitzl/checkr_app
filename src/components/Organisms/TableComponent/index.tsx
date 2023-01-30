
import {
    Table,
    TableBody,
    TableContainer,
    TableHead,
    TableRow,
  } from "@mui/material";

import React,{useEffect,useState} from 'react';
import TableHeader,{MyTableHeaderProps} from "../../Molecules/TableHeader";
import CustomTableCell, {MyCellProps} from "../../Molecules/TableCell"

export type MyTableDataProps = {
    headers: MyTableHeaderProps[];
    body: MyCellProps[][];
  };

  export type MyTableProps = {
    data: MyTableDataProps;
  };



const TableComponent = (props: MyTableProps) => {
    const [rows, setRows] = useState<MyTableDataProps>(props.data);

    useEffect(() => {
        setRows(props.data);
      }, [props.data]);

  return (
    <TableContainer>
      <Table>
      <TableHead>
      <TableRow>
            {rows.headers.map((item) => (
              <TableHeader text={item.text} leftAlign={item.leftAlign} />
            ))}
          </TableRow>
          </TableHead>
          <TableBody>
          {rows.body.map((row) => (
            <TableRow>
              {row.map((item) => (
                <CustomTableCell
                  variant={item.variant}
                  text={item.text}
                  statustype={item.statustype}
                  itemId={item.itemId}
                />
              ))}
            </TableRow>
          ))}
        </TableBody>
        </Table>
    </TableContainer>
  );
};

export default TableComponent