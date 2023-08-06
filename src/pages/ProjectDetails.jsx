import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";

export const ProjectsDetails = ({userName}) => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState({})
  let { name } = useParams()

  name = name.slice(1)
  console.log(name)

  useEffect(()=>{
    async function fetchData() {
      const profile = await fetch(`https://api.github.com/repos/${userName}/${name}`);
      const result = await profile.json();
      if (result) {
        setProjects(result);
        setLoading(false);
      }
    }
    fetchData();
  }, [userName, name])

  return (
    <div className="Projects-container">
      <h2>Projects</h2>
      {
        loading ? (<span>Loading...</span>) : (
        <div>
          <p>{projects.name}</p>
          <p>{projects.visibility}</p>
          <p>{projects.pushed_at}</p>
        </div>)
      }
    </div>
  )
}
