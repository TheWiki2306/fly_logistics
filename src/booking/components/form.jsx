import { useFormContext } from '../../context/formContext';
import SuccessModal from '../../component/modal';

const Form = () => {

  const { formData, errors, handleInputChange, handleSubmit, isModalVisible, setModalVisible } = useFormContext()
 


  return (
    <section className='bg-gray-600 p-8  xl:w-custom1 lg:w-custom1 md:w-custom2 sm:w-custom3 rounded-2xl'>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col gap-2'>
          <label className='text-sub text-blue-100'>Weight: </label>
          <input
            type="number"
            name="weight"
            placeholder="Input weight of the item"
            value={formData.weight}
            onChange={handleInputChange}
            className='w-auto py-2.5 px-2.5 bg-white  border-white border-2 rounded-xl'
          />
          {errors.weight && <p className='text-red-600'>Weight is required</p>}
        </div>

        <div className='flex flex-col gap-2 mt-6'>
          <label className='text-sub text-blue-100'>Origin: </label>
          <input
            type="text"
            name="origin"
            placeholder="Input sending point. e.g Texas"
            value={formData.origin}
            onChange={handleInputChange}
            className='w-auto py-2.5 px-2.5 bg-white border-white border-2 rounded-xl'

          />
          {errors.origin && <p className='text-red-600'>{errors.origin}</p>}
        </div>

        <div className='flex flex-col gap-2 mt-6'>
          <label className='text-sub text-blue-100'>Destination</label>
          <input
            type="text"
            name="destination"
            placeholder="Input the item destination."
            value={formData.destination}
            onChange={handleInputChange}
            className='w-auto py-2.5 px-2.5 bg-white border-2  border-white rounded-xl'
          />
          {errors.destination && <p className='text-red-600'>{errors.destination}</p>}
        </div>

        <div className="flex flex-col gap-2 mt-6">
            <label className="text-sub text-blue-100">Cargo type</label>
            <select
                name="cargoType"
                value={formData.cargoType}
                onChange={handleInputChange}
                className="w-auto py-2.5 px-2.5 bg-white border-2 border-white rounded-xl"
            >
                <option value="standard">Standard</option>
                <option value="fragile">Fragile</option>
                <option value="perishable">Perishable</option>
            </select>
            {errors.cargoType && <p className="text-red-600">{errors.cargoType}</p>}
        </div>

        <div className="flex flex-col gap-2 mt-6">
            <label className="text-sub text-blue-100">Priority Level</label>
            <select
                name="priorityLevel"
                value={formData.priorityLevel}
                onChange={handleInputChange}
                className="w-auto py-2.5 px-2.5 bg-white border-2 border-white rounded-xl"
            >
                <option value="normal_shipping">Normal shipping</option>
                <option value="express_shipping">Express shipping</option>
                <option value="overnight_shipping">Overnight shipping</option>
            </select>
            {errors.priorityLevel && <p className="text-red-600">{errors.priorityLevel}</p>}
        </div>



        <div className='flex justify-center mt-12'>
          <button type="submit" className=" px-24 text-white bg-gray-400 pt-2 pb-3 rounded-xl border-0 transition-all duration-300 hover:bg-gray-500 hover:scale-105">Submit</button>
        </div>
      </form>

      <SuccessModal isVisible={isModalVisible} onClose={() => {setModalVisible(false)}}/>
    </section>

  );
};

export default Form;
