import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import "../admin/getadminbooks.scss";
import Services from "../../Services/productServices";
import ServicesOne from "../../Services/adminService";
const services = new Services();
const servicesone = new ServicesOne();

export default function BooksTable(props) {
  const [books, setBooks] = React.useState([]);
  const [data, setData] = React.useState(0);
  const [postsPerPage] = React.useState(11);
  const [currentPage, setCurrentPage] = React.useState(1);
  React.useEffect(() => {
    getAllBooks();
  },[]);

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

  const DeleteItem = (e,data) => {
     e.stopPropagation();
    console.log(data._id)
   servicesone.deleteItem(data._id)
   .then((data)=> {
     console.log("Successfully deleted"+data);
     props.getAllBooks();
   })
   .catch((err) => {
     console.log("Error while removing"+err)
   })
 }

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
              <Td>{data._id}</Td>
              <td>
                <EditIcon/>
              </td>
              <td>
                 <DeleteIcon onClick={(e) => {DeleteItem(e,data)}} />
              </td>
            </Tr>
          </Tbody>
        ))}
      </Table>
    </div>
  );
}
