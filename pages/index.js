import Header from './header'
import AboutUs from './aboutus'
import ProductListinng from './Productlisting'
import PageCenter from './pageCenter'
import Select from './select'

export default function Layout() {
  return ( 
  <>
    <Header /> 
    <PageCenter />
    <ProductListinng />
    <AboutUs />
  </>
  )
};
