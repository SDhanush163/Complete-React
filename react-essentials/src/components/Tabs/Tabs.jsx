// For built in components, set ButtonsContainer with a string
// For custom components, set ButtonsContainer with a variable in {}
function Tabs({ children, buttons, ButtonsContainer = "menu" }) {
    return (
        <>
            <ButtonsContainer>{buttons}</ButtonsContainer>
            {children}
        </>
    );
}
export default Tabs;
