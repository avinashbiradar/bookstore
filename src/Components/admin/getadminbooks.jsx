import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import "../admin/getadminbooks.scss";
import AppBar from "../AppBar/AppBar";
import AddBook from "../admin/admindashboard"
import Services from "../../Services/productServices";
import ServicesOne from "../../Services/adminService";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
const services = new Services();
const servicesone = new ServicesOne();

export default function BooksTable(props) {
  const [books, setBooks] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState(0);
  const [postsPerPage] = React.useState(11);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [show, setShow] = React.useState(false);

const handleShow = () => setShow(true);
  React.useEffect(() => {
    getAllBooks();
  },[]);

  const counter = useSelector(state => state);
  console.log("counter",counter)
  const dispatch = useDispatch();
  

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
    console.log(data)
   servicesone.deleteItem(data._id)
   .then((data)=> {
     console.log("Successfully deleted"+data);
   })
   .catch((err) => {
     console.log("Error while removing"+err)
   })
 }

 const openDialog =(e,data)=>{
  dispatch({
            type: "Open_Dialog",
            payload:data,
          })
 }
  return (
    <div className="booktable">
    <div>
    <AppBar/>
    </div>
    <div className="addbooks">
    <AddBook/>
    </div>
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
              <EditIcon onClick={(e) => {openDialog(e,data)}} />
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