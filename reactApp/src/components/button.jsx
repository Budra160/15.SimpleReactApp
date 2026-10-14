
export function Button({children, id, ...props}){

    return (
        <button className="button" id={id} {...props}>
            {children}
        </button>
    );
}