"use client";

import { useState } from "react";

type RazorpayOrderProps = {
  id: string;
  amount: number;
  currency: string;
};

type RazorpayResponse = {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
};

export default function DonatePage() {
  const [amount, setAmount] = useState<number>(501);
  const [loading, setLoading] = useState<boolean>(false);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [contact, setContact] = useState<string>("");

  const presetAmounts: number[] = [251, 501, 1100, 2100, 5100];

  // Load Razorpay SDK dynamically
  const loadRazorpay = (): Promise<boolean> => {
    return new Promise((resolve) => {
      if (document.getElementById("razorpay-script")) return resolve(true);
      const script = document.createElement("script");
      script.id = "razorpay-script";
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleDonate = async () => {
    if (!amount || amount < 1) return alert("Please enter a valid amount");
    if (!name || !email || !contact) return alert("Please fill all details");

    setLoading(true);
    const isLoaded = await loadRazorpay();
    if (!isLoaded) {
      alert("Failed to load Razorpay SDK");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount }),
      });

      const order: RazorpayOrderProps = await res.json();

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID as string,
        amount: order.amount,
        currency: order.currency,
        name: "Anath Narayan Sewa Gurukulam Trust",
        description: "Donation",
        order_id: order.id,

        handler: async function (response: RazorpayResponse) {
          try {
            const verifyRes = await fetch("/api/verify-payment", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(response),
            });
            const data = await verifyRes.json();
            if (data.success) {
              alert("🙏 Donation successful! Thank you.");
              setAmount(501);
              setName("");
              setEmail("");
              setContact("");
            } else alert("Payment verification failed ❌");
          } catch (err) {
            console.error(err);
            alert("Error verifying payment");
          }
        },

        prefill: { name, email, contact },
        theme: { color: "#FF7A00" },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <div className="bg-orange-50 min-h-screen py-16 px-4">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-orange-600 mb-4">
          🙏 Support Our Mission
        </h1>
        <p className="text-gray-700 text-lg md:text-xl">
          Your contribution helps Anath Narayan Sewa Gurukulam Trust provide
          care for the elderly, support our gaushala, and promote spiritual and
          educational activities.
        </p>
      </div>

      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
        {/* Donor Info */}
        <h2 className="text-2xl font-semibold text-orange-500 mb-6 text-center">
          Enter Your Details
        </h2>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <input
            type="text"
            placeholder="Full Name"
            className="border rounded-xl p-3 focus:outline-orange-400"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="border rounded-xl p-3 focus:outline-orange-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="border rounded-xl p-3 md:col-span-2 focus:outline-orange-400"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>

        {/* Preset Amounts */}
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          Choose an Amount
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
          {presetAmounts.map((amt) => (
            <button
              key={amt}
              onClick={() => setAmount(amt)}
              className={`p-3 rounded-xl border cursor-pointer transition-all ${
                amount === amt
                  ? "bg-orange-500 text-white shadow-lg"
                  : "bg-white hover:bg-gray-100"
              }`}
            >
              ₹{amt}
            </button>
          ))}
        </div>

        {/* Custom Amount */}
        <input
          type="number"
          placeholder="Enter custom amount"
          className="w-full border rounded-xl p-3 mb-6 focus:outline-orange-400"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />

        {/* Donate Button */}
        <button
          onClick={handleDonate}
          disabled={loading}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl text-lg font-semibold transition-all shadow-md"
        >
          {loading ? "Processing..." : `Donate ₹${amount}`}
        </button>

        {/* Trust / Impact Section */}
        <div className="text-center text-gray-600 mt-8 space-y-2">
          <p>🔒 Secure Payments • UPI Enabled • 80G Tax Benefits</p>
          <p>🐄 Support Gaushala • 🍲 Feed the Needy • 🏡 Elderly Care</p>
        </div>
      </div>
    </div>
  );
}

// "use client";

// import { useState } from "react";

// type RazorpayOrder = {
//   id: string;
//   amount: number;
//   currency: string;
// };

// type RazorpayResponse = {
//   razorpay_payment_id: string;
//   razorpay_order_id: string;
//   razorpay_signature: string;
// };

// export default function RazorpayOrder() {
//   const [amount, setAmount] = useState<number>(501);
//   const [loading, setLoading] = useState<boolean>(false);

//   const [name, setName] = useState<string>("");
//   const [email, setEmail] = useState<string>("");
//   const [contact, setContact] = useState<string>("");

//   const presetAmounts = [251, 501, 1100, 2100, 5100];

//   const loadRazorpay = (): Promise<boolean> => {
//     return new Promise((resolve) => {
//       if (document.getElementById("razorpay-script")) {
//         return resolve(true);
//       }

//       const script = document.createElement("script");
//       script.id = "razorpay-script";
//       script.src = "https://checkout.razorpay.com/v1/checkout.js";
//       script.onload = () => resolve(true);
//       script.onerror = () => resolve(false);
//       document.body.appendChild(script);
//     });
//   };

//   const handleDonate = async () => {
//     if (!amount || amount < 1) {
//       alert("Please enter a valid amount");
//       return;
//     }

//     if (!name || !email || !contact) {
//       alert("Please fill all details");
//       return;
//     }

//     setLoading(true);

//     try {
//       const sdkLoaded = await loadRazorpay();

//       if (!sdkLoaded) {
//         alert("Failed to load Razorpay SDK");
//         setLoading(false);
//         return;
//       }

//       const res = await fetch("/api/create-order", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ amount }),
//       });

//       if (!res.ok) {
//         throw new Error("Failed to create order");
//       }

//       const order: RazorpayOrder = await res.json();

//       if (typeof window === "undefined" || !window.Razorpay) {
//         alert("Razorpay not available");
//         setLoading(false);
//         return;
//       }

//       const options = {
//         key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID as string,
//         amount: order.amount,
//         currency: order.currency,
//         name: "Anath Narayan Sewa Gurukulam Trust",
//         description: "Donation",
//         order_id: order.id,

//         handler: async (response: RazorpayResponse) => {
//           try {
//             const verifyRes = await fetch("/api/verify-payment", {
//               method: "POST",
//               headers: {
//                 "Content-Type": "application/json",
//               },
//               body: JSON.stringify(response),
//             });

//             const data = await verifyRes.json();

//             if (data.success) {
//               alert("🙏 Donation successful! Thank you.");

//               // Reset form
//               setAmount(501);
//               setName("");
//               setEmail("");
//               setContact("");
//             } else {
//               alert("Payment verification failed ❌");
//             }
//           } catch (err) {
//             console.error(err);
//             alert("Error verifying payment");
//           } finally {
//             setLoading(false);
//           }
//         },

//         modal: {
//           ondismiss: () => {
//             setLoading(false);
//           },
//         },

//         prefill: {
//           name,
//           email,
//           contact,
//         },

//         theme: {
//           color: "#FF7A00",
//         },
//       };

//       const paymentObject = new window.Razorpay(options);
//       paymentObject.open();
//     } catch (err) {
//       console.error(err);
//       alert("Something went wrong");
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="bg-orange-50 py-16 px-4">
//       <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
//         <h2 className="text-3xl font-bold text-center mb-6">
//           Donate & Make a Difference ❤️
//         </h2>

//         {/* Donor Info */}
//         <div className="grid md:grid-cols-2 gap-4 mb-6">
//           <input
//             type="text"
//             placeholder="Full Name"
//             className="border rounded-xl p-3"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             className="border rounded-xl p-3"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             type="tel"
//             placeholder="Phone Number"
//             className="border rounded-xl p-3 md:col-span-2"
//             value={contact}
//             onChange={(e) => setContact(e.target.value)}
//           />
//         </div>

//         {/* Preset Amounts */}
//         <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
//           {presetAmounts.map((amt) => (
//             <button
//               key={amt}
//               onClick={() => setAmount(amt)}
//               className={`p-3 rounded-xl border cursor-pointer ${
//                 amount === amt
//                   ? "bg-orange-500 text-white"
//                   : "bg-white hover:bg-gray-100"
//               }`}
//             >
//               ₹{amt}
//             </button>
//           ))}
//         </div>

//         {/* Custom Amount */}
//         <input
//           type="number"
//           placeholder="Enter custom amount"
//           className="w-full border rounded-xl p-3 mb-6"
//           value={amount}
//           onChange={(e) => setAmount(Number(e.target.value))}
//         />

//         {/* Donate Button */}
//         <button
//           onClick={handleDonate}
//           disabled={loading}
//           className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 cursor-pointer rounded-xl text-lg font-semibold"
//         >
//           {loading ? "Processing..." : `Donate ₹${amount}`}
//         </button>

//         {/* Trust Indicators */}
//         <div className="text-center text-sm text-gray-500 mt-6">
//           🔒 Secure Payments • UPI Enabled • 80G Tax Benefits
//         </div>
//       </div>
//     </div>
//   );
// }
