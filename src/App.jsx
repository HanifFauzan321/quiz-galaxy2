import Footer from "./components/Footer";
import Header from "./components/Header";
import MyList from "./components/MyList";


function App() {
  const songs = [
    {
        id:"1",
        namaPenyanyi:"Mathew Shadow",
        namaLagu: "Dear God",
        band:"A7X",
        poto:"public/1616246.jpg",
    },
];
  return (
    <>
    <Header />
    <div className="flex gap-5 flex-wrap bg-gradient-to-r from-blue-100 to-blue-500 p-6">
    {
      songs.map((data)=>(

        <MyList key={data} songsPropst={data} />
      ))}
    </div>
    <Footer />
    </>
  );
}

export default App;
