import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import Button from "@material-ui/core/Button";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import "../admin/getadminbooks.scss";
import { makeStyles } from '@material-ui/core/styles';
import Services from "../../Services/productServices";
const services = new Services();
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  },
}));
export default function TableExample(props) {
  const classes = useStyles();
  const [books, setBooks] = React.useState([]);
  const [sort, setSort] = React.useState({ type: "" });
  const [data, setData] = React.useState(0);
  const [postsPerPage] = React.useState(11);
  const [currentPage, setCurrentPage] = React.useState(1);
  React.useEffect(() => {
    getAllBooks();
  }, []);

  const getAllBooks = () => {
    services
      .getBooks()
      .then((data) => {
        setBooks(data.data.result);
        setData(data.data.result);
        books.map((data) => (data.isCart = false));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const indexOfLastBook = currentPage * postsPerPage;
  const indexOfFirstBook = indexOfLastBook - postsPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  return (
    <div className="booktable">
      <Table>
        <Thead>
          <Tr>
            <Th className="row">BOOKNAME</Th>
            <Th className="row">AUTHOR</Th>
            <Th className="row">DESCRIPTION</Th>
            <Th className="row">QUANTITY</Th>
            <Th className="row">PRICE</Th>
            <Th className="row">DISCOUNTED-PRICE</Th>
            <Th className="row">UPDATE</Th>
            <Th className="row">DELETE</Th>
          </Tr>
        </Thead>

        {currentBooks.map((data) => (
          <Tbody>
            <Tr>
              <Td>{data.bookName}</Td>
              <Td>{data.author}</Td>
              <Td>{data.description}</Td>
              <Td> Rs. {data.quantity}</Td>
              <Td>{data.price}</Td>
              <Td>{data.discountPrice}</Td>
              <td>
                <EditIcon className={classes.margin} />
              </td>
              <td>
                 <DeleteIcon/>
              </td>
            </Tr>
          </Tbody>
        ))}
      </Table>
    </div>
  );
}
