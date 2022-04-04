import "./SubjectPage.css";
import { Card, CardContent, CardActions, Typography } from "@mui/material";
import { Link } from 'react-router-dom';

const subjects = [
  {
    key: 1,
    title: "Python",
    professor: "Alex",
  },
  {
    key: 2,
    title: "C",
    professor: "Taylor",
  },
  {
    key: 3,
    title: "C++",
    professor: "Jeff",
  },
];

export default function SubjectPage() {

const handleClick = (subject) => {
    return (console.log({subject}+"Clicked!"))
}
  return (
    <div className="main_subjectPage">
      <Typography variant="h2" fontSize="20px">
        List of subjects
      </Typography>
      <hr />

      {subjects.map((subject) => (
        <div>
        <Link to={`/main/subject/${subject.key}`} style={{textDecoration:"none"}}>
        <Card backgroundColor="secondary.main">
            <CardActions onClick={handleClick}>
              <CardContent>
                <Typography variant="h3" fontSize="2rem" color="primary.dark" >{subject.title}</Typography>
                <Typography variant="h4" fontSize="1rem" color="primary.main">{subject.professor}</Typography>
              </CardContent>
            </CardActions>
          </Card>
        </Link>
          <br />
        </div>
      ))}
    </div>
  );
}
