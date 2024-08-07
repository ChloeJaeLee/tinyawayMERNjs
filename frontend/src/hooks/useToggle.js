export const useToggle = (setStateFunction) => {
    return () => {
        setStateFunction(prevState => !prevState);
    };
};