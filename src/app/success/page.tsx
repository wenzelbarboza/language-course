"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";

interface SessionData {
  id: string;
  amount_total: number;
  customer_email: string;
  payment_status: string;
  [key: string]: any;
}

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const sessionId = searchParams.get("session_id");
  const [session, setSession] = useState<SessionData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const res = await fetch(
          `/api/get-stripe-session?session_id=${sessionId}`
        );
        const data = (await res.json()) as SessionData | null;
        setSession(data);
      } catch (err) {
        console.error("Failed to fetch session", err);
      } finally {
        setLoading(false);
      }
    };

    if (!sessionId) {
      router.push("/");
    } else {
      fetchSession();
    }
  }, [sessionId]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full animate-pulse">
          <div className="flex justify-center mb-6">
            <Loader2 className="h-16 w-16 text-indigo-500 animate-spin" />
          </div>
          <h2 className="text-xl text-center font-medium text-gray-700">
            Processing your payment
          </h2>
          <p className="text-gray-500 text-center mt-2">
            Just a moment while we fetch your payment details...
          </p>
        </div>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-red-50 to-orange-50">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
          <div className="flex justify-center mb-6">
            <AlertCircle className="h-16 w-16 text-red-500" />
          </div>
          <h2 className="text-xl text-center font-bold text-gray-800">
            Unable to fetch payment information
          </h2>
          <p className="text-gray-600 text-center mt-3">
            We couldn't retrieve your payment details. Please contact customer
            support.
          </p>
          <div className="mt-8">
            <button
              onClick={() => (window.location.href = "/")}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200"
            >
              Return to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Format the currency as Euros
  const formattedAmount = new Intl.NumberFormat("en-EU", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
  }).format(session.amount_total / 100);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-50 to-emerald-50 p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full transform transition-all duration-500 animate-fadeIn">
        <div className="flex justify-center mb-6">
          <div className="bg-green-100 p-3 rounded-full">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
        </div>

        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Payment Successful!
        </h1>

        <div className="space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-500 mb-1">Amount Paid</p>
            <p className="text-xl font-bold text-gray-800">{formattedAmount}</p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="border-b pb-4">
              <p className="text-sm text-gray-500 mb-1">Name</p>
              <p className="font-medium text-gray-800">
                {session.custom_fields[0].text.value}
              </p>
            </div>

            <div className="border-b pb-4">
              <p className="text-sm text-gray-500 mb-1">Email</p>
              <p className="font-medium text-gray-800">
                {session.customer_details.email}
              </p>
            </div>

            <div className="border-b pb-4">
              <p className="text-sm text-gray-500 mb-1">Status</p>
              <div className="flex items-center">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                <p className="font-medium text-gray-800 capitalize">
                  {session.payment_status}
                </p>
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-1">Transaction ID</p>
              <p className="text-gray-800 font-mono text-sm break-all">
                {session.id}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <button
            onClick={() => (window.location.href = "/")}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200"
          >
            Continue Shopping
          </button>
        </div>
        {/* 
        <p className="text-center text-sm text-gray-500 mt-6">
          A receipt has been sent to your email address.
        </p> */}
      </div>
    </div>
  );
}
