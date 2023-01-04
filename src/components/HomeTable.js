import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";

const HomeTable = ({ tableData }) => {
  return (
    <Container>
      <h1 style={{ textAlign: "left" }}>Trending</h1>
      <Row>
        <Col>
          <Table hover={true} responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((tableItem, idx) => {
                return (
                  <tr
                    key={idx}
                    onClick={() => {
                      window.location = `/details/${tableItem._id}`;
                    }}
                  >
                    <td>
                      <span>{idx + 1}</span>
                      <img
                        src={tableItem.image}
                        alt={tableItem.assetName}
                        style={{
                          width: "6rem",
                          height: "6rem",
                        }}
                      />
                    </td>
                    <td>{tableItem.assetName}</td>
                    <td>{tableItem.price}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
        {/* <Col>Table Overflow</Col> */}
      </Row>
    </Container>
  );
};

export default HomeTable;
