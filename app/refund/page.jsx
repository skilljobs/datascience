export default function RefundPage() {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Refund Policy</h1>
        <ul className="list-decimal pl-5 text-gray-700 space-y-3">
          <li>
            Students can withdraw their money within <span className="font-semibold">3 days</span> of admission. They will receive <span className="font-semibold">70%</span> of their admission fee.
          </li>
          <li>After joining some classes, students cannot claim a refund if their payment policy is installment-based.</li>
          <li>Refunds cannot be claimed for personal or other issues. However, the service will remain available for them to access anytime they choose.</li>
        </ul>
      </div>
    </div>
  );
}
