document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('create-property-correct').addEventListener('click', function() {
        const correctData = {
            name: "Somebody",
            price: "123",
            description: "This is a correct test message.",
            operation: "For Rent",
            propertyTypeName: "Apartment",
            size: 80,
            noRooms: 3,
            noPeople: 10,
            // features - Cannot be filled by this extension :(
            country: "United Kingdom",
            region: "England",
            city: "London",
            zipCode: "12345",
            streetName: "Some Street",
            streetNumber: 89
        };
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: "fillForm", data: correctData });
        });
    });

    document.getElementById('create-property-incorrect').addEventListener('click', function() {
        const incorrectData = {
            name: "Aaz",
            price: "2",
            description: "aaa",
            operation: "For Sell",
            propertyTypeName: "Apartment",
            size: 80,
            noRooms: 3,
            noPeople: 10,
            // features - Cannot be filled by this extension :(
            country: "United Kingdom",
            region: "England",
            city: "London",
            zipCode: "12345",
            streetName: "Some Street",
            streetNumber: 89

        };
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: "fillForm", data: incorrectData });
        });
    });
});