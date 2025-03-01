import {Canvas} from "@react-three/fiber"
import {Experience} from "./Experience"
import PanelProjectsTailwind from "./panel/PanelProjectsTailwind"
import './projects.css'
import {Float} from "@react-three/drei";

const Projects = () => {
    return (
        <div className="bg-slate-200">
            <Canvas shadows camera={{position: [0, 0.05, 0.1], fov: 35}}>
                    <Experience/>
            </Canvas>
            <PanelProjectsTailwind/>
        </div>
    )
}

export default Projects;