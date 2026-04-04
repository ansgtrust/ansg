import Link from "next/link";

const DonateButton = () => {
  return (
    <>
      <Link
        href="/donate"
        className="w-full md:w-auto block bg-gradient-to-r from-red-600 to-rose-500 hover:from-red-700 hover:to-rose-600 text-white py-2 px-4 rounded shadow-lg hover:shadow-xl transition-all duration-300"
      >
        Donate Now
      </Link>
    </>
  );
};

export default DonateButton;
