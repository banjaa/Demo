import "./Classes.css"

export const Classes = ({name,first, second,number}) => {
    return (
        <div className="classmm">
            <div className="topmm">
                <div className="numbermm">{number}</div>
                <div className="classnamemm">{name}</div>
            </div>
            <div className="classinformationmm">{first} {second}</div>
        </div>
    )
}