export default function DonationPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto p-8 bg-white rounded-xl shadow-lg">
      <h1 className="text-4xl font-bold mb-6 text-orange-600">
        Donation Policy
      </h1>
      <p className="text-gray-700 mb-4">
        <strong>Last updated:</strong> April 2026
      </p>

      <p className="text-gray-700 mb-4">
        This Donation Policy outlines how donations are accepted, acknowledged,
        and used by Anath Narayan Sewa Gurukulam Trust.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-orange-500">
        1. Donation Acceptance
      </h2>
      <p className="text-gray-700 mb-4">
        We accept donations via secure online methods: UPI, credit/debit card,
        net banking, and wallets.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-orange-500">
        2. Use of Funds
      </h2>
      <p className="text-gray-700 mb-4">Donations are used to support:</p>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>Residential care for the elderly</li>
        <li>Gaushala & animal welfare</li>
        <li>Community food programs</li>
        <li>Educational and spiritual activities</li>
        <li>Other charitable initiatives aligned with our mission</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-orange-500">
        3. Non-Refundable Nature
      </h2>
      <p className="text-gray-700 mb-4">
        Donations are voluntary and generally non-refundable, except for payment
        errors or as required by law. Refund requests:{" "}
        <strong>info@anathnarayansewagurukulamtrust.com</strong>
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-orange-500">
        4. Acknowledgement and Receipts
      </h2>
      <p className="text-gray-700 mb-4">
        We issue receipts for all contributions. Email receipts are sent
        automatically. Ensure your details are correct for tax purposes.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-orange-500">
        5. Tax Benefits
      </h2>
      <p className="text-gray-700 mb-4">
        Donations may qualify for tax deductions under Indian law (e.g., Section
        80G). Consult your tax advisor.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-orange-500">
        6. Privacy
      </h2>
      <p className="text-gray-700 mb-4">
        Personal data collected for donations is handled according to our{" "}
        <a href="/privacy-policy" className="text-orange-500 underline">
          Privacy Policy
        </a>
        .
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-orange-500">
        7. Contact
      </h2>
      <p className="text-gray-700 mb-4">
        For donation queries, email:{" "}
        <strong>info@anathnarayansewagurukulamtrust.com</strong>
      </p>
    </div>
  );
}
