import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-6">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="text-white bg-green-600 hover:bg-green-700 px-5 py-3 rounded-md transition">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
