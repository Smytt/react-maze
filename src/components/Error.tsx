import { Alert } from 'reactstrap';

const Error: React.FC<Props> = ({ message }) => {
  return (
    <div style={{ width: '500px', margin: '0 auto' }}>
      <Alert color="danger">
        <h4 className="alert-heading">Oops!</h4>
        <p>
          {message}
        </p>
      </Alert>
    </div>
  )
}

interface Props {
  message: string
}

export default Error;