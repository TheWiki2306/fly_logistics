import PropTypes from "prop-types";


const SuccessModal = ({ isVisible, onClose }) => {
    if (!isVisible) return null;
  
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-8 rounded-2xl w-11/12 max-w-lg text-center">
          <h2 className="text-2xl font-bold text-green-600 mb-4">Success</h2>
          <p className="text-gray-600 mb-6">
            Price...
          </p>
          <button
            onClick={onClose}
            className="px-6 py-2 bg-lime-500 text-white rounded-lg hover:bg-purple-700"
          >
            Close
          </button>
        </div>
      </div>
    );
  };

  SuccessModal.propTypes = {
    isVisible: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
  };

  export default SuccessModal
  