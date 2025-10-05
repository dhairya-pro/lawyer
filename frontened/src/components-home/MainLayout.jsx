import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from '../navbar/Navbar' 
import Footer from '../footer/Footer' 

const DISCLAIMER_KEY = 'disclaimerAccepted';
const DISCLAIMER_TIMESTAMP_KEY = 'disclaimerTimestamp';
const DISCLAIMER_EXPIRY_TIME = 10 * 60 * 1000; // 10 minutes in milliseconds

const disclaimerText = `The Bar Council of India prohibits legal advertising. By accessing this website, you acknowledge that you are seeking information about Advocate Jimit Ankur Thakore voluntarily, without any solicitation or inducement.
Content here is for general information only and does not constitute legal advice or create an advocate–client relationship. For specific legal concerns, please consult a qualified professional.
Advocate Jimit Ankur Thakore is not liable for actions taken based on this content. All material is his intellectual property and may not be used without prior written consent.
By using this site or clicking “I Accept,” you agree to this disclaimer.`;

const MainLayout = () => {
    const location = useLocation();
    const [showDisclaimer, setShowDisclaimer] = useState(null);

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
        setShowDisclaimer(true);
        return false;
    };

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top on route change
    }, [location.pathname]);

    // Check disclaimer status on component mount
    useEffect(() => {
        checkDisclaimerExpiry();
    }, []);

    // Handle disclaimer acceptance
    const handleDisclaimerAccept = () => {
        const currentTime = new Date().getTime();
        localStorage.setItem(DISCLAIMER_TIMESTAMP_KEY, currentTime.toString());
        setShowDisclaimer(false);
    };

    if (showDisclaimer === null) {
      // Don't render anything until the check is complete
      return null;
    }

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
