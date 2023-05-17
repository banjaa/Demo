import "./Box.css"

export const Box2 = ({img_url, title}) => {
    return (
        <div  className="Box2">
            <img className="img" src={img_url}/>
            <h3 className="txt" style={{ marginTop:"3%"}}>{title}</h3>
        </div>
    )
}