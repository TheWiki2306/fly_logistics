import * as Yup from 'yup';

export const pricingSchema = Yup.object({
    weight: Yup.number().positive().required('Weight is required').min(1, 'Weight must be positive'),
    origin: Yup.string().trim().min(3, 'Origin must have at least 3 characters').required('Origin is required'),
    destination: Yup.string().trim().min(3, 'Destination must have at least 3 characters').required('Destination is required'),
    cargoType: Yup.string().oneOf(['standard', 'fragile', 'perishable'], 'Invalid cargo type').required('Cargo type is required'),
    priorityLevel: Yup.string().oneOf(['normal_shipping', 'express_shipping', 'overnight_shipping'], 'Invalid priority level').required('Prioity level is required'),
});

