// Example contentItem object
const contentItem = {
    SystemFields: {
        ContentItemGUID: '123e4567-e89b-12d3-a456-426614174000',
        CreatedDate: '2024-06-21',
        ModifiedDate: '2024-06-21'
    },
    Title: 'Example Content Item',
    Body: 'This is the body of the content item.'
};

// Assigning the ContentItemGUID to Identifier
const Identifier = contentItem.SystemFields.ContentItemGUID;

console.log(Identifier); // Output: 123e4567-e89b-12d3-a456-426614174000
