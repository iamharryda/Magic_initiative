import { useEffect, useState } from "react";
import { useSearchParams, useLocation, Link } from "react-router-dom";

function PaymentResult() {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const [status, setStatus] = useState("loading"); // loading, success, cancel, error
  const [message, setMessage] = useState("Processing your payment...");

  useEffect(() => {
    const processPayment = async () => {
      const sessionId = searchParams.get("session_id");
      const isDonation = location.pathname.includes("/donate/");
      const isSuccess = location.pathname.includes("/success");

      if (!isSuccess) {
        setStatus("cancel");
        setMessage("Your payment was cancelled or failed.");
        return;
      }

      if (!sessionId) {
        setStatus("error");
        setMessage("Invalid request. Missing session ID.");
        return;
      }

      try {
        const endpoint = isDonation 
          ? `http://localhost:5006/api/v1/donation/confirm?session_id=${sessionId}`
          : `http://localhost:5006/api/v1/sponsorship/confirm-setup?session_id=${sessionId}`;
          
        const res = await fetch(endpoint, {
          method: "GET",
          headers: { "Content-Type": "application/json" }
        });
        
        const data = await res.json();
        if (data.paid) {
          setStatus("success");
          setMessage(
            isDonation 
              ? "We have successfully received your generous donation. Thank you for making a difference in the lives of those in need." 
              : "Your sponsorship setup is complete. Thank you for your heartfelt commitment to changing a child's life."
          );
        } else {
          setStatus("error");
          setMessage("We could not verify your payment at this time. If you believe this is an error, please contact our support team.");
        }
      } catch (error) {
        console.error("Confirmation error:", error);
        setStatus("error");
        setMessage("An unexpected error occurred while confirming your transaction. Please reach out to us if you need assistance.");
      }
    };

    processPayment();
  }, [searchParams, location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8f5f3] text-[#4a0e0e] px-4">
      <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl max-w-lg w-full text-center">
        {status === "loading" && (
          <div className="flex flex-col items-center justify-center">
            <div className="w-10 h-10 border-4 border-[#7b1e1e] border-t-transparent rounded-full animate-spin mb-4"></div>
            <h2 className="text-2xl font-bold text-[#4a0e0e]">Verifying Transaction...</h2>
            <p className="text-gray-500 mt-2">Please wait a moment while we securely confirm your details.</p>
          </div>
        )}
        {status === "success" && (
          <div>
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">✓</div>
            <h2 className="text-3xl font-bold text-[#4a0e0e] mb-4">Payment Successful</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">{message}</p>
          </div>
        )}
        {status === "cancel" && (
          <div>
            <div className="w-16 h-16 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">!</div>
            <h2 className="text-3xl font-bold text-[#4a0e0e] mb-4">Transaction Cancelled</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">It looks like you cancelled the checkout process. We completely understand. We are always here whenever you are ready to support our mission.</p>
          </div>
        )}
        {status === "error" && (
          <div>
            <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">✕</div>
            <h2 className="text-3xl font-bold text-[#4a0e0e] mb-4">Transaction Incomplete</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">{message}</p>
          </div>
        )}
        
        <Link 
          to="/" 
          className="inline-block px-8 py-3 rounded-full bg-[#7b1e1e] hover:bg-[#611515] text-white font-bold transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}

export default PaymentResult;
