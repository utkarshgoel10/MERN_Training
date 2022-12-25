# Notes Page
## import
import { Accordion, Badge, Button, Card } from "react-bootstrap";
# Snippet
```
{notes.map((note) => (
        <Accordion defaultActiveKey={["0"]}>
          <Accordion.Item eventkey="0">
            <Card style={{ margin: 10 }}>
              <Card.Header style={{ display: "flex" }}>
                <span
                  style={{                    
                    textDecoration: "none",
                    flex: 1,
                    cursor: "pointer",
                    alignSelf: "center",
                    fontSize: 18,
                  }}
                >
                  <Accordion.Button as={Card.Text} variant="link">
                    {note.title}
                  </Accordion.Button>
                </span>
                <div style={{alignItems: 'center',display: 'flex',marginLeft: '0.8rem'}}>
                  <Button href={`/note/${note.id}`}>Edit</Button>
                  <Button variant="danger" className="mx-2">
                    Delete
                  </Button>
                </div>
              </Card.Header>
              <Accordion.Collapse>
                <Card.Body>
                  <h4>
                    <Badge bg="success" text="light">
                      Category - {note.category}{" "}
                    </Badge>
                  </h4>

                  <blockquote className="blockquote mb-0">
                    <p>{note.content}</p>
                    <footer className="blockquote-footer">
                      Created on - date
                    </footer>
                  </blockquote>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion.Item>
        </Accordion>
      ))}
```
