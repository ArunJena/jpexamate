import Link from "next/link";
import NotebookList from "./components/NotebookList";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  const notebooks = [
    { id: 1, name: "Notebook A", brand: "Brand X", price: 999.99 },
    { id: 2, name: "Notebook B", brand: "Brand Y", price: 799.99 },
    { id: 3, name: "Notebook C", brand: "Brand Z", price: 1299.99 },
    { id: 4, name: "Notebook D", brand: "Brand W", price: 899.99 },
    { id: 5, name: "Notebook E", brand: "Brand V", price: 1099.99 },
    { id: 6, name: "Notebook F", brand: "Brand U", price: 849.99 },
    { id: 7, name: "Notebook G", brand: "Brand T", price: 1199.99 },
    { id: 8, name: "Notebook H", brand: "Brand S", price: 959.99 },
    { id: 9, name: "Notebook I", brand: "Brand R", price: 1099.99 },
    { id: 1, name: "Notebook A", brand: "Brand X", price: 999.99 },
    { id: 2, name: "Notebook B", brand: "Brand Y", price: 799.99 },
    { id: 3, name: "Notebook C", brand: "Brand Z", price: 1299.99 },
    { id: 4, name: "Notebook D", brand: "Brand W", price: 899.99 },
    { id: 5, name: "Notebook E", brand: "Brand V", price: 1099.99 },
    { id: 6, name: "Notebook F", brand: "Brand U", price: 849.99 },
    { id: 7, name: "Notebook G", brand: "Brand T", price: 1199.99 },
    { id: 8, name: "Notebook H", brand: "Brand S", price: 959.99 },
    { id: 9, name: "Notebook I", brand: "Brand R", price: 1099.99 },
  ];

  return (
    <main>
      <Navbar />
      <Header />
      <NotebookList notebooks={notebooks} />
      <Footer />
    </main>
  );
}
