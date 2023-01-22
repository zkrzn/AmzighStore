import React, { useEffect, useState } from 'react'

export default function backToTop(props) {
    const [showBackToTop, setShowBackToTop] = useState(false);
    
    useEffect(() => {
    
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const handleScroll = () => {
        if (window.pageYOffset > 100) {
            setShowBackToTop(true);
        } 
        else {
            setShowBackToTop(false);
        }
    };
    return (
        <>
            {props.children}
            {showBackToTop && (
                <div className='bottom-0 right-0 sticky'>
                <button
                    className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full "
                    id="backToTop"
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                >
                    Back to Top
                </button>
                </div>
            )}
        </>
    );
};
