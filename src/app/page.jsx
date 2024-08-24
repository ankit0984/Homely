import Hero from '@/app/app_components/Hero/Hero'
import Company from '@/app/app_components/CompanySection/Company'
import About from '@/app/app_components/About/About'
import Catalogue from '@/app/app_components/Catalogue/Catalogue'
import CatalogueSwiper from '@/app/app_components/Catalogue/CatalogueSwiper'
import Contact from './app_components/Contact/Contact'
export default function Home() {
  return (
    <>
      <Hero />
      <Company />
      <About />
      <Catalogue />
      <CatalogueSwiper />
      <Contact />
    </>
  )
}
