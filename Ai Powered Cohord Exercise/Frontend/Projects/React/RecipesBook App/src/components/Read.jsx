
import { useParams } from 'react-router-dom';

const Read = () => {
  const {id} = useParams();
  const recpie = JSON.parse(localStorage.getItem("recpie") )
  const {Des, Ingredients , category ,  cheif , src , title  } = recpie.find((item) => item.id === id);
  return (
    <div>{title}</div>
  )
}

export default Read