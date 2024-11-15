
export default function loading() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="flex justify-center items-center space-x-2">
                <div className="w-20 h-20 border-4 border-t-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
                <span className="text-gray-700">Loading...</span>
            </div>
        </div>

    )
}
