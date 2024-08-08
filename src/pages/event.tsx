import Searchbar from "../components/searchbar";
import EventDisplay from "../components/eventDisplay";
import ProductList from "../components/EventList";
import i1 from "../assets/Image.png"
import i2 from "../assets/Image (1).svg"
import i3 from "../assets/Image (2).svg"
import i4 from "../assets/Image (3).svg"
import i5 from "../assets/Image.svg"
const EventPage = ( ) =>{
    const  p = [
        {
            title: "React Workshop",
            details: "An in-depth workshop on React.js for beginners.",
            image: i1,
            price: "150",
            date: "AUG 15-17"
        },
        {
            title: "Blockchain Bootcamp",
            details: "Learn the fundamentals of blockchain technology.",
            image:i2,
            price: "200",
            date: "SEP 05-07"
        },
        {
            title: "AI Conference",
            details: "Explore the latest advancements in Artificial Intelligence.",
            image: i3,
            price: "250",
            date: "OCT 20-22"
        },
        {
            title: "Data Science Seminar",
            details: "An introduction to data science and machine learning.",
            image: i4,
            price: "180",
            date: "NOV 10-12"
        },
        {
            title: "Cybersecurity Workshop",
            details: "A hands-on workshop on cybersecurity practices.",
            image: i5,
            price: "220",
            date: "DEC 26-28"
        }    ]
    return(
        <>
        <div style={{height:"50vw"}}>
        <div style={{display:"flex",justifyContent:'flex-end',paddingRight:"5%",backgroundColor:"#D7C5A8",paddingBottom:"3%"}}>
            <Searchbar/>
            
        </div>
        <EventDisplay/>
        <ProductList products={p}/></div>
        </>
    )
}
export default EventPage;