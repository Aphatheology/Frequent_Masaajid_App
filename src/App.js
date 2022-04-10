import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Card from './component/Card';
import data from './data';

function App() {
    let eachTour = data.map(eachTourData => {
       return (
        <Card 
        {...eachTourData}
    />
       )
        
    })
  return (
	<div className="App">
        <Header />
        {/* <Card 
            imageUrl="https://source.unsplash.com/WLxQvbMyfas"
            location="Japan"
            title= "Mount Fuji"
            startDate= "12 Jan, 2021"
            endDate= "24 Jan, 2021"
            description= "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."

        /> */}
        {eachTour}
        <Footer />
	</div>
  );
}

export default App;
