import { Alert } from "react-bootstrap";

const Error = (props) => (
  <Alert variant="danger" className="mt-2 border border-1 border-danger text-danger">
    Errore nel reperimento dei dati
  </Alert>
);

export default Error;
