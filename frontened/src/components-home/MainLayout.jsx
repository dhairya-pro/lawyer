import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from '../navbar/Navbar' 
import Footer from '../footer/Footer' 

const DISCLAIMER_KEY = 'disclaimerAccepted';
const DISCLAIMER_TIMESTAMP_KEY = 'disclaimerTimestamp';
const DISCLAIMER_EXPIRY_TIME = 10 * 60 * 1000; // 10 minutes in milliseconds

const disclaimerText = `The Bar Council of India does not permit advertisement or solicitation by advocates in any form or manner. By accessing this website, you expressly acknowledge and confirm that you are seeking information relating to Advocate Jimit Ankur Thakore of your own accord and without any solicitation, advertisement, or inducement from Advocate Jimit Ankur Thakore or any of his associates or representatives.\n\nAll content provided on this website is intended strictly for informational purposes and should not, under any circumstances, be construed as legal advice. Visitors should not act or refrain from acting upon information available on this website without seeking professional legal counsel.\n\nAdvocate Jimit Ankur Thakore expressly disclaims liability concerning actions taken or omitted based on any or all of the content provided herein.\n\nThe content of this website is the intellectual property of Advocate Jimit Ankur Thakore and may not be reproduced, distributed, transmitted, or modified without prior written consent.\n\nBy continuing to use this website, you acknowledge your acceptance and understanding of this disclaimer.`;

const MainLayout = () => {
    const location = useLocation();
    const [showDisclaimer, setShowDisclaimer] = useState(true);

    // Check if disclaimer has expired
    const checkDisclaimerExpiry = () => {
        const timestamp = localStorage.getItem(DISCLAIMER_TIMESTAMP_KEY);
        if (timestamp) {
            const currentTime = new Date().getTime();
            const storedTime = parseInt(timestamp);
            if (currentTime - storedTime < DISCLAIMER_EXPIRY_TIME) {
                setShowDisclaimer(false);
                return true;
            }
        }
        return false;
    };

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top on route change
    }, [location.pathname]);

    // Check disclaimer status on component mount
    useEffect(() => {
        const hasValidDisclaimer = checkDisclaimerExpiry();
        if (!hasValidDisclaimer) {
            setShowDisclaimer(true);
        }
    }, []);

    // Handle disclaimer acceptance
    const handleDisclaimerAccept = () => {
        const currentTime = new Date().getTime();
        localStorage.setItem(DISCLAIMER_TIMESTAMP_KEY, currentTime.toString());
        setShowDisclaimer(false);
    };

    return (
      <div>
        <div className={showDisclaimer ? 'filter blur-sm pointer-events-none select-none' : ''}>
          <Navbar />
          <Outlet />  
          <Footer />
        </div>
        {showDisclaimer && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
            <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-8 text-gray-800 relative pointer-events-auto select-auto">
              <h2 className="text-xl font-bold mb-4 text-center">Disclaimer</h2>
              <div className="text-sm whitespace-pre-line mb-6" style={{ maxHeight: '50vh', overflowY: 'auto' }}>{disclaimerText}</div>
              <button
                className="block mx-auto bg-[#c25d45] hover:bg-[#b14a35] text-white font-semibold px-6 py-2 rounded-full transition-colors duration-300 shadow-md"
                onClick={handleDisclaimerAccept}
              >
                I Accept
              </button>
            </div>
          </div>
        )}
      </div>
    );
};

export default MainLayout;
