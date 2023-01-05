import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";

const HomeTable = ({ tableData }) => {
  return (
    <Container>
      <Row>
        <Col className="trendingTable">
          <h1 style={{ textAlign: "left" }}>Trending</h1>
          <Table hover={true} responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {tableData.slice(0, 10).map((tableItem, idx) => {
                return (
                  <tr
                    key={idx}
                    onClick={() => {
                      window.location = `/nft/${tableItem._id}`;
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
        <Col className="newTable">
          <h1 style={{ textAlign: "right" }}>New NFTs</h1>
          <Table hover={true} responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {tableData
                .slice(tableData.length - 10, tableData.length)
                .map((tableItem, idx) => {
                  return (
                    <tr
                      key={idx}
                      onClick={() => {
                        window.location = `/nft/${tableItem._id}`;
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
      </Row>
    </Container>
  );
};

export default HomeTable;
