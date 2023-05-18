import "./Home.css"
import {Box} from "../components/Box"
import {Box2} from "../components/Box2"
import {Navbar} from "../components/Navbar"
export const Home = () => {
          return ( 
            <div className="Home">
                <Navbar/>
                <section>
                    <h1 className="title">Pinecone academy works of 2023</h1>
                  <div class='air air1'></div>
                  <div class='air air2'></div>
                  <div class='air air3'></div>
                  <div class='air air4'></div>
                </section>
            <div className="Middler">
                <div style={{width:"100%"}}>
                    <h2 className="ani" style={{marginTop:"5%", marginBottom:"1%", color:"grey"}}>Trending</h2>
                </div>
              
            <div className="scroll_box">
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
            </div>
            <div style={{width:"100%"}}>
                <h2 className="ani" style={{marginTop:"8%", marginBottom:"1%", color:"grey"}}>Latest</h2>
            </div>
            
            <div className="Box1">
                <Box2/>
                <Box2/>
                <Box2/>
                <Box2/>
                <Box2/>
                <Box2/>
            </div>

            <div className="ani" style={{width:"100%", display:"flex", justifyContent:"center"}}>
                <button className="Button">
                <h2 style={{fontSize:"1.1em"}}>See more</h2>
            </button>
            </div>


            <div className="ani" style={{width:"100%", height:"1px", backgroundColor:"grey", marginTop:"3%"}}></div>
            <div style={{width:"100%"}}>
                <h2 className="ani" style={{marginTop:"8%", marginBottom:"1%", color:"grey"}}>Popular</h2>
            </div>
            
            <div className="Box1">
                <Box2/>
                <Box2/>
                <Box2/>
                <Box2/>
                <Box2/>
                <Box2/>
            </div>
            <div className="ani" style={{width:"100%", display:"flex", justifyContent:"center"}}>
                <button className="Button">
                <h2 style={{fontSize:"1.1em"}}>See more</h2>
            </button>
            </div>

            <div className="ani" style={{width:"100%", height:"1px", backgroundColor:"grey", marginTop:"3%"}}></div>

            <div className="ani" style={{width:"100%", display:"flex", justifyContent:"center"}}>
                <button className="Button">
                <h2 style={{fontSize:"1.1em"}}>See more</h2>
            </button>
            </div>
            </div>
        </div>
          ); 
    
}
