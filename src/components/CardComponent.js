import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import postService from '../services/postService';
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

function CardComponent({ post }) {
    const user = useContext(UserContext)

  let navigate = useNavigate();
  const handleClick = (postId) => {
    navigate(`/post/${postId}`);
  };
  const generatePdf = async (postId) => {
    const result = await postService.generatePdf(postId)
    return result
  }
  return (
    <Card className='my-1'>
      <Card.Header>posted on {new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "2-digit",
      }).format(new Date(post.createdAt))}
      </Card.Header>
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Button variant="primary" onClick={() => handleClick(post.id)}>See the post</Button>
        <Button variant="danger" onClick={() => generatePdf(post.id)}>Download
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7 17h10v-2H7v2Zm5-3l4-4l-1.4-1.4l-1.6 1.55V6h-2v4.15L9.4 8.6L8 10l4 4Zm0 8q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0-8Z" /></svg>
        </Button>
        {user?.role === 'admin' && <Button variant="danger">delete </Button>}

      </Card.Body>
    </Card>
  );
}

export default CardComponent;