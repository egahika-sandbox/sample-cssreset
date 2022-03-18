export const Sample = () => (
    <>
        <h1>Heading1</h1>
        <h2>Heading2</h2>
        <h3>Heading3</h3>
        <h4>Heading4</h4>
        <h5>Heading5</h5>
        <h6>Heading6</h6>
        <button>Button</button>
        <input type="text" />
        <input type="password" />
        <p>Paragraph</p>
        <a href="https://www.google.com">Link</a>
        <img src="https://via.placeholder.com/300" alt="placeholder" />
        <div>
            <p>Div</p>
            <p>Div</p>
        </div>
        <ul>
            <li>List Item 1</li>
            <li>List Item 2</li>
        </ul>
    </>
);

export default () => {
    return (
        <div>
            <h1>Default</h1>
            <Sample />
        </div>
    );
};
