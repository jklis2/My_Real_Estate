console.log("content.js loaded");

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log("Message received in content.js:", request);
    if (request.action === "fillForm" && request.data) {
        const formElements = request.data;

        const setNativeValue = (element, value) => {
            const valueSetter = Object.getOwnPropertyDescriptor(element, 'value')?.set;
            const prototype = Object.getPrototypeOf(element);
            const prototypeValueSetter = Object.getOwnPropertyDescriptor(prototype, 'value')?.set;

            if (prototypeValueSetter && valueSetter !== prototypeValueSetter) {
                prototypeValueSetter.call(element, value);
            } else if (valueSetter) {
                valueSetter.call(element, value);
            } else {
                element.value = value;
            }

            element.dispatchEvent(new Event('input', { bubbles: true }));
        };

        if (formElements.name && document.querySelector('input[id="name"]')) {
            setNativeValue(document.querySelector('input[id="name"]'), formElements.name);
        }
        if (formElements.price && document.querySelector('input[id="price"]')) {
            setNativeValue(document.querySelector('input[id="price"]'), formElements.price);
        }
        if (formElements.description && document.querySelector('textarea[id="description"]')) {
            setNativeValue(document.querySelector('textarea[id="description"]'), formElements.description);
        }
        if (formElements.operation && document.querySelector('select[id="operation"]')) {
            setNativeValue(document.querySelector('select[id="operation"]'), formElements.operation);
        }
        if (formElements.propertyTypeName && document.querySelector('select[id="propertyTypeName"]')) {
            setNativeValue(document.querySelector('select[id="propertyTypeName"]'), formElements.propertyTypeName);
        }
        if (formElements.size && document.querySelector('input[id="size"]')) {
            setNativeValue(document.querySelector('input[id="size"]'), formElements.size);
        }
        if (formElements.noRooms && document.querySelector('input[id="noRooms"]')) {
            setNativeValue(document.querySelector('input[id="noRooms"]'), formElements.noRooms);
        }
        if (formElements.noPeople && document.querySelector('input[id="noPeople"]')) {
            setNativeValue(document.querySelector('input[id="noPeople"]'), formElements.noPeople);
        }
        if (formElements.country && document.querySelector('input[id="country"]')) {
            setNativeValue(document.querySelector('input[id="country"]'), formElements.country);
        }
        if (formElements.region && document.querySelector('input[id="region"]')) {
            setNativeValue(document.querySelector('input[id="region"]'), formElements.region);
        }
        if (formElements.city && document.querySelector('input[id="city"]')) {
            setNativeValue(document.querySelector('input[id="city"]'), formElements.city);
        }
        if (formElements.zipCode && document.querySelector('input[id="zipCode"]')) {
            setNativeValue(document.querySelector('input[id="zipCode"]'), formElements.zipCode);
        }
        if (formElements.streetName && document.querySelector('input[id="streetName"]')) {
            setNativeValue(document.querySelector('input[id="streetName"]'), formElements.streetName);
        }
        if (formElements.streetNumber && document.querySelector('input[id="streetNumber"]')) {
            setNativeValue(document.querySelector('input[id="streetNumber"]'), formElements.streetNumber);
        }
    }
});
