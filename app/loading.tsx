export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <div className="relative w-24 h-24 mx-auto mb-4">
          <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-primary-red border-t-transparent rounded-full animate-spin"></div>
        </div>
        <p className="text-lg text-gray-600">טוען...</p>
      </div>
    </div>
  );
}

