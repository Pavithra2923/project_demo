import { BrowserRouter, Routes , Route} from 'react-router-dom';
import Header from './Components/Header';
import Section from './Components/Section';



export default function RoutePage(){
    return(
    <BrowserRouter>
   
        <Header />
        <Section />
      
        <Routes>
            {/* <Route path='/' exact element={<HomePage />} />
            <Route path='/coins/:id' element={<CoinPage />} /> */}
        </Routes>

 

        

        </BrowserRouter>
    )
}