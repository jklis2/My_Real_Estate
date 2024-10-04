export const nameValidation = {
  required: { value: true, message: 'Name is required' },
  minLength: { value: 3, message: 'Name must be at least 3 characters long' },
  maxLength: { value: 100, message: 'Name must be at most 100 characters long' },
};

export const descriptionValidation = {
  required: { value: true, message: 'Description is required' },
  minLength: { value: 10, message: 'Description must be at least 10 characters' },
  maxLength: { value: 500, message: 'Description must be at most 1000 characters' },
};

export const numberOfRoomsValidation = {
  required: { value: true, message: 'Number of rooms is required' },
  min: { value: 1, message: 'Number of rooms must be at least 1' },
  max: { value: 100, message: 'Number of rooms must be at most 100' },
};

export const numberOfPeopleValidation = {
  required: { value: true, message: 'Number of people is required' },
  min: { value: 1, message: 'Number of people must be at least 1' },
  max: { value: 1000, message: 'Number of people must be at most 1000' },
};

export const sizeValidation = {
  required: { value: true, message: 'Size is required' },
  min: { value: 10, message: 'Size must be at least 10 square meters' },
  max: { value: 10000, message: 'Size must be at most 10000 square meters' },
};

export const priceValidation = {
  required: { value: true, message: 'Price is required' },
  min: { value: 0, message: 'Price must be a positive number' },
};
