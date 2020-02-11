
const ObjectPrototypeHelper = () => {
    Object.prototype.clone = function() {
        return { ...this };
    };
};

export default ObjectPrototypeHelper;