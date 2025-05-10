import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './components-home/MainLayout'
import ContactForm from './components/ContactForm.jsx'
import Services  from './components-services/Services.jsx'
import Career from './components-career/Career.jsx'
import About from './components-about/About.jsx'
import CivilLitigation from './services/CivilLitigation.jsx'
import ChequeBounceCases from './services/ChequeBounceCases.jsx'
import CriminalDefense from './services/CriminalDefense.jsx'
import FamilyLaw from './services/FamilyLaw.jsx'
import CorporateBusinessLaw from './services/CorporateBusinessLaw.jsx'
import PropertyLaw from './services/PropertyLaw.jsx'
import IntellectualPropertyLaw from './services/IntellectualPropertyLaw.jsx'
import LabourEmploymentLaw from './services/LabourEmploymentLaw.jsx'
import HighCourtRepresentation from './services/HighCourtRepresentation.jsx'
import DivorceSeparation from './services/DivorceSeparation.jsx'
import BailAnticipatoryBail from './services/BailAnticipatoryBail.jsx'
import CourtMarriageRegistration from './services/CourtMarriageRegistration.jsx'
import DebtRecovery from './services/DebtRecovery.jsx'
import CompanyLawNCLT from './services/CompanyLawNCLT.jsx'
import CyberLaw from './services/CyberLaw.jsx'
import LegalAdvisory from './services/LegalAdvisory.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // Use MainLayout as the wrapper
    children: [
      { path: "/", element: <App /> },
      { path: "/about", element:<About/>},
      { path: "/contact", element: <ContactForm /> },
      { path: "/service", element: <Services /> },
      { path: "/career", element: <Career /> },
      {path:"/civil-litigation" , element:<CivilLitigation/>},
      {path:"/cheque-bounce" , element:<ChequeBounceCases/>},
      {path:"/criminal-defense" , element:<CriminalDefense/>},
      {path:"/family-law" , element:<FamilyLaw/>},
      {path:"/corporate-business-law" , element:<CorporateBusinessLaw/>},
      {path:"/property-disputes" , element:<PropertyLaw/>},
      {path:"/ip-rights" , element:<IntellectualPropertyLaw/>},
      {path:"/employment-law" , element:<LabourEmploymentLaw/>},
      {path:"/high-court-representation" , element:<HighCourtRepresentation/>},
      {path:"/divorce-separation" , element:<DivorceSeparation/>},
      {path:"/bail" , element:<BailAnticipatoryBail/>},
      {path:"/court-marriage" , element:<CourtMarriageRegistration/>},
      {path:"/debt-recovery" , element:<DebtRecovery/>},
      {path:"/company-law-nclt" , element:<CompanyLawNCLT/>},
      {path:"/cyber-law" , element:<CyberLaw/>},
      {path:"/legal-advisory" , element:<LegalAdvisory/>},
    ],
  },

]);




createRoot(document.getElementById('root')).render(
 
  <React.StrictMode>

    <RouterProvider router={router} />
  </React.StrictMode>
)
