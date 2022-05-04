import { Link, useParams } from "react-router-dom"

function ProjectDetails() {

    const { project_id } = useParams()

    // const [foundProject, setFoundProject] = useState({})

    // useEffect(() => {           // Simulación de API call actualizando el estado
    //     axios
    //         .get('http://example.com/api/projects/' + project_id)
    //         .then((response) => {
    //             setFoundProject(response.data);
    //         })
    // }, [])

    return (
        <div>
            <h1>Detalles de proyecto</h1>
            <p>Aquí mandarías a la BBDD el Id del proyecto, que es {project_id}</p>
            <hr />
            <Link to="/projects">Volver a proyectos</Link>

        </div>
    );
}

export default ProjectDetails;