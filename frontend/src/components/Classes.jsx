import "./Classes.css"

export const Classes = ({name,project,number}) => {
    return (
        <div className="classmm">
            <div className="topmm">
                <div className="numbermm">{number}</div>
                <div className="classnamemm">{name}</div>
            </div>
            <div className="classinformationmm">{project} projects</div>
        </div>
    )
}