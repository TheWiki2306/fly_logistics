import Form from "../components/form";

const Booking = () => {
  return (
    <div className="bg-secondary h-screen overflow-auto">
      <div className="flex flex-col justify-center items-center h-screen overflow-auto">
        <div className="mb-12 text-gray-700 italic text-3xl">
          Fly<strong className="text-gray-400 not-italic">Logistics</strong>{" "}
          <span className="text-sub not-italic">Booking Form.</span>
        </div>
        <Form />
      </div>
    </div>
  );
};

export default Booking;
