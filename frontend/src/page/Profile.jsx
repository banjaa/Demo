
import {Navbar} from "../components/Navbar"
import {Box2} from "../components/Box2"
import {Classes} from "../components/Classes"

export const Profile = () => {
    return(
        <div className="ss">
            <Navbar/>
            <div className="profiless">
                <div className="profiles">
                    <div className="leftsideprof">
                        <div className="upgreen"></div>
                        <div className="downwhite">
                            <div className="theirname">Tugsbileg</div>
                            <div className="line"></div>
                            <div className="description">Hola im a designer and im ready to help :D</div>
                            <div className="proftag">
                                <div className="tagproff">Designer</div>
                                <div className="tagproff">Student</div>
                                <div className="tagproff">Hop3c</div>
                                <div className="tagproff"></div>
                            </div>
                        </div>
                    </div>
                    <div className="rightsideprof">
                        <div className="classnameproff">My classes</div>
                        <div className="classes">
                            <div className="row1">
                                <Classes name={"classuudiin ner"}project={"23 "} number={"1"}/>
                                <Classes name={"classuudiin ner"}project={"23 "} number={"2"}/>
                                <Classes name={"classuudiin ner"}project={"23 "} number={"3"}/>
                                <Classes name={"classuudiin ner"}project={"23 "} number={"4"}/>
                                <Classes name={"classuudiin ner"}project={"23 "} number={"5"}/>
                                <Classes name={"classuudiin ner"}project={"23 "} number={"6"}/>
                                <Classes name={"classuudiin ner"}project={"23 "} number={"7"}/>
                                <Classes name={"classuudiin ner"}project={"23 "} number={"8"}/>
                                <Classes name={"classuudiin ner"}project={"23 "} number={"9"}/>
                                <Classes name={"classuudiin ner"}project={"23 "} number={"10"}/>
                                <Classes name={"classuudiin ner"}project={"23 "} number={"11"}/>
                                <Classes name={"classuudiin ner"}project={"23 "} number={"12"}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="myprojects">MY PROJECTS.</div>
                <div className="theirprojects">
                    <Box2/>
                    <Box2/>
                    <Box2/>
                </div>
                <div className="theirprojects">
                    <Box2/>
                    <Box2/>
                    <Box2/>
                </div>
            </div>
            
        </div>
    )
}
