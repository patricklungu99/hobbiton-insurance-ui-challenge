import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Contact = () => {
  const handleClick = () => {
    Swal.fire({
      icon: 'info',
      title: 'Contact Page Coming Soon',
      text: 'I’d love to add this, but due to time and scope... I couldn’t',
      confirmButtonText: 'No Worries!',
    });
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center text-center p-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Contact Us</h1>
      <p className="text-gray-600 max-w-md">
        Got questions? Concerns? We'd love to hear from you. (Eventually.)
      </p>
      <button
        onClick={handleClick}
        className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-50 transition-all duration-300"
      >
        Try to Contact Us
      </button>
      <Link to="/" className="text-emerald-600 underline hover:text-emerald-800">
        ← Back to Home
      </Link>
    </div>
  );
};

export default Contact;
